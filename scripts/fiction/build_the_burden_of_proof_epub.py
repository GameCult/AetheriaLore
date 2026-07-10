#!/usr/bin/env python3
"""Build and validate The Burden of Proof as a deterministic EPUB 3 archive."""

from __future__ import annotations

import argparse
import html
import os
import re
import uuid
import zipfile
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from xml.etree import ElementTree


ROOT = Path(__file__).resolve().parents[2]
DEFAULT_SOURCE = ROOT / "Aetheria" / "Fiction" / "The Burden of Proof.md"
DEFAULT_OUTPUT = ROOT / "Aetheria" / "static" / "fiction" / "the-burden-of-proof.epub"
BOOK_ID = f"urn:uuid:{uuid.uuid5(uuid.NAMESPACE_URL, 'https://aetheria.gamecult.org/Fiction/The-Burden-of-Proof')}"


@dataclass
class Chapter:
    title: str
    movement: str
    blocks: list[str]


@dataclass
class SpinePage:
    chapter_index: int
    page_index: int
    title: str
    movement: str
    blocks: list[str]

    @property
    def href(self) -> str:
        if self.page_index == 1:
            return f"text/chapter-{self.chapter_index:02}.xhtml"
        return f"text/chapter-{self.chapter_index:02}-p{self.page_index:02}.xhtml"

    @property
    def item_id(self) -> str:
        if self.page_index == 1:
            return f"chapter-{self.chapter_index}"
        return f"chapter-{self.chapter_index}-p{self.page_index}"


def inline_markup(text: str) -> str:
    placeholders: dict[str, str] = {}

    def hold(value: str) -> str:
        token = f"\x00{len(placeholders)}\x00"
        placeholders[token] = value
        return token

    text = re.sub(r"`([^`]+)`", lambda m: hold(f"<code>{html.escape(m.group(1))}</code>"), text)
    escaped = html.escape(text, quote=False)
    escaped = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", escaped)
    escaped = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", escaped)
    escaped = re.sub(r"(?<!_)_([^_]+)_(?!_)", r"<em>\1</em>", escaped)
    for token, value in placeholders.items():
        escaped = escaped.replace(html.escape(token), value)
    return escaped


def parse_manuscript(source: Path) -> tuple[str, list[Chapter]]:
    lines = source.read_text(encoding="utf-8").splitlines()
    if not lines or not lines[0].startswith("# "):
        raise ValueError("Manuscript must begin with an H1 title")

    title = lines[0][2:].strip()
    movement = ""
    chapters: list[Chapter] = []
    current: Chapter | None = None

    for line in lines[1:]:
        if line.startswith("## "):
            movement = line[3:].strip()
        elif line.startswith("### "):
            current = Chapter(line[4:].strip(), movement, [])
            chapters.append(current)
        elif current is not None and line.strip():
            current.blocks.append(line.strip())

    if not chapters or any(not chapter.blocks for chapter in chapters):
        raise ValueError("Every chapter must contain prose")
    return title, chapters


def xhtml_page(title: str, body: str, body_class: str = "") -> str:
    return f'''<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-GB">
<head><meta charset="utf-8"/><title>{html.escape(title)}</title><link rel="stylesheet" type="text/css" href="../styles/book.css"/></head>
<body class="{body_class}">{body}</body>
</html>'''


def chapter_xhtml(chapter: Chapter) -> str:
    paragraphs = []
    for block in chapter.blocks:
        rendered = inline_markup(block)
        css_class = " class=\"pov\"" if re.fullmatch(r"<strong>[^<]+</strong>", rendered) else ""
        paragraphs.append(f"<p{css_class}>{rendered}</p>")
    body = (
        f'<header><p class="movement">{html.escape(chapter.movement)}</p>'
        f'<h1>{html.escape(chapter.title)}</h1></header>' + "\n".join(paragraphs)
    )
    return xhtml_page(chapter.title, body, "chapter")


def paginate_chapters(chapters: list[Chapter], target_chars: int = 1400) -> list[SpinePage]:
    pages: list[SpinePage] = []
    for chapter_index, chapter in enumerate(chapters, 1):
        chunks: list[list[str]] = []
        current: list[str] = []
        current_chars = 0
        for block in chapter.blocks:
            block_chars = len(block)
            if current and current_chars + block_chars > target_chars:
                chunks.append(current)
                current = []
                current_chars = 0
            current.append(block)
            current_chars += block_chars
        if current:
            chunks.append(current)
        for page_index, blocks in enumerate(chunks, 1):
            pages.append(SpinePage(chapter_index, page_index, chapter.title, chapter.movement, blocks))
    return pages


def page_xhtml(page: SpinePage) -> str:
    paragraphs = []
    for block in page.blocks:
        rendered = inline_markup(block)
        css_class = " class=\"pov\"" if re.fullmatch(r"<strong>[^<]+</strong>", rendered) else ""
        paragraphs.append(f"<p{css_class}>{rendered}</p>")
    header = ""
    if page.page_index == 1:
        header = f'<header><p class="movement">{html.escape(page.movement)}</p><h1>{html.escape(page.title)}</h1></header>'
    body = header + "\n".join(paragraphs)
    return xhtml_page(page.title, body, "chapter")


def modified_timestamp(source: Path) -> str:
    epoch = int(os.environ.get("SOURCE_DATE_EPOCH", source.stat().st_mtime))
    return datetime.fromtimestamp(epoch, timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def build(source: Path, output: Path) -> None:
    title, chapters = parse_manuscript(source)
    pages = paginate_chapters(chapters)
    output.parent.mkdir(parents=True, exist_ok=True)
    chapter_items = "\n".join(
        f'<item id="{page.item_id}" href="{page.href}" media-type="application/xhtml+xml"/>'
        for page in pages
    )
    spine = "\n".join(f'<itemref idref="{page.item_id}"/>' for page in pages)
    nav_points = "\n".join(
        f'<li><a href="text/chapter-{i:02}.xhtml">{html.escape(chapter.title)}</a></li>'
        for i, chapter in enumerate(chapters, 1)
    )
    ncx_points = "\n".join(
        f'<navPoint id="nav-{i}" playOrder="{i}"><navLabel><text>{html.escape(chapter.title)}</text></navLabel><content src="text/chapter-{i:02}.xhtml"/></navPoint>'
        for i, chapter in enumerate(chapters, 1)
    )
    package = f'''<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="book-id" xml:lang="en-GB">
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="book-id">{BOOK_ID}</dc:identifier><dc:title>{html.escape(title)}</dc:title><dc:creator>GameCult</dc:creator><dc:language>en-GB</dc:language><meta property="dcterms:modified">{modified_timestamp(source)}</meta></metadata>
<manifest><item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/><item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/><item id="css" href="styles/book.css" media-type="text/css"/><item id="title" href="text/title.xhtml" media-type="application/xhtml+xml"/>{chapter_items}</manifest>
<spine toc="ncx"><itemref idref="title"/>{spine}</spine>
</package>'''
    nav = f'''<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en-GB"><head><meta charset="utf-8"/><title>Contents</title></head><body><nav epub:type="toc"><h1>Contents</h1><ol>{nav_points}</ol></nav></body></html>'''
    ncx = f'''<?xml version="1.0" encoding="utf-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1"><head><meta name="dtb:uid" content="{BOOK_ID}"/></head><docTitle><text>{html.escape(title)}</text></docTitle><navMap>{ncx_points}</navMap></ncx>'''
    title_page = xhtml_page(title, f'<main class="title-page"><h1>{html.escape(title)}</h1><p>A novella set in Aetheria</p><p class="author">GameCult</p></main>', "title")
    css = """body{font-family:Georgia,serif;line-height:1.62;margin:5%;color:#18191b;background:#faf8f3}h1{line-height:1.15}p{margin:0 0 .85em}.movement{text-transform:uppercase;letter-spacing:.08em;font:700 .72em system-ui,sans-serif;color:#666}.pov{margin:1.25em 0 1.5em;font-family:system-ui,sans-serif}.title-page{text-align:center;margin-top:30vh}.title-page h1{font-size:2.4em}.author{margin-top:3em}code{font-family:monospace;font-size:.9em}@media(prefers-color-scheme:dark){body{color:#e9e7e1;background:#18191b}.movement{color:#aaa}}"""
    container = '''<?xml version="1.0" encoding="utf-8"?><container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0"><rootfiles><rootfile full-path="EPUB/package.opf" media-type="application/oebps-package+xml"/></rootfiles></container>'''

    with zipfile.ZipFile(output, "w") as archive:
        archive.writestr("mimetype", "application/epub+zip", compress_type=zipfile.ZIP_STORED)
        archive.writestr("META-INF/container.xml", container)
        archive.writestr("EPUB/package.opf", package)
        archive.writestr("EPUB/nav.xhtml", nav)
        archive.writestr("EPUB/toc.ncx", ncx)
        archive.writestr("EPUB/styles/book.css", css)
        archive.writestr("EPUB/text/title.xhtml", title_page)
        for page in pages:
            archive.writestr(f"EPUB/{page.href}", page_xhtml(page))
    validate(output, len(chapters))


def validate(epub: Path, expected_chapters: int | None = None) -> None:
    with zipfile.ZipFile(epub) as archive:
        entries = archive.infolist()
        if not entries or entries[0].filename != "mimetype" or entries[0].compress_type != zipfile.ZIP_STORED:
            raise ValueError("EPUB mimetype must be the first, uncompressed entry")
        if archive.read("mimetype") != b"application/epub+zip":
            raise ValueError("Invalid EPUB mimetype")
        xml_entries = [name for name in archive.namelist() if name.endswith((".xml", ".opf", ".ncx", ".xhtml"))]
        for name in xml_entries:
            ElementTree.fromstring(archive.read(name))
        chapters = [name for name in archive.namelist() if re.fullmatch(r"EPUB/text/chapter-\d+\.xhtml", name)]
        if expected_chapters is not None and len(chapters) != expected_chapters:
            raise ValueError(f"Expected {expected_chapters} chapters, found {len(chapters)}")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, default=DEFAULT_SOURCE)
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--check", action="store_true", help="Validate the existing output without rebuilding")
    args = parser.parse_args()
    if args.check:
        validate(args.output)
    else:
        build(args.source, args.output)
    print(args.output)


if __name__ == "__main__":
    main()
