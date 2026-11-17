# HEXADORA

Educational computer-troubleshooting website for Grade 12 TVL-ICT students. Plain HTML, CSS and JavaScript: no backend, no build step, no accounts, no tracking.

## Project structure
- `index.html` page structure
- `styles.css` design, themes, animations
- `script.js` the guide database (`GUIDES`), quiz data (`QUIZ`, `PROBLEMS`), routing and the step-by-step troubleshooter
- `README.md` this file

## Features
Search, category filter, sorting, "Show more" paging, favorites, print-friendly guides, diagnostic quiz, light and dark themes, FAQ, and a one-step-at-a-time troubleshooter. The student confirms each step and reports the result themselves; nothing is marked done or solved automatically. Favorites, progress and theme are saved only in the visitor's browser.

## Guides: 120 in total
| Category | Guides |
|---|---|
| Computer Hardware and Components | 12 |
| Monitor and Display Problems | 12 |
| Operating System and Startup | 12 |
| Computer Performance and Maintenance | 12 |
| Peripheral Devices | 12 |
| Networking and Internet Connectivity | 12 |
| Storage and File Management | 12 |
| Security and System Protection | 12 |
| Software and Application Errors | 12 |
| BIOS, Drivers, and System Configuration | 12 |

Guide ids are stable. Do not rename an id, because progress and favorites use it.

## Adding a guide
Add a `G("id","Title Case Title","Category","Beginner|Intermediate|Advanced","Problem description (past tense)","symptom|symptom|symptom","cause|cause|cause","tools","step|step|step|step","safety warning","expected result","when to stop and ask a teacher","keywords")` entry before the end of the `GUIDES` array in `script.js`. Use a new unique id. Counts, filters, search and paging update automatically. Then add the id to a quiz option in `QUIZ` so it can be recommended.

## Open locally
Double-click `index.html`, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Deploy on GitHub Pages
1. Upload `index.html`, `styles.css`, `script.js` and `README.md` to the root of a public repository (replace the old files).
2. Settings, Pages, Deploy from a branch, `main`, folder `/ (root)`, Save.
3. Wait a minute or two, then open `https://YOUR-NAME.github.io/REPO-NAME/` (here: https://zeita-star.github.io/HEXADORA/). Hard-refresh if you see old content.
4. On a phone, turn Wi-Fi off, paste the full address in the browser, and check the intro, menu, a guide, the quiz and dark mode. Appearing in Google results takes time and is not guaranteed.

## Notes
HEXADORA never scans a device. It is for education only: never open a power supply, and ask a teacher or technician when unsure.
