# Chat Organizer

Landing page and docs for **[Chat Organizer](https://chat-organizer.com)**, a free
Chrome extension that automatically sorts your **Claude.ai** and **ChatGPT** chats
into projects in one click.

**[chat-organizer.com](https://chat-organizer.com)** · **[Add to Chrome](https://chromewebstore.google.com/detail/bipbaacophbcpboieghjoigjlbemchcm)**

## What it does

Hundreds of unsorted chats and no way to find anything? Chat Organizer scans up to
your 200 most recent chats on Claude.ai or ChatGPT, works out what each unorganized chat is about
using a multilingual keyword wordlist plus AI for ambiguous titles, and shows you a
full preview before anything moves. One click applies the plan, sorting approved matches
into the right project and cleaning up empty projects automatically.

- No API key, no account, no setup
- Works on both **claude.ai** and **chatgpt.com**, pick the platform in the popup
- Nothing is ever deleted, chats are only moved
- Chat content never leaves your browser; only short titles are sent for AI
  categorization when needed
- Zero tracking, zero telemetry shipped in the extension itself

## Guides

- [How to organize Claude.ai chats](https://chat-organizer.com/how-to-organize-claude-chats.html)
- [How to organize ChatGPT chats](https://chat-organizer.com/how-to-organize-chatgpt-chats.html)
- [How to find old ChatGPT conversations](https://chat-organizer.com/how-to-find-old-chatgpt-conversations.html)
- [Privacy policy](https://chat-organizer.com/privacy.html)
- [Changelog](https://chat-organizer.com/changelog.html)

## Measurement: events and UTM links

GA4 measurement ID `G-EZG37BF12B`. `consent.js` loads Google Analytics and Microsoft
Clarity only after a visitor clicks Accept (Consent Mode v2, choice in localStorage
`co-consent`). The three guide pages do not include `consent.js` yet, so they measure nothing.

### Events the site sends

| Event | Key event | Parameters | When |
|---|---|---|---|
| `add_to_chrome` | yes | `button_location`: `nav`, `hero`, `mid_band`, `bottom_cta` or `footer` | a click on any Chrome Web Store link |
| `language_select` | no | `selected_language` | a choice in the language menu |

GA4 adds `page_view`, `session_start`, `first_visit`, `user_engagement`, `scroll`,
`click` (outbound links) and the rest of enhanced measurement on its own. `purchase`
exists as a key event in every GA4 property and cannot be deleted; nothing is sold here,
so it never counts. Installs, uninstalls and active users live only in the Chrome Web
Store dashboard: GA4 never sees the install itself.

Rules for a new event:

- Lowercase snake_case, `object_action`, at most 40 characters. Never rename an existing
  event: the history and the key event break.
- A new `button_location` value goes into `locationMap` in `consent.js`, never a new event.
- Register a new parameter as a custom dimension before it goes live. GA4 does not report
  parameters backwards.
- Never a chat title, project name or anything else from the extension in an event.

### UTM links

Every link you place yourself that points to this site from outside (a post, a video,
a directory listing, an ad, a mail) gets these three, always lowercase, words joined
with a hyphen:

| Parameter | Allowed values | Example |
|---|---|---|
| `utm_source` | the platform or place: `reddit`, `x`, `linkedin`, `youtube`, `producthunt`, `github`, `hackernews`, `newsletter`, or the directory's domain name | `reddit` |
| `utm_medium` | only: `social` (ordinary post), `paid_social` (paid post), `cpc` (paid search), `email`, `referral` (a directory, article or partner site), `video` (a link under a video) | `social` |
| `utm_campaign` | `yyyy-mm-subject` | `2026-10-chatgpt-launch` |
| `utm_content` | optional, to tell two links in one post apart | `top-comment` |

Example: `https://chat-organizer.com/?utm_source=reddit&utm_medium=social&utm_campaign=2026-10-chatgpt-launch`

- Only these `utm_medium` values: GA4 sorts channels on that word, and a home-made one
  lands in "Unassigned" and spoils the channel report.
- Never put UTM on links inside the site: they start a new session and overwrite where
  the visitor really came from.

## About this repo

This repo holds the static marketing site (GitHub Pages, custom domain
`chat-organizer.com`). The extension itself is a separate, private repository.

Not affiliated with Anthropic or OpenAI. Claude is a trademark of Anthropic, PBC;
ChatGPT is a trademark of OpenAI.
