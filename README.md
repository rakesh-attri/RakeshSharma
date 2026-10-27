# Er Rakesh Sharma — Personal Portfolio Website

A sleek, editorial-style, and animation-rich personal portfolio website for **Er Rakesh Sharma**, Lead Salesforce Automation Engineer & Creator of **SaralForce**.

Designed with dark luxury tech aesthetics, micro-interactions, responsive Bento layout, interactive SaralForce simulator, ROI calculator, and zero external build dependencies. **100% ready for GitHub Pages**.

---

## 🌟 Highlights

- **Hero Showcase**: Authentic portrait with interactive 3D gyroscope/cursor tilt, glowing orbital border, and floating satellite badges.
- **SaralForce Live Simulator**: Interactive in-browser terminal allowing visitors to simulate the AI Object Builder, SOQL Query Diagnosis & Auto-Repair, and Apex Debug Log Verdicts.
- **Salesforce ROI & Velocity Calculator**: Dynamic sliders to calculate team hours saved, financial value generated, and release speed boost.
- **Bento Matrix of Architecture**: Salesforce Core, AI & LLM Systems (Agentforce, OpenAI, Claude, Gemini), Integrations & APIs, and Automated Testing (Playwright).
- **Featured Projects**: Direct links to SaralForce ([Chrome Web Store](https://chromewebstore.google.com/detail/saralforce/fgapgjgejookdgliokajnbfkabkifclg) & [Microsoft Edge Add-on](https://microsoftedge.microsoft.com/addons/detail/saralforce/nabomjoibaaoialocfpphgcmfldjmeik?hl=en-US) & [Docs](https://rakesh-attri.github.io/SaralForce/)), ER Bhajan Mandali, and Enterprise Async Apex engines.
- **Dribbble-Inspired Motion**: Custom mouse spotlight, animated ambient mesh gradients, magnetic buttons, and celebratory confetti.
- **Pure Static Architecture**: Zero Node/npm build steps required. Runs cleanly anywhere.

---

## 🚀 How to Run Locally

You can open the portfolio directly by opening `index.html` in any browser, or run a local HTTP server:

```powershell
# Using Python
python -m http.server 8000

# Using Node (npx)
npx serve .

# Or using PowerShell directly
Start-Process "index.html"
```

Open `http://localhost:8000` in your browser.

---

## 🌐 How to Deploy to GitHub Pages (Step-by-Step)

### Option 1: Standard GitHub Pages Deployment (Recommended)

1. **Create a new GitHub Repository**:
   - Go to [GitHub](https://github.com/new)
   - Name it `rakesh-sharma-portfolio` (or `<your-username>.github.io` for a user site)
   - Set visibility to **Public**

2. **Push the code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Er Rakesh Sharma portfolio"
   git branch -M main
   git remote add origin https://github.com/rakesh-attri/rakesh-sharma-portfolio.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub: `Settings` &rarr; `Pages`.
   - Under **Build and deployment**:
     - **Source**: `Deploy from a branch`
     - **Branch**: `main` / `/ (root)`
   - Click **Save**.
   - Your website will be live in ~60 seconds at:  
     `https://<your-username>.github.io/rakesh-sharma-portfolio/`

---

## 📁 Project Structure

```text
rakesh-sharma-portfolio/
├── index.html                   # Main single-page portfolio
├── README.md                    # Documentation & deployment guide
├── assets/
│   ├── css/
│   │   └── custom.css           # Dribbble-style animations, spotlight & glassmorphism
│   ├── js/
│   │   └── main.js              # Interactive simulator, ROI calculator, IST clock
│   └── images/
│       ├── rakesh-sharma.jpg    # Authentic photo of Er Rakesh Sharma (face preserved)
│       └── favicon.svg          # Salesforce cloud + AI spark favicon
```

---

## 🛠️ Tech Stack

- **HTML5 & CSS3**: Modern semantic layout with glassmorphic depth
- **Tailwind CSS (CDN)**: Fluid utility grid and responsive design
- **Font Awesome 6 Pro**: Iconography
- **Canvas Confetti**: Interactive celebrations
- **Google Fonts**: Plus Jakarta Sans, Inter, JetBrains Mono
- **Vanilla JavaScript**: Lightweight, zero dependencies, lightning-fast 100/100 Lighthouse performance.

---

## 👤 Er Rakesh Sharma
- **Role**: Lead Salesforce Automation Engineer & AI Systems Architect
- **Product**: [SaralForce on Chrome Web Store](https://chromewebstore.google.com/detail/saralforce/fgapgjgejookdgliokajnbfkabkifclg) & [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/saralforce/nabomjoibaaoialocfpphgcmfldjmeik?hl=en-US)
- **Documentation**: [SaralForce Docs](https://rakesh-attri.github.io/SaralForce/)
- **Collective**: [ER Bhajan Mandali](https://erbhajanmandali.is-a.bot/)
- **GitHub**: [github.com/rakesh-attri](https://github.com/rakesh-attri)
