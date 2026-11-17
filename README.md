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
120 guides live in `GUIDES` in `script.js`. Each quiz option lists guide IDs; check them after adding or renaming a guide.

## Notes
Hexadora never scans a device or collects data. Favorites, progress and theme are stored only in the visitor's own browser.

## Animations
Page changes, cards, buttons, the logo and scroll reveals use CSS animations. Devices set to "reduce motion" get no animation. Back and forward buttons restore your scroll position.

## Step-by-step guides
Every guide shows one instruction at a time. The student confirms they did it, then answers whether the problem is fixed. Confirmed steps are counted only as "confirmed", never as proof. "I cannot do this step" offers skip or help. Progress is saved in the visitor's browser. The full list is hidden on screen and appears only when printing.


## Adding more guides later
Add a `G("id","Title Case Title","Category",...)` entry to `GUIDES` in `script.js`. Use a new unique id. Categories, counts, search, sorting and "Show more" paging update automatically; a new category name only needs an optional entry in `CAT_ORDER`, `CAT_INFO` and `ICON`. Then add the id to a quiz option so it can be recommended.



## Security and privacy notes

- HEXADORA is a static GitHub Pages website. It does not provide server-side accounts, authentication, or a private database.
- The website does not need student accounts and should not ask for passwords, API keys, or sensitive personal information.
- Favorites, theme preference, and troubleshooting progress are stored in the visitor's browser using local storage. Visitors can clear this data through browser settings. Stored values are validated before the application uses them. Local progress is not proof that a troubleshooting action was performed.
- Guide text and other dynamic text are escaped before being inserted into HTML templates. Keep future user-provided content out of HTML templates unless it is safely escaped or rendered with `textContent`.
- A Content Security Policy (CSP) is delivered as an HTML meta policy. It restricts scripts and other resource loading, but it is not equivalent to an HTTP response header.
- GitHub Pages does not let this project configure arbitrary HTTP response headers through static HTML. Headers such as `Strict-Transport-Security`, `X-Content-Type-Options`, `X-Frame-Options` / `frame-ancestors`, and a full `Permissions-Policy` cannot be reliably enabled through this site's HTML alone. Do not claim these headers are active unless a hosting provider or proxy sends them and they are verified.
- Do not commit API keys, passwords, or private credentials to the public repository. Review third-party scripts and dependencies before adding them.

No website can be guaranteed completely secure. Review future changes and dependencies periodically.
