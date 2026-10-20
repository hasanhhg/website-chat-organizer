"""Run consent and article-goal checks without sending analytics or opening Store tabs."""

import mimetypes
from pathlib import Path
from urllib.parse import urlparse, unquote
from xml.etree import ElementTree

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
MID = "G-EZG37BF12B"


def commands(page, command):
    return page.evaluate("name => (window.dataLayer || []).map(x => Array.from(x)).filter(x => x[0] === name)", command)


def main():
    sitemap = ElementTree.parse(ROOT / "sitemap.xml")
    urls = [node.text for node in sitemap.findall(".//{*}url/{*}loc")]
    assert len(urls) == 19
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        context = browser.new_context()
        tag_requests = []

        def route(request_route):
            request = request_route.request
            url = urlparse(request.url)
            if url.hostname not in {"chat-organizer.com", "localhost"}:
                if "googletagmanager.com/gtag/js" in request.url:
                    tag_requests.append(request.url)
                return request_route.fulfill(status=200, content_type="application/javascript", body="")
            path = (ROOT / unquote(url.path.lstrip("/"))).resolve()
            if path.is_dir():
                path = path / "index.html"
            if not path.is_relative_to(ROOT) or not path.is_file():
                return request_route.fulfill(status=404, body="Not found")
            request_route.fulfill(path=str(path), content_type=mimetypes.guess_type(path)[0] or "text/plain")

        context.route("**/*", route)
        for url in urls:
            page = context.new_page()
            page.goto(url)
            assert page.locator("#co-consent").is_visible(), url
            assert page.locator("#co-consent .co-consent-link").get_attribute("href") == "/privacy.html", url
            assert commands(page, "config") == [], url
            page.close()
        assert tag_requests == []

        for url in urls:
            if "/how-to-" not in url:
                continue
            context.clear_cookies()
            page = context.new_page()
            page.goto(url)
            page.evaluate("localStorage.clear()")
            page.reload()
            page.locator(".co-consent-accept").click()
            assert [r[1] for r in commands(page, "config")] == [MID], url
            page.evaluate("document.addEventListener('click', e => { if (e.target.closest('a[href*=chromewebstore]')) e.preventDefault(); }, true)")
            page.locator('main a[href*="chromewebstore.google.com"]').first.click()
            goals = [r for r in commands(page, "event") if r[1] == "add_to_chrome"]
            assert len(goals) == 1 and goals[0][2]["button_location"] == "article", (url, goals)
            page.evaluate("document.cookie='_ga=consent-test;path=/;Secure'; document.cookie='_clck=consent-test;path=/;Secure'")
            page.locator("[data-cookie-settings]").click()
            with page.expect_navigation():
                page.locator(".co-consent-decline").click()
            assert commands(page, "config") == []
            assert not any(c["name"].startswith(("_ga", "_cl")) for c in context.cookies())
            page.evaluate("localStorage.clear()")
            page.close()

        page = context.new_page()
        page.goto("https://localhost/how-to-organize-chatgpt-chats.html")
        page.locator(".co-consent-accept").click()
        assert commands(page, "config") == []
        page.close()

        blocked = browser.new_context()
        blocked.route("**/*", route)
        blocked.add_init_script("Object.defineProperty(window, 'localStorage', {get() {throw new Error('Storage blocked')}})")
        page = blocked.new_page()
        page.goto("https://chat-organizer.com/how-to-organize-chatgpt-chats.html")
        page.locator(".co-consent-accept").click()
        page.evaluate("document.addEventListener('click', e => e.preventDefault(), true)")
        page.locator('main a[href*="chromewebstore.google.com"]').first.click()
        assert len([r for r in commands(page, "event") if r[1] == "add_to_chrome"]) == 1
        browser.close()
    print("PASS: 19 pages, 13 translated privacy links, three article goals, refusal, withdrawal, blocked storage and preview protection; no analytics sent.")


if __name__ == "__main__":
    main()
