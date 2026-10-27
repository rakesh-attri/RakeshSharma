# Er Rakesh Sharma — personal portfolio

A responsive, animated portfolio in plain HTML, CSS, and JavaScript. No Node.js, build command, paid services, or server is needed. The supplied portrait is included unchanged.

## What is included

- Oversized editorial typography, ivory / charcoal / orange palette, and portrait with orbital accents.
- Redesigned navy/cyan SaralForce feature card inspired by the supplied reference, with Edge Add-ons and product website links.
- Er Bhajan Mandali showcase with its website link.
- Agentic AI + Playwright framework showcase with four interactive sample slides: Plan, Execute, Review, Report. Includes keyboard navigation, previous/next controls, and an optional paced walkthrough.
- About, expandable expertise, email and GitHub links.
- Scroll reveals, animated ticker, decorative motion pause control, reduced-motion support, keyboard access, and copy-link feedback.
- Responsive phone, tablet, and desktop layouts.

Project graphics are custom illustrations, not screenshots of the actual products. The agentic framework slides are illustrative concept content requested for the portfolio; test cases, timing, results, locator suggestions, and attached-artifact labels are dummy data, not evidence of actual production capabilities or runs. The walkthrough only changes slides; it does not execute Playwright, call an AI service, or perform any external actions.

The old “(02 PROJECTS)” label and navigation count have been removed. Your original portrait remains unchanged.

## Run on Windows

1. Extract the ZIP.
2. Double-click `index.html` to view it in Edge or Chrome.
3. Internet access loads the optional Google Fonts. System-font fallbacks work offline.
4. The copy-link button becomes useful after hosting the website at an HTTP(S) URL.

## Publish with GitHub Pages

The ZIP already places `index.html` at the top level. Do not upload the ZIP itself or an extra enclosing folder.

### Option A: a separate portfolio project (recommended)

1. Sign into your GitHub account and create a new public repository called `portfolio`.
2. Choose **Add file → Upload files**.
3. Upload the extracted `index.html`, `styles.css`, `script.js`, and `assets` folder. Include `.nojekyll` if your file picker shows it. README is optional.
4. Commit the uploaded files to `main`.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, select **Deploy from a branch**.
7. Choose `main` and `/ (root)`, then click **Save**.
8. Wait for GitHub's deployment to finish. Use the published URL shown in Pages settings.
9. For the account in your supplied project URL, this would be `https://rakesh-attri.github.io/portfolio/` if you choose that repository name. This is an expected address, not a claim that the repository has already been created.

### Option B: your main personal site

Use a repository named `rakesh-attri.github.io` under that GitHub account. Follow the same branch publishing steps. The expected address is `https://rakesh-attri.github.io/`. If this repository already hosts a website, review or back it up before replacing its files. Your existing `SaralForce` repository does not need to change.

Official guide: https://docs.github.com/en/pages/quickstart

## Edit your content

- `index.html`: name, role, introduction, project copy, external links, contact email, and page metadata.
- `styles.css`: colors in `:root`, fonts, layouts, animations, and responsive breakpoints.
- `script.js`: motion preference, scroll reveals, footer year, and copy-link behavior.
- `assets/rakesh-sharma.jpg`: your original supplied photo. No AI edits, filters, or face changes were made.
- `assets/favicon.svg`: original initials favicon.

Contact details use the public email `therakeshattri@gmail.com` from the supplied Er Bhajan Mandali website and the GitHub profile associated with your supplied SaralForce URL. Review them before public launch if you prefer another address.

The site has no contact form backend: the email button opens the visitor's mail app. It does not claim a message has been sent. It has no analytics, account creation, or API keys. A single localStorage preference remembers the animation setting.

All asset paths are relative, so the same files work at the domain root or inside a GitHub Pages repository subpath. Google Fonts are the only externally loaded design resources and have system-font fallbacks.

## Latest updates

- Replaced the SaralForce initials mark with your supplied wolf mascot in the product card and hero spotlight.
- Added 11 years of IT experience and consulting experience including Wipro and Appirio, as supplied by you. No employment dates or company-specific job titles are assumed.
- Added a real, locally bundled Bhajan Mandali homepage screenshot captured on 23 October 2026. Clicking the preview opens the website.
- The assets folder now also includes `saralforce-mascot.png` and `bhajan-mandali-homepage.jpg`. Upload the entire assets folder with the HTML, CSS, and JavaScript files.
