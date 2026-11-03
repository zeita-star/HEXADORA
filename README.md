# HEXADORA

Educational computer-troubleshooting site for Grade 12 TVL-ICT. Plain HTML, CSS and JavaScript. No backend, no build step.

## Files
- `index.html` structure · `styles.css` design · `script.js` logic and guide data · `README.md` this file

## Open locally
Double-click `index.html`. Or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Deploy on GitHub Pages
1. Create a GitHub account and a new **public** repository.
2. Upload all four files to the repository root (Add file → Upload files → Commit).
3. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. Wait 1–2 minutes and refresh the Pages screen. The public URL appears at the top (usually `https://YOUR-NAME.github.io/REPO-NAME/`).

## QR code
Copy the exact URL from the Pages screen. Paste it into a free QR generator (for example qr-code-generator.com or any browser/phone QR tool), download the image, and print it.

## Test on a phone
Turn Wi-Fi off so the phone uses mobile data, scan the QR code, and check the intro, menu, search, a guide, the quiz and dark mode.

## Edit and update
- Guides: edit the `GUIDES` list at the top of `script.js`. Quiz: edit `QUIZ` and `PROBLEMS`.
- Colors: `--color-primary` and `--color-secondary` in `styles.css`.
- After editing, upload the changed files again (or commit them). Pages updates in a minute or two. Hard-refresh if you see old content.

## Open the public link on a phone using mobile data
After Pages shows "Your site is live", copy the full `https://...github.io/REPO-NAME/` address. On the phone, turn Wi-Fi off, open the browser, paste the whole address into the address bar and go. Pasting it into Google Search also works for a link you already have. Appearing in Google results for general searches can take days or weeks and is not guaranteed.

## Subpath and sharing notes
All links are `#/...` hash links and all files use relative paths, so the site works inside a repository subpath such as `/REPO-NAME/`, and refreshing a guide page works. No `sitemap.xml` or `robots.txt` is included because they need your real public address. Add them after deployment if you want them.

## Guides
30 guides live in `GUIDES` in `script.js`. Each quiz option lists guide ids; check them after adding or renaming a guide.

## Notes
Hexadora never scans a device or collects data. Favorites, progress and theme are stored only in the visitor's own browser.

## HEXADORA Assistant (AI) setup
The assistant needs a small backend, because an API key can never go in a GitHub Pages site. The site works fully without it; until configured, the Assistant page says it is not set up.

- **Backend:** `worker/worker.js`, a Cloudflare Worker. The site sends the student's messages plus the 3 most relevant guides; the Worker adds safety rules and calls the Anthropic API.
- **Costs (check current prices before enabling):** Cloudflare Workers has a free plan with daily limits. The Anthropic API is pay-per-use and needs a key from console.anthropic.com with billing turned on. Set a monthly spend limit there. Nothing is purchased by these files.
- **Steps:**
  1. Create free Cloudflare and Anthropic accounts (you or your teacher).
  2. Edit `worker/wrangler.toml`: set `ALLOWED_ORIGIN` to your site origin, e.g. `https://YOUR-NAME.github.io` (no path).
  3. In the `worker` folder run `npx wrangler login`, then `npx wrangler secret put ANTHROPIC_API_KEY` and paste the key, then `npx wrangler deploy`.
  4. Copy the Worker URL printed at the end into `AI_ENDPOINT` at the top of the assistant section of `script.js`, then upload `script.js` again.
- **Security built in:** key stored only as a Worker secret; only your site origin is allowed; input length and size limits; about 20 questions per visitor per hour (best effort, so also add a Cloudflare rate-limiting rule); upstream errors are not shown to users; messages are not stored or logged by this code.
- **Privacy:** messages go to Cloudflare and the AI provider, and the Assistant page warns students not to type personal information. Check your school's rules first.
- **Never upload** `.dev.vars`, `.env`, or the `backup-before-v3` folder (originals before this upgrade).

## Animations
Page changes, cards, buttons, the logo and scroll reveals use CSS animations. Devices set to "reduce motion" get no animation. Back and forward buttons restore your scroll position.
