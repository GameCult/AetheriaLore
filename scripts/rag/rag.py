from __future__ import annotations

import argparse
import hashlib
import json
import re
import site
import subprocess
import sys
from dataclasses import dataclass
from datetime import UTC, datetime
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parents[2]
DEFAULT_CORPUS_ROOT = REPO_ROOT / "Aetheria"
RAG_ROOT = REPO_ROOT / ".rag"
LOCAL_PYDEPS = RAG_ROOT / "pydeps"
if LOCAL_PYDEPS.exists():
    site.addsitedir(str(LOCAL_PYDEPS))

try:
    from fastembed import TextEmbedding
    from qdrant_client import QdrantClient
    from qdrant_client import models
except ImportError:
    TextEmbedding = None
    QdrantClient = None
    models = None

QDRANT_PATH = RAG_ROOT / "qdrant"
MODEL_CACHE_PATH = RAG_ROOT / "model-cache"
CHUNKS_PATH = RAG_ROOT / "chunks.jsonl"
MANIFEST_PATH = RAG_ROOT / "manifest.json"
DEFAULT_COLLECTION = "aetheria_lore"
DEFAULT_MODEL = "BAAI/bge-small-en-v1.5"
WIKILINK_RE = re.compile(r"\[\[([^\[\]]+)\]\]")
HEADING_RE = re.compile(r"^(#{1,6})\s+(.+?)\s*$")
TOKEN_RE = re.compile(r"[a-z0-9][a-z0-9\-']+")
STOPWORDS = {
    "a",
    "an",
    "and",
    "are",
    "as",
    "at",
    "be",
    "by",
    "for",
    "from",
    "how",
    "in",
    "into",
    "is",
    "it",
    "its",
    "of",
    "on",
    "or",
    "that",
    "the",
    "their",
    "this",
    "to",
    "what",
    "who",
    "with",
}


@dataclass
class Chunk:
    chunk_id: str
    path: str
    title: str
    heading_path: list[str]
    content: str
    text: str
    wikilinks: list[str]
    note_type: str
    era: str
    category: str
    subtree: str
    word_count: int
    chunk_index: int
    content_hash: str

    def payload(self) -> dict[str, Any]:
        return {
            "chunk_id": self.chunk_id,
            "path": self.path,
            "title": self.title,
            "heading_path": self.heading_path,
            "heading_label": " / ".join(self.heading_path),
            "content": self.content,
            "text": self.text,
            "wikilinks": self.wikilinks,
            "note_type": self.note_type,
            "era": self.era,
            "category": self.category,
            "subtree": self.subtree,
            "word_count": self.word_count,
            "chunk_index": self.chunk_index,
            "content_hash": self.content_hash,
            "preview": preview_text(self.text),
        }


def ensure_dependencies() -> None:
    if TextEmbedding is None or QdrantClient is None or models is None:
        raise SystemExit(
            "Missing RAG dependencies. Run:\n"
            "  ./scripts/rag/rag.ps1 install\n"
            "or\n"
            f"  {sys.executable} -m pip install -r {REPO_ROOT / 'requirements-rag.txt'}"
        )


def iso_now() -> str:
    return datetime.now(UTC).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def preview_text(text: str, limit: int = 180) -> str:
    compact = " ".join(text.split())
    if len(compact) <= limit:
        return compact
    return compact[: limit - 1].rstrip() + "…"


def normalise_path(path: Path) -> str:
    return path.as_posix()


def display_path(path: Path) -> str:
    try:
        return normalise_path(path.relative_to(REPO_ROOT))
    except ValueError:
        return normalise_path(path)


def hash_text(text: str) -> str:
    return hashlib.sha1(text.encode("utf-8")).hexdigest()


def count_words(text: str) -> int:
    return len(re.findall(r"\S+", text))


def replace_wikilinks(markdown: str) -> str:
    def repl(match: re.Match[str]) -> str:
        target = match.group(1).strip()
        target_no_alias = target.split("|", 1)
        destination = target_no_alias[0]
        alias = target_no_alias[1] if len(target_no_alias) > 1 else ""
        label = alias or destination.split("#", 1)[0]
        destination_note = destination.split("#", 1)[0]
        if alias and alias != destination_note:
            return f"{alias} ({destination_note})"
        return label

    return WIKILINK_RE.sub(repl, markdown)


def clean_markdown(markdown: str) -> str:
    text = replace_wikilinks(markdown)
    text = re.sub(r"`([^`]+)`", r"\1", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"\1", text)
    text = re.sub(r"\*([^*]+)\*", r"\1", text)
    text = re.sub(r"^#{1,6}\s*", "", text, flags=re.MULTILINE)
    text = re.sub(r"^>\s*", "", text, flags=re.MULTILINE)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def extract_wikilinks(markdown: str) -> list[str]:
    seen: set[str] = set()
    ordered: list[str] = []
    for raw in WIKILINK_RE.findall(markdown):
        target = raw.split("|", 1)[0].split("#", 1)[0].strip()
        if not target:
            continue
        normalized = target.lower()
        if normalized in seen:
            continue
        seen.add(normalized)
        ordered.append(target)
    return ordered


def iter_markdown_files(corpus_root: Path) -> list[Path]:
    return sorted(path for path in corpus_root.rglob("*.md") if path.is_file())


def infer_metadata(rel_path: Path) -> tuple[str, str, str, str]:
    parts = rel_path.parts
    era = "General"
    for candidate in ("Pre-Elysium", "Post-Elysium"):
        if candidate in parts:
            era = candidate
            break

    category = "General"
    for candidate in (
        "Politics",
        "Technology",
        "Concepts",
        "Species",
        "Factions",
        "Timeline",
        "Events",
        "Movements",
        "Powers",
        "Territories",
        "Reference",
    ):
        if candidate in parts:
            category = candidate
            break

    note_type = rel_path.parent.name if rel_path.parent != Path(".") else "Root"
    subtree = normalise_path(rel_path.parent)
    return era, category, note_type, subtree


def split_sections(markdown: str) -> list[tuple[list[str], str]]:
    sections: list[tuple[list[str], str]] = []
    current_lines: list[str] = []
    heading_stack: list[str] = []
    current_heading: list[str] = []

    def flush() -> None:
        content = "\n".join(current_lines).strip()
        if content:
            sections.append((current_heading.copy(), content))

    for line in markdown.splitlines():
        heading_match = HEADING_RE.match(line)
        if heading_match:
            flush()
            current_lines = [line]
            level = len(heading_match.group(1))
            heading_text = heading_match.group(2).strip()
            heading_stack = heading_stack[: level - 1]
            heading_stack.append(heading_text)
            current_heading = heading_stack.copy()
            continue
        current_lines.append(line)

    flush()
    return sections


def split_large_section(section_markdown: str, max_words: int = 320) -> list[str]:
    if count_words(section_markdown) <= max_words:
        return [section_markdown.strip()]

    paragraphs = [paragraph.strip() for paragraph in re.split(r"\n\s*\n", section_markdown) if paragraph.strip()]
    if not paragraphs:
        return [section_markdown.strip()]

    chunks: list[str] = []
    buffer: list[str] = []
    for paragraph in paragraphs:
        proposal = "\n\n".join(buffer + [paragraph]).strip()
        if buffer and count_words(proposal) > max_words:
            chunks.append("\n\n".join(buffer).strip())
            buffer = [paragraph]
        else:
            buffer.append(paragraph)

    if buffer:
        chunks.append("\n\n".join(buffer).strip())

    return chunks


def build_chunk_text(title: str, heading_path: list[str], markdown: str) -> str:
    context = [title]
    if heading_path:
        context.append(" / ".join(heading_path))
    context_block = "\n".join(context)
    return clean_markdown(f"{context_block}\n\n{markdown}")


def chunk_note(file_path: Path, corpus_root: Path) -> list[Chunk]:
    markdown = file_path.read_text(encoding="utf-8", errors="replace").strip()
    if not markdown:
        return []

    rel_path = file_path.relative_to(REPO_ROOT)
    title = file_path.stem
    era, category, note_type, subtree = infer_metadata(rel_path)
    note_hash = hash_text(markdown)
    note_wikilinks = extract_wikilinks(markdown)
    sections = split_sections(markdown)

    raw_chunks: list[tuple[list[str], str]] = []
    if count_words(markdown) <= 220:
        raw_chunks = [([], markdown)]
    else:
        for heading_path, section_markdown in sections:
            for subchunk in split_large_section(section_markdown):
                raw_chunks.append((heading_path, subchunk))

    if not raw_chunks:
        raw_chunks = [([], markdown)]

    chunks: list[Chunk] = []
    for index, (heading_path, content) in enumerate(raw_chunks):
        text = build_chunk_text(title, heading_path, content)
        chunk_source = f"{normalise_path(rel_path)}::{index}::{content}"
        chunk_id = hash_text(chunk_source)
        chunks.append(
            Chunk(
                chunk_id=chunk_id,
                path=normalise_path(rel_path),
                title=title,
                heading_path=heading_path,
                content=content.strip(),
                text=text,
                wikilinks=note_wikilinks,
                note_type=note_type,
                era=era,
                category=category,
                subtree=subtree,
                word_count=count_words(content),
                chunk_index=index,
                content_hash=note_hash,
            )
        )
    return chunks


def collect_chunks(corpus_root: Path) -> list[Chunk]:
    chunks: list[Chunk] = []
    for file_path in iter_markdown_files(corpus_root):
        chunks.extend(chunk_note(file_path, corpus_root))
    return chunks


def ensure_storage_dirs() -> None:
    RAG_ROOT.mkdir(exist_ok=True)
    LOCAL_PYDEPS.mkdir(parents=True, exist_ok=True)
    MODEL_CACHE_PATH.mkdir(parents=True, exist_ok=True)
    QDRANT_PATH.mkdir(parents=True, exist_ok=True)


def save_chunk_cache(chunks: list[Chunk]) -> None:
    ensure_storage_dirs()
    with CHUNKS_PATH.open("w", encoding="utf-8", newline="\n") as handle:
        for chunk in chunks:
            handle.write(json.dumps(chunk.payload(), ensure_ascii=False) + "\n")


def save_manifest(corpus_root: Path, chunks: list[Chunk], collection: str, model_name: str) -> None:
    files = sorted({chunk.path for chunk in chunks})
    manifest = {
        "built_at": iso_now(),
        "collection": collection,
        "model": model_name,
        "corpus_root": display_path(corpus_root),
        "file_count": len(files),
        "chunk_count": len(chunks),
        "paths": files,
    }
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2), encoding="utf-8")


def load_chunks() -> list[dict[str, Any]]:
    if not CHUNKS_PATH.exists():
        raise SystemExit("No chunk cache found. Run `./scripts/rag/rag.ps1 build` first.")
    records: list[dict[str, Any]] = []
    with CHUNKS_PATH.open("r", encoding="utf-8") as handle:
        for line in handle:
            line = line.strip()
            if line:
                records.append(json.loads(line))
    return records


def embed_documents(model_name: str, texts: list[str]) -> list[list[float]]:
    ensure_dependencies()
    model = TextEmbedding(model_name=model_name, cache_dir=str(MODEL_CACHE_PATH))
    return [vector.tolist() for vector in model.embed([f"passage: {text}" for text in texts])]


def embed_query(model_name: str, text: str) -> list[float]:
    ensure_dependencies()
    model = TextEmbedding(model_name=model_name, cache_dir=str(MODEL_CACHE_PATH))
    vectors = [vector.tolist() for vector in model.embed([f"query: {text}"])]
    if not vectors:
        raise SystemExit("Embedding model did not return a query vector.")
    return vectors[0]


def qdrant_client() -> QdrantClient:
    ensure_dependencies()
    ensure_storage_dirs()
    return QdrantClient(path=str(QDRANT_PATH))


def build_index(args: argparse.Namespace) -> int:
    corpus_root = Path(args.corpus_root).resolve()
    if not corpus_root.exists():
        raise SystemExit(f"Corpus root does not exist: {corpus_root}")

    chunks = collect_chunks(corpus_root)
    if not chunks:
        raise SystemExit(f"No Markdown notes found under {corpus_root}")

    client = qdrant_client()
    try:
        vectors = embed_documents(args.model, [chunk.text for chunk in chunks])
        vector_size = len(vectors[0])

        if client.collection_exists(args.collection):
            client.delete_collection(args.collection)
        client.create_collection(
            collection_name=args.collection,
            vectors_config=models.VectorParams(size=vector_size, distance=models.Distance.COSINE),
        )

        points = [
            models.PointStruct(id=index, vector=vector, payload=chunk.payload())
            for index, (chunk, vector) in enumerate(zip(chunks, vectors, strict=True), start=1)
        ]
        client.upload_points(collection_name=args.collection, points=points)
    finally:
        client.close()

    save_chunk_cache(chunks)
    save_manifest(corpus_root, chunks, args.collection, args.model)

    summary = {
        "status": "ok",
        "built_at": iso_now(),
        "collection": args.collection,
        "model": args.model,
        "corpus_root": display_path(corpus_root),
        "file_count": len({chunk.path for chunk in chunks}),
        "chunk_count": len(chunks),
        "qdrant_path": normalise_path(QDRANT_PATH.relative_to(REPO_ROOT)),
        "model_cache_path": normalise_path(MODEL_CACHE_PATH.relative_to(REPO_ROOT)),
    }
    print(json.dumps(summary, indent=2))
    return 0


def tokenise(text: str) -> list[str]:
    tokens = [token for token in TOKEN_RE.findall(text.lower()) if token not in STOPWORDS]
    return tokens


def lexical_score(query: str, chunk: dict[str, Any]) -> float:
    query_lower = query.lower().strip()
    title = str(chunk.get("title", ""))
    title_lower = title.lower()
    text = str(chunk.get("text", ""))
    text_lower = text.lower()
    path_lower = str(chunk.get("path", "")).lower()
    wikilinks = [str(item).lower() for item in chunk.get("wikilinks", [])]
    tokens = tokenise(query)

    score = 0.0
    if query_lower and query_lower in title_lower:
        score += 6.0
    if query_lower and query_lower in path_lower:
        score += 4.0
    if query_lower and query_lower in wikilinks:
        score += 5.0
    if query_lower and query_lower in text_lower:
        score += 2.0

    for token in tokens:
        if token in title_lower:
            score += 1.5
        if any(token in wikilink for wikilink in wikilinks):
            score += 1.2
        occurrences = text_lower.count(token)
        if occurrences:
            score += min(occurrences, 5) * 0.25

    return score


def filters_match(chunk: dict[str, Any], args: argparse.Namespace) -> bool:
    if args.era and str(chunk.get("era", "")).lower() != args.era.lower():
        return False
    if args.category and str(chunk.get("category", "")).lower() != args.category.lower():
        return False
    if args.note_type and str(chunk.get("note_type", "")).lower() != args.note_type.lower():
        return False
    if args.path_contains and args.path_contains.lower() not in str(chunk.get("path", "")).lower():
        return False
    return True


def query_index(args: argparse.Namespace) -> int:
    client = qdrant_client()
    try:
        if not client.collection_exists(args.collection):
            raise SystemExit(f"Collection `{args.collection}` does not exist. Run `./scripts/rag/rag.ps1 build` first.")

        cached_chunks = {chunk["chunk_id"]: chunk for chunk in load_chunks()}
        query_vector = embed_query(args.model, args.query)
        semantic_limit = max(args.semantic_limit, args.limit * 4)
        semantic_points = client.query_points(
            collection_name=args.collection,
            query=query_vector,
            limit=semantic_limit,
            with_payload=True,
        ).points
    finally:
        client.close()

    candidates: dict[str, dict[str, Any]] = {}
    for point in semantic_points:
        payload = point.payload or {}
        if not filters_match(payload, args):
            continue
        chunk_id = str(payload.get("chunk_id") or point.id)
        candidates[chunk_id] = {
            "chunk": payload,
            "semantic_score": max(float(point.score), 0.0),
            "lexical_score": 0.0,
        }

    for chunk_id, chunk in cached_chunks.items():
        if not filters_match(chunk, args):
            continue
        score = lexical_score(args.query, chunk)
        if score <= 0:
            continue
        entry = candidates.setdefault(
            chunk_id,
            {
                "chunk": chunk,
                "semantic_score": 0.0,
                "lexical_score": 0.0,
            },
        )
        entry["lexical_score"] = max(entry["lexical_score"], score)

    if not candidates:
        print(json.dumps({"query": args.query, "results": []}, indent=2))
        return 0

    max_semantic = max(entry["semantic_score"] for entry in candidates.values()) or 1.0
    max_lexical = max(entry["lexical_score"] for entry in candidates.values()) or 1.0

    results: list[dict[str, Any]] = []
    for entry in candidates.values():
        semantic_norm = entry["semantic_score"] / max_semantic if max_semantic else 0.0
        lexical_norm = entry["lexical_score"] / max_lexical if max_lexical else 0.0
        fused_score = (semantic_norm * args.semantic_weight) + (lexical_norm * args.lexical_weight)
        chunk = entry["chunk"]
        results.append(
            {
                "score": round(fused_score, 6),
                "semantic_score": round(entry["semantic_score"], 6),
                "lexical_score": round(entry["lexical_score"], 6),
                "path": chunk.get("path"),
                "title": chunk.get("title"),
                "heading_path": chunk.get("heading_path", []),
                "era": chunk.get("era"),
                "category": chunk.get("category"),
                "note_type": chunk.get("note_type"),
                "wikilinks": chunk.get("wikilinks", []),
                "preview": chunk.get("preview") or preview_text(str(chunk.get("text", ""))),
                "content": chunk.get("content"),
            }
        )

    results.sort(key=lambda item: item["score"], reverse=True)
    results = results[: args.limit]

    if args.json:
        print(json.dumps({"query": args.query, "results": results}, indent=2, ensure_ascii=False))
        return 0

    print(f"Query: {args.query}\n")
    for index, result in enumerate(results, start=1):
        heading_label = " / ".join(result["heading_path"]) if result["heading_path"] else "(note overview)"
        print(f"{index}. {result['title']} [{result['score']:.3f}]")
        print(f"   Path: {result['path']}")
        print(f"   Section: {heading_label}")
        print(f"   Era/Category: {result['era']} / {result['category']}")
        print(f"   Preview: {result['preview']}")
        print()
    return 0


def stats(args: argparse.Namespace) -> int:
    if not MANIFEST_PATH.exists():
        raise SystemExit("No manifest found. Run `./scripts/rag/rag.ps1 build` first.")
    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    print(json.dumps(manifest, indent=2, ensure_ascii=False))
    return 0


def install(args: argparse.Namespace) -> int:
    requirements = REPO_ROOT / "requirements-rag.txt"
    ensure_storage_dirs()
    command = [
        sys.executable,
        "-m",
        "pip",
        "install",
        "--target",
        str(LOCAL_PYDEPS),
        "-r",
        str(requirements),
    ]
    if args.upgrade:
        command.append("--upgrade")
    return subprocess.call(command)


def parser() -> argparse.ArgumentParser:
    main_parser = argparse.ArgumentParser(description="Local Qdrant/FastEmbed RAG tools for the Aetheria vault.")
    subparsers = main_parser.add_subparsers(dest="command", required=True)

    install_parser = subparsers.add_parser("install", help="Install Python dependencies for the local RAG toolchain.")
    install_parser.add_argument("--upgrade", action="store_true", help="Upgrade dependencies during install.")
    install_parser.set_defaults(func=install)

    build_parser = subparsers.add_parser("build", help="Index the vault into local Qdrant storage.")
    build_parser.add_argument("--corpus-root", default=str(DEFAULT_CORPUS_ROOT), help="Directory of Markdown notes to index.")
    build_parser.add_argument("--collection", default=DEFAULT_COLLECTION, help="Qdrant collection name.")
    build_parser.add_argument("--model", default=DEFAULT_MODEL, help="FastEmbed model name.")
    build_parser.set_defaults(func=build_index)

    query_parser = subparsers.add_parser("query", help="Run a hybrid semantic + lexical search over indexed chunks.")
    query_parser.add_argument("query", help="Natural-language or exact-name query.")
    query_parser.add_argument("--collection", default=DEFAULT_COLLECTION, help="Qdrant collection name.")
    query_parser.add_argument("--model", default=DEFAULT_MODEL, help="FastEmbed model name.")
    query_parser.add_argument("--limit", type=int, default=8, help="Number of results to return.")
    query_parser.add_argument("--semantic-limit", type=int, default=24, help="How many semantic matches to fetch before reranking.")
    query_parser.add_argument("--semantic-weight", type=float, default=0.7, help="Weight of vector similarity in the fused score.")
    query_parser.add_argument("--lexical-weight", type=float, default=0.3, help="Weight of exact/keyword similarity in the fused score.")
    query_parser.add_argument("--era", help="Optional exact era filter, e.g. Pre-Elysium.")
    query_parser.add_argument("--category", help="Optional exact category filter, e.g. Technology.")
    query_parser.add_argument("--note-type", help="Optional exact note_type filter, usually the parent folder.")
    query_parser.add_argument("--path-contains", help="Optional substring filter against the note path.")
    query_parser.add_argument("--json", action="store_true", help="Emit raw JSON for downstream tooling.")
    query_parser.set_defaults(func=query_index)

    stats_parser = subparsers.add_parser("stats", help="Show build metadata for the current local index.")
    stats_parser.set_defaults(func=stats)
    return main_parser


def main() -> int:
    args = parser().parse_args()
    return int(args.func(args))


if __name__ == "__main__":
    raise SystemExit(main())
