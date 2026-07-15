#!/usr/bin/env python3
"""Build and validate an Aetheria fiction manuscript as a deterministic EPUB 3 archive."""

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


@dataclass
class Chapter:
    number: int
    title: str
    movement: str
    blocks: list[str]


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
    movement_level: int | None = None
    heading_schema: tuple[int, int] | None = None
    chapters: list[Chapter] = []
    current: Chapter | None = None

    for line in lines[1:]:
        heading = re.fullmatch(r"(#{1,3})\s+(.+?)\s*", line)
        if heading and re.match(r"Movement\s+", heading.group(2), re.IGNORECASE):
            level = len(heading.group(1))
            if heading_schema is not None and level != heading_schema[0]:
                raise ValueError("Movement heading level changes within the manuscript")
            movement = heading.group(2)
            movement_level = level
            current = None
        elif heading and (chapter_match := re.match(r"Chapter\s+(\d+)\b", heading.group(2), re.IGNORECASE)):
            number = int(chapter_match.group(1))
            expected = len(chapters) + 1
            if number != expected:
                raise ValueError(f"Expected Chapter {expected}, found Chapter {number}")
            if not movement:
                raise ValueError(f"Chapter {number} has no movement")
            schema = (movement_level, len(heading.group(1)))
            if schema not in {(1, 2), (2, 3)}:
                raise ValueError("Use H1 movements with H2 chapters, or H2 movements with H3 chapters")
            if heading_schema is None:
                heading_schema = schema
            elif schema != heading_schema:
                raise ValueError("Movement and chapter heading levels must remain consistent")
            current = Chapter(number, heading.group(2), movement, [])
            chapters.append(current)
        elif heading:
            raise ValueError(f"Unsupported heading after title: {line}")
        elif current is not None and line.strip():
            current.blocks.append(line.strip())
        elif line.strip():
            raise ValueError(f"Prose appears before the first chapter: {line}")

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
        if block in {"***", "* * *", "---", "_ _ _"}:
            paragraphs.append('<hr class="scene-break"/>')
            continue
        rendered = inline_markup(block)
        css_class = " class=\"pov\"" if re.fullmatch(r"<strong>[^<]+</strong>", rendered) else ""
        paragraphs.append(f"<p{css_class}>{rendered}</p>")
    body = (
        f'<header><p class="movement">{html.escape(chapter.movement)}</p>'
        f'<h1>{html.escape(chapter.title)}</h1></header>' + "\n".join(paragraphs)
    )
    return xhtml_page(chapter.title, body, "chapter")


def modified_timestamp(source: Path) -> str:
    epoch = int(os.environ.get("SOURCE_DATE_EPOCH", source.stat().st_mtime))
    return datetime.fromtimestamp(epoch, timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def archive_timestamp(source: Path) -> tuple[int, int, int, int, int, int]:
    epoch = int(os.environ.get("SOURCE_DATE_EPOCH", source.stat().st_mtime))
    value = datetime.fromtimestamp(epoch, timezone.utc)
    if value.year < 1980:
        value = datetime(1980, 1, 1, tzinfo=timezone.utc)
    return value.year, value.month, value.day, value.hour, value.minute, value.second


def write_entry(
    archive: zipfile.ZipFile,
    name: str,
    data: str,
    timestamp: tuple[int, int, int, int, int, int],
    compress_type: int = zipfile.ZIP_DEFLATED,
) -> None:
    info = zipfile.ZipInfo(name, date_time=timestamp)
    info.compress_type = compress_type
    info.create_system = 3
    info.external_attr = 0o644 << 16
    archive.writestr(info, data)


def build(
    source: Path,
    output: Path,
    identifier_url: str,
    expected_chapters: int | None = None,
    expected_title: str | None = None,
) -> None:
    title, chapters = parse_manuscript(source)
    if expected_title is not None and title != expected_title:
        raise ValueError(f"Expected title {expected_title!r}, found {title!r}")
    if expected_chapters is not None and len(chapters) != expected_chapters:
        raise ValueError(f"Expected {expected_chapters} chapters, found {len(chapters)}")
    book_id = f"urn:uuid:{uuid.uuid5(uuid.NAMESPACE_URL, identifier_url)}"
    output.parent.mkdir(parents=True, exist_ok=True)
    chapter_items = "\n".join(
        f'<item id="chapter-{i}" href="text/chapter-{i:02}.xhtml" media-type="application/xhtml+xml"/>'
        for i in range(1, len(chapters) + 1)
    )
    spine = "\n".join(f'<itemref idref="chapter-{i}"/>' for i in range(1, len(chapters) + 1))
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
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="book-id">{book_id}</dc:identifier><dc:title>{html.escape(title)}</dc:title><dc:creator>GameCult</dc:creator><dc:language>en-GB</dc:language><meta property="dcterms:modified">{modified_timestamp(source)}</meta></metadata>
<manifest><item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/><item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/><item id="css" href="styles/book.css" media-type="text/css"/><item id="title" href="text/title.xhtml" media-type="application/xhtml+xml"/>{chapter_items}</manifest>
<spine toc="ncx"><itemref idref="title"/>{spine}</spine>
</package>'''
    nav = f'''<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en-GB"><head><meta charset="utf-8"/><title>Contents</title></head><body><nav epub:type="toc"><h1>Contents</h1><ol>{nav_points}</ol></nav></body></html>'''
    ncx = f'''<?xml version="1.0" encoding="utf-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1"><head><meta name="dtb:uid" content="{book_id}"/></head><docTitle><text>{html.escape(title)}</text></docTitle><navMap>{ncx_points}</navMap></ncx>'''
    title_page = xhtml_page(title, f'<main class="title-page"><h1>{html.escape(title)}</h1><p>A story set in Aetheria</p><p class="author">GameCult</p></main>', "title")
    css = """body{font-family:Georgia,serif;line-height:1.62;margin:5%;color:#18191b;background:#faf8f3}h1{line-height:1.15}p{margin:0 0 .85em}.movement{text-transform:uppercase;letter-spacing:.08em;font:700 .72em system-ui,sans-serif;color:#666}.pov{margin:1.25em 0 1.5em;font-family:system-ui,sans-serif}.scene-break{border:0;text-align:center;margin:1.75em 0}.scene-break::after{content:"* * *";letter-spacing:.6em}.title-page{text-align:center;margin-top:30vh}.title-page h1{font-size:2.4em}.author{margin-top:3em}code{font-family:monospace;font-size:.9em}@media(prefers-color-scheme:dark){body{color:#e9e7e1;background:#18191b}.movement{color:#aaa}}"""
    container = '''<?xml version="1.0" encoding="utf-8"?><container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0"><rootfiles><rootfile full-path="EPUB/package.opf" media-type="application/oebps-package+xml"/></rootfiles></container>'''

    timestamp = archive_timestamp(source)
    with zipfile.ZipFile(output, "w") as archive:
        write_entry(archive, "mimetype", "application/epub+zip", timestamp, zipfile.ZIP_STORED)
        write_entry(archive, "META-INF/container.xml", container, timestamp)
        write_entry(archive, "EPUB/package.opf", package, timestamp)
        write_entry(archive, "EPUB/nav.xhtml", nav, timestamp)
        write_entry(archive, "EPUB/toc.ncx", ncx, timestamp)
        write_entry(archive, "EPUB/styles/book.css", css, timestamp)
        write_entry(archive, "EPUB/text/title.xhtml", title_page, timestamp)
        for i, chapter in enumerate(chapters, 1):
            write_entry(archive, f"EPUB/text/chapter-{i:02}.xhtml", chapter_xhtml(chapter), timestamp)
    validate(output, len(chapters), title)


def validate(epub: Path, expected_chapters: int | None = None, expected_title: str | None = None) -> None:
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
        expected_names = [f"EPUB/text/chapter-{i:02}.xhtml" for i in range(1, len(chapters) + 1)]
        if chapters != expected_names:
            raise ValueError("Chapter files must be sequential and ordered")
        if expected_chapters is not None and len(chapters) != expected_chapters:
            raise ValueError(f"Expected {expected_chapters} chapters, found {len(chapters)}")
        package = ElementTree.fromstring(archive.read("EPUB/package.opf"))
        title = package.find(".//{http://purl.org/dc/elements/1.1/}title")
        actual_title = None if title is None else title.text
        if expected_title is not None and actual_title != expected_title:
            raise ValueError(f"Expected title {expected_title!r}, found {actual_title!r}")
        spine_items = package.findall(".//{http://www.idpf.org/2007/opf}spine/{http://www.idpf.org/2007/opf}itemref")
        if len(spine_items) != len(chapters) + 1:
            raise ValueError("Spine must contain the title page and every chapter")
        nav = ElementTree.fromstring(archive.read("EPUB/nav.xhtml"))
        nav_items = nav.findall(".//{http://www.w3.org/1999/xhtml}li")
        if len(nav_items) != len(chapters):
            raise ValueError("Navigation must contain every chapter")
        ncx = ElementTree.fromstring(archive.read("EPUB/toc.ncx"))
        ncx_items = ncx.findall(".//{http://www.daisy.org/z3986/2005/ncx/}navPoint")
        if len(ncx_items) != len(chapters):
            raise ValueError("NCX must contain every chapter")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--identifier-url", required=True)
    parser.add_argument("--expected-chapters", type=int)
    parser.add_argument("--expected-title")
    parser.add_argument("--check", action="store_true", help="Validate the existing output without rebuilding")
    args = parser.parse_args()
    if args.check:
        validate(args.output, args.expected_chapters, args.expected_title)
    else:
        build(args.source, args.output, args.identifier_url, args.expected_chapters, args.expected_title)
    print(args.output)


if __name__ == "__main__":
    main()
