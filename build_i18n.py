#!/usr/bin/env python3
"""Generate static localized homepages from index.html + translations.js.

Why this exists
---------------
The site used to ship one English index.html and switch language client-side
(?lang=xx + translations.js). That had three costs:

  1. AI crawlers (GPTBot, ClaudeBot, PerplexityBot) do not execute JavaScript,
     so all 15 hreflang URLs served them byte-identical English.
  2. hreflang pointed at ?lang= URLs whose raw-HTML canonical was the apex, so
     the localized variants leaned entirely on Google's deferred render pass.
  3. Non-English is ~75% of impressions, so that was the majority of the site.

This emits real static /{lang}/index.html files: translated in the raw HTML,
self-canonical, cross-linked, with schema regenerated from the translated DOM
so structured data never disagrees with visible content.

Usage:  python build_i18n.py        (run from the site root)
"""
import io, json, os, re, subprocess, sys
from bs4 import BeautifulSoup

ROOT = os.path.dirname(os.path.abspath(__file__))
ORIGIN = "https://chat-organizer.com"
RTL = {"ar"}

# Relative targets that must become ../ inside a /{lang}/ page.
REL_ATTRS = (("a", "href"), ("link", "href"), ("script", "src"), ("img", "src"))


def load_translations():
    """Evaluate translations.js in Node and return the T object as a dict."""
    js = r"""
      const fs=require('fs');
      const src=fs.readFileSync(process.argv[1],'utf8');
      const m=src.match(/var T = (\{[\s\S]*?\n  \});/);
      if(!m){console.error('translations.js: T object not found');process.exit(1);}
      let T; eval('T='+m[1]);
      process.stdout.write(JSON.stringify(T));
    """
    out = subprocess.run(["node", "-e", js, os.path.join(ROOT, "translations.js")],
                         capture_output=True, check=True)
    return json.loads(out.stdout.decode("utf-8"))


def resolve(d, dotted):
    cur = d
    for part in dotted.split("."):
        if not isinstance(cur, dict) or part not in cur:
            return None
        cur = cur[part]
    return cur


def hreflang_tags(soup, langs, self_lang):
    """Replace the hreflang block with links to the real static URLs."""
    for tag in soup.find_all("link", rel="alternate"):
        if tag.get("hreflang"):
            tag.decompose()
    canon = soup.find("link", rel="canonical")
    anchor = canon or soup.find("title")
    for lg in langs:
        tag = soup.new_tag("link", rel="alternate")
        tag["hreflang"] = lg
        tag["href"] = f"{ORIGIN}/" if lg == "en" else f"{ORIGIN}/{lg}/"
        anchor.insert_after(tag)
    xd = soup.new_tag("link", rel="alternate")
    xd["hreflang"] = "x-default"
    xd["href"] = f"{ORIGIN}/"
    anchor.insert_after(xd)


def switcher_to_links(soup, langs):
    """Turn the language <button>s into real <a> links.

    This is the internal-linking win: every localized page then links to all 13
    others, so discovery no longer depends on the sitemap alone.
    """
    for btn in soup.select(".lang-option"):
        lg = btn.get("data-lang")
        if not lg or lg not in langs:
            continue
        a = soup.new_tag("a")
        a["class"] = btn.get("class", [])
        a["data-lang"] = lg
        a["role"] = "menuitem"
        a["href"] = "/" if lg == "en" else f"/{lg}/"
        for child in list(btn.contents):
            a.append(child.extract())
        btn.replace_with(a)


def rebuild_faq_schema(soup):
    """Regenerate FAQPage JSON-LD from the translated DOM."""
    entries = []
    for det in soup.select(".faq details"):
        summ, ans = det.find("summary"), det.select_one(".faq-a, .a")
        if not summ or not ans:
            continue
        entries.append({
            "@type": "Question",
            "name": summ.get_text(" ", strip=True),
            "acceptedAnswer": {"@type": "Answer",
                               "text": ans.get_text(" ", strip=True)},
        })
    return {"@context": "https://schema.org", "@type": "FAQPage",
            "mainEntity": entries} if entries else None


def rebuild_howto_schema(soup, t):
    """Regenerate HowTo JSON-LD from translated step copy."""
    steps = []
    for i in (1, 2, 3):
        title = resolve(t, f"step{i}.title")
        desc = resolve(t, f"step{i}.desc")
        if title and desc:
            steps.append({"@type": "HowToStep", "name": title,
                          "text": BeautifulSoup(desc, "html.parser").get_text(" ", strip=True)})
    if len(steps) != 3:
        return None
    return {
        "@context": "https://schema.org", "@type": "HowTo",
        "name": resolve(t, "hiw.title") or "How to organize your chats",
        "description": resolve(t, "hiw.sub") or "",
        "totalTime": "PT10S",
        "tool": {"@type": "HowToTool", "name": "Chat Organizer (free Chrome extension)"},
        "step": steps,
    }


def build_lang(base_html, lang, t, langs):
    soup = BeautifulSoup(base_html, "html.parser")

    # --- <html> attributes -------------------------------------------------
    html = soup.find("html")
    html["lang"] = lang
    html["dir"] = "rtl" if lang in RTL else "ltr"
    # Marker so translations.js knows the page is already translated and must
    # not re-run applyLang() with a stale localStorage language.
    html["data-static-lang"] = lang

    # --- text nodes --------------------------------------------------------
    for el in soup.select("[data-i18n]"):
        val = resolve(t, el["data-i18n"])
        if val is not None:
            el.string = val                      # mirrors el.textContent = val
    for el in soup.select("[data-i18n-html]"):
        val = resolve(t, el["data-i18n-html"])
        if val is not None:
            el.clear()
            el.append(BeautifulSoup(val, "html.parser"))

    # Hero brand colouring, same as the runtime pass does.
    hero = soup.select_one('[data-i18n-html="hero.h1"]')
    if hero:
        inner = hero.decode_contents()
        # Identical order/patterns to applyLang() in translations.js, so the
        # static markup and any runtime pass can never diverge.
        inner = inner.replace("ChatGPT", '<span class="brand-chatgpt">ChatGPT</span>')
        inner = inner.replace("Claude", '<span class="brand-claude">Claude</span>')
        hero.clear()
        hero.append(BeautifulSoup(inner, "html.parser"))

    # --- head --------------------------------------------------------------
    meta = t.get("meta", {})
    if meta.get("title"):
        soup.find("title").string = meta["title"]
    md = soup.find("meta", attrs={"name": "description"})
    if md is not None and meta.get("description"):
        md["content"] = meta["description"]

    canon = soup.find("link", rel="canonical")
    if canon:
        canon["href"] = f"{ORIGIN}/{lang}/"

    for prop, val in (("og:url", f"{ORIGIN}/{lang}/"),
                      ("og:title", meta.get("title")),
                      ("og:description", meta.get("description")),
                      ("og:locale", lang)):
        if not val:
            continue
        tag = soup.find("meta", property=prop)
        if tag is None:
            tag = soup.new_tag("meta"); tag["property"] = prop
            soup.find("head").append(tag)
        tag["content"] = val
    for name, val in (("twitter:title", meta.get("title")),
                      ("twitter:description", meta.get("description"))):
        tag = soup.find("meta", attrs={"name": name})
        if tag is not None and val:
            tag["content"] = val

    hreflang_tags(soup, langs, lang)
    switcher_to_links(soup, langs)

    # --- structured data ---------------------------------------------------
    blocks = soup.find_all("script", type="application/ld+json")
    if blocks:
        try:                                     # entity graph: tag its language
            graph = json.loads(blocks[0].string)
            for node in graph.get("@graph", []):
                node["inLanguage"] = lang
            blocks[0].string = json.dumps(graph, ensure_ascii=False, indent=2)
        except Exception:
            pass
    if len(blocks) > 1:
        faq = rebuild_faq_schema(soup)
        if faq:
            blocks[1].string = json.dumps(faq, ensure_ascii=False, indent=2)
        else:
            blocks[1].decompose()
    if len(blocks) > 2:
        how = rebuild_howto_schema(soup, t)
        if how:
            blocks[2].string = json.dumps(how, ensure_ascii=False, indent=2)
        else:
            blocks[2].decompose()

    # --- relative paths now live one directory deeper -----------------------
    for tag_name, attr in REL_ATTRS:
        for tag in soup.find_all(tag_name):
            v = tag.get(attr)
            if not v or v.startswith(("http://", "https://", "//", "/", "#",
                                      "mailto:", "tel:", "data:")):
                continue
            tag[attr] = "../" + v

    return soup.decode()


def patch_root(base_html, langs):
    """Root stays English; it just needs real hreflang + linked switcher."""
    soup = BeautifulSoup(base_html, "html.parser")
    hreflang_tags(soup, langs, "en")
    switcher_to_links(soup, langs)
    return soup.decode()


def write_sitemap(langs):
    """Regenerate sitemap.xml so it always matches what was just built."""
    today = __import__("datetime").date.today().isoformat()
    entries = [(f"{ORIGIN}/", "1.0", "monthly")]
    entries += [(f"{ORIGIN}/{lg}/", "0.9", "monthly") for lg in langs if lg != "en"]
    entries += [(f"{ORIGIN}/{p}", "0.8", "monthly") for p in (
        "how-to-organize-claude-chats.html",
        "how-to-organize-chatgpt-chats.html",
        "how-to-find-old-chatgpt-conversations.html")]
    entries += [(f"{ORIGIN}/privacy.html", "0.5", "yearly"),
                (f"{ORIGIN}/changelog.html", "0.4", "monthly")]

    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for loc, prio, freq in entries:
        lines += ["  <url>", f"    <loc>{loc}</loc>",
                  f"    <lastmod>{today}</lastmod>",
                  f"    <changefreq>{freq}</changefreq>",
                  f"    <priority>{prio}</priority>", "  </url>"]
    lines.append("</urlset>")
    with io.open(os.path.join(ROOT, "sitemap.xml"), "w",
                 encoding="utf-8", newline="\n") as fh:
        fh.write("\n".join(lines) + "\n")
    return len(entries)


def main():
    T = load_translations()
    langs = list(T.keys())                       # en first, per translations.js
    with io.open(os.path.join(ROOT, "index.html"), encoding="utf-8") as fh:
        base = fh.read()

    written = []
    for lang in langs:
        if lang == "en":
            continue
        out_dir = os.path.join(ROOT, lang)
        os.makedirs(out_dir, exist_ok=True)
        html = build_lang(base, lang, T[lang], langs)
        with io.open(os.path.join(out_dir, "index.html"), "w",
                     encoding="utf-8", newline="\n") as fh:
            fh.write(html)
        written.append(lang)

    with io.open(os.path.join(ROOT, "index.html"), "w",
                 encoding="utf-8", newline="\n") as fh:
        fh.write(patch_root(base, langs))

    n = write_sitemap(langs)
    print(f"generated {len(written)} localized homepages: {', '.join(written)}")
    print("patched root index.html (hreflang + linked language switcher)")
    print(f"wrote sitemap.xml with {n} URLs")


if __name__ == "__main__":
    main()
