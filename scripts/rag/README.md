# Local RAG

This folder adds a lightweight local retrieval layer for the Aetheria Obsidian vault using:

- `Qdrant` in local on-disk mode
- `FastEmbed` for local CPU embeddings
- Markdown-aware chunking tuned for heading-structured lore notes

## What It Indexes

By default the tool indexes `Aetheria/**/*.md` and stores local artifacts under `.rag/`.

Stored metadata includes:

- note path and title
- heading path
- era / category / note type
- extracted wiki links
- cleaned text and raw chunk Markdown

## One-Time Install

From the repository root in PowerShell:

```powershell
./scripts/rag/rag.ps1 install
```

This installs `qdrant-client[fastembed]`. The first build also downloads the embedding model to `.rag/model-cache/`.
Python packages are installed into `.rag/pydeps/` so the setup stays local to this repository.

## Build The Index

```powershell
./scripts/rag/rag.ps1 build
```

This writes:

- `.rag/pydeps/` for local Python dependencies
- `.rag/qdrant/` for the local vector store
- `.rag/chunks.jsonl` for chunk metadata and lexical reranking
- `.rag/manifest.json` for build stats

## Query The Index

```powershell
./scripts/rag/rag.ps1 query "Pan-Solar Consortium"
./scripts/rag/rag.ps1 query "legal machinery that prices war" --category Politics
./scripts/rag/rag.ps1 query "upload continuity scandal" --json
```

## Inspect Stats

```powershell
./scripts/rag/rag.ps1 stats
```

## Notes

- The query path uses hybrid scoring: vector similarity plus exact/keyword matching.
- Short notes stay whole; larger notes are split by headings and then by paragraph groups when needed.
- The default embedding model is `BAAI/bge-small-en-v1.5`, which is a strong CPU-friendly baseline for a corpus this size.
- Local Qdrant locks the on-disk store while a command is running, so run `build`/`query` commands one at a time.
