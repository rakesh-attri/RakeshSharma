/**
 * Er Rakesh Sharma - Personal Portfolio Website
 * Lead Salesforce Automation Engineer & AI Systems Architect
 * Interactive Logic, SaralForce Simulator, ROI Calculator & Motion
 */

document.addEventListener('DOMContentLoaded', () => {
    initLiveTime();
    initSpotlight();
    initHeroTilt();
    initSaralForceSimulator();
    initRoiCalculator();
    initProjectFilters();
    initCopyButtons();
    initContactForm();
    initMobileNav();
    initScrollHeader();
});

/* -------------------------------------------------------------
   1. Live Indian Standard Time (IST) Clock
   ------------------------------------------------------------- */
function initLiveTime() {
    const timeDisplay = document.getElementById('istLiveTime');
    if (!timeDisplay) return;

    function updateTime() {
        const now = new Date();
        const options = {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        const istString = new Intl.DateTimeFormat('en-US', options).format(now);
        timeDisplay.textContent = `${istString} IST`;
    }

    updateTime();
    setInterval(updateTime, 1000);
}

/* -------------------------------------------------------------
   2. Interactive Mouse Spotlight on Cards (Dribbble/Linear style)
   ------------------------------------------------------------- */
function initSpotlight() {
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

/* -------------------------------------------------------------
   3. Subtle 3D Card Tilt for Portrait
   ------------------------------------------------------------- */
function initHeroTilt() {
    const portraitCard = document.getElementById('heroPortraitCard');
    if (!portraitCard) return;

    portraitCard.addEventListener('mousemove', (e) => {
        const rect = portraitCard.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const tiltX = (y / rect.height) * -12;
        const tiltY = (x / rect.width) * 12;

        portraitCard.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    portraitCard.addEventListener('mouseleave', () => {
        portraitCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
}

/* -------------------------------------------------------------
   4. SaralForce Interactive Live Playground / Simulator
   ------------------------------------------------------------- */
const SIMULATOR_PRESETS = {
    schema: {
        title: "AI Object Builder Simulation",
        prompt: "Create an enterprise CustomerOnboarding__c object with ARR, SLA Tier, GoLiveDate, and Risk Score formula.",
        badge: "Tooling API • Multi-LLM",
        output: `<span class="code-token-cm">// ⚡ SaralForce AI Engine: Analyzing natural language requirements...</span>
<span class="code-token-kw">POST</span> <span class="code-token-tag">/services/data/v61.0/tooling/sobjects/CustomObject</span>
<span class="code-token-cm">// Proposed Custom Object: CustomerOnboarding__c</span>
{
  <span class="code-token-fn">"FullName"</span>: <span class="code-token-str">"CustomerOnboarding__c"</span>,
  <span class="code-token-fn">"Label"</span>: <span class="code-token-str">"Customer Onboarding"</span>,
  <span class="code-token-fn">"PluralLabel"</span>: <span class="code-token-str">"Customer Onboardings"</span>,
  <span class="code-token-fn">"SharingModel"</span>: <span class="code-token-str">"ControlledByParent"</span>,
  <span class="code-token-fn">"Fields"</span>: [
    {
      <span class="code-token-fn">"FullName"</span>: <span class="code-token-str">"Account__c"</span>,
      <span class="code-token-fn">"Type"</span>: <span class="code-token-str">"MasterDetail"</span>,
      <span class="code-token-fn">"ReferenceTo"</span>: <span class="code-token-str">"Account"</span>
    },
    {
      <span class="code-token-fn">"FullName"</span>: <span class="code-token-str">"AnnualRecurringRevenue__c"</span>,
      <span class="code-token-fn">"Type"</span>: <span class="code-token-str">"Currency"</span>,
      <span class="code-token-fn">"Precision"</span>: <span class="code-token-num">18</span>,
      <span class="code-token-fn">"Scale"</span>: <span class="code-token-num">2</span>
    },
    {
      <span class="code-token-fn">"FullName"</span>: <span class="code-token-str">"SLATier__c"</span>,
      <span class="code-token-fn">"Type"</span>: <span class="code-token-str">"Picklist"</span>,
      <span class="code-token-fn">"Values"</span>: [<span class="code-token-str">"Mission Critical"</span>, <span class="code-token-str">"Enterprise Plus"</span>, <span class="code-token-str">"Standard"</span>]
    },
    {
      <span class="code-token-fn">"FullName"</span>: <span class="code-token-str">"RiskScoreFormula__c"</span>,
      <span class="code-token-fn">"Type"</span>: <span class="code-token-str">"Formula"</span>,
      <span class="code-token-fn">"Formula"</span>: <span class="code-token-str">"IF(AnnualRecurringRevenue__c > 100000 && ISPICKVAL(SLATier__c, 'Mission Critical'), 95, 40)"</span>
    }
  ]
}
<span class="code-token-cm">// Status: Schema verified. Ready to deploy via SaralForce 1-Click Tooling API.</span>`
    },
    soql: {
        title: "AI SOQL Diagnosis & Auto-Fix",
        prompt: "Diagnose and fix broken SOQL: Querying child contacts on Account with invalid syntax and non-selective filter.",
        badge: "AI Query Repair • Instant Fix",
        output: `<span class="code-token-cm">// ⚠️ Detected SOQL Syntax Error in User Org:</span>
<span class="text-rose-400">SELECT Id, Name, (SELECT Id FROM Contact) FROM Account WHERE CreatedDate = THIS_YEAR AND NonExistentField__c = TRUE</span>

<span class="code-token-cm">// 🤖 SaralForce AI Diagnostic:</span>
<span class="text-amber-400">1. Relationship name error: Child relationship is 'Contacts', not 'Contact'.</span>
<span class="text-amber-400">2. 'NonExistentField__c' does not exist on SObject 'Account'. Suggested: 'IsActive__c' or omit.</span>
<span class="text-amber-400">3. Optimized with indexed filter for high-volume org execution.</span>

<span class="code-token-cm">// ✨ SaralForce Auto-Repaired Query (One-Click Applied):</span>
<span class="code-token-kw">SELECT</span> Id, Name, Type, AnnualRevenue,
       (<span class="code-token-kw">SELECT</span> Id, FirstName, LastName, Email, Title <span class="code-token-kw">FROM</span> Contacts)
<span class="code-token-kw">FROM</span> Account 
<span class="code-token-kw">WHERE</span> CreatedDate = THIS_YEAR 
<span class="code-token-kw">ORDER BY</span> AnnualRevenue <span class="code-token-kw">DESC NULLS LAST</span>
<span class="code-token-kw">LIMIT</span> <span class="code-token-num">500</span>

<span class="code-token-cm">// Benchmark: Query Plan Cost 0.32 (Selective Index Hit) • 42ms response</span>`
    },
    logs: {
        title: "AI Debug-Log Root Cause & Verdict",
        prompt: "Analyze Salesforce Apex log with System.LimitException: Too many SOQL queries: 101 inside trigger loop.",
        badge: "Log Verdict • Patch Proposer",
        output: `<span class="code-token-cm">// 🚨 Runtime Log Extracted (Apex Trigger / Batch Context):</span>
<span class="text-rose-400">FATAL_ERROR|System.LimitException: Too many SOQL queries: 101</span>
<span class="text-slate-400">Class.AccountAutomationTriggerHandler.syncRelatedOpportunities: line 44, column 1</span>

<span class="code-token-cm">// 🤖 SaralForce AI Log Verdict:</span>
<span class="text-emerald-400">Verdict: CRITICAL_DEFECT (SOQL Inside For-Loop Anti-Pattern)</span>
<span class="text-slate-300">Explanation: In line 44, a SOQL query is executed inside 'for (Account acc : trigger.new)'. When a bulk DML of > 100 records arrives, the governor limit of 100 SOQL queries is exhausted.</span>

<span class="code-token-cm">// 🛠️ Instant Apex Patch Suggested by AI:</span>
<span class="code-token-kw">public static void</span> <span class="code-token-fn">syncRelatedOpportunities</span>(<span class="code-token-tag">List</span>&lt;Account&gt; newAccounts) {
    <span class="code-token-tag">Set</span>&lt;Id&gt; accountIds = <span class="code-token-kw">new</span> <span class="code-token-tag">Set</span>&lt;Id&gt;();
    <span class="code-token-kw">for</span> (Account acc : newAccounts) {
        accountIds.add(acc.Id);
    }
    <span class="code-token-cm">// Bulkified SOQL outside of loop: Consumes only 1 SOQL query</span>
    <span class="code-token-tag">Map</span>&lt;Id, <span class="code-token-tag">List</span>&lt;Opportunity&gt;&gt; oppsByAccId = <span class="code-token-kw">new</span> <span class="code-token-tag">Map</span>&lt;Id, <span class="code-token-tag">List</span>&lt;Opportunity&gt;&gt;();
    <span class="code-token-kw">for</span> (Opportunity opp : [<span class="code-token-kw">SELECT</span> Id, AccountId, StageName <span class="code-token-kw">FROM</span> Opportunity <span class="code-token-kw">WHERE</span> AccountId <span class="code-token-kw">IN</span> :accountIds]) {
        <span class="code-token-cm">// Async collection grouping...</span>
    }
}`
    }
};

function initSaralForceSimulator() {
    const terminalOutput = document.getElementById('terminalOutputContent');
    const promptDisplay = document.getElementById('simulatorPromptText');
    const badgeDisplay = document.getElementById('simulatorBadge');
    const tabButtons = document.querySelectorAll('.simulator-tab-btn');
    const executeBtn = document.getElementById('simulateRunBtn');

    if (!terminalOutput) return;

    let currentPreset = 'schema';

    function loadPreset(key) {
        currentPreset = key;
        const data = SIMULATOR_PRESETS[key];
        if (!data) return;

        tabButtons.forEach(btn => {
            if (btn.dataset.preset === key) {
                btn.classList.add('bg-sky-500/20', 'text-sky-300', 'border-sky-500/40');
                btn.classList.remove('text-slate-400');
            } else {
                btn.classList.remove('bg-sky-500/20', 'text-sky-300', 'border-sky-500/40');
                btn.classList.add('text-slate-400');
            }
        });

        if (promptDisplay) promptDisplay.textContent = data.prompt;
        if (badgeDisplay) badgeDisplay.textContent = data.badge;

        // Animate output loading
        terminalOutput.style.opacity = '0.3';
        setTimeout(() => {
            terminalOutput.innerHTML = data.output;
            terminalOutput.style.opacity = '1';
        }, 150);
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            loadPreset(btn.dataset.preset);
        });
    });

    if (executeBtn) {
        executeBtn.addEventListener('click', () => {
            triggerConfetti();
            showToast("SaralForce Simulation Deployed to Mock Org Successfully!");
        });
    }

    // Initialize with first preset
    loadPreset('schema');
}

/* -------------------------------------------------------------
   5. Salesforce Automation ROI & Engineering Savings Calculator
   ------------------------------------------------------------- */
function initRoiCalculator() {
    const devsInput = document.getElementById('roiDevsInput');
    const hoursInput = document.getElementById('roiHoursInput');
    const devsValue = document.getElementById('roiDevsVal');
    const hoursValue = document.getElementById('roiHoursVal');

    const monthlyHoursDisplay = document.getElementById('calcHoursSaved');
    const costSavedDisplay = document.getElementById('calcCostSaved');
    const velocityDisplay = document.getElementById('calcVelocityBoost');

    if (!devsInput || !hoursInput) return;

    function calculate() {
        const devs = parseInt(devsInput.value, 10);
        const hoursPerWeek = parseInt(hoursInput.value, 10);

        devsValue.textContent = devs;
        hoursValue.textContent = `${hoursPerWeek}h/wk`;

        // SaralForce saves ~65% of repetitive SOQL writing, log debugging & schema creation time
        const weeklyHoursSaved = devs * (hoursPerWeek * 0.65);
        const monthlyHoursSaved = Math.round(weeklyHoursSaved * 4.2);
        
        // Industry average $80/hr blended Salesforce developer/admin rate
        const estimatedCostSaved = Math.round(monthlyHoursSaved * 85);

        // Velocity gain percentage
        const velocityGain = Math.round(200 + (devs * 25));

        if (monthlyHoursDisplay) monthlyHoursDisplay.textContent = `${monthlyHoursSaved}+ hrs`;
        if (costSavedDisplay) costSavedDisplay.textContent = `$${estimatedCostSaved.toLocaleString()}`;
        if (velocityDisplay) velocityDisplay.textContent = `+${velocityGain}%`;
    }

    devsInput.addEventListener('input', calculate);
    hoursInput.addEventListener('input', calculate);
    calculate();
}

/* -------------------------------------------------------------
   6. Project Category Filter
   ------------------------------------------------------------- */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-sky-500/20', 'text-sky-300', 'border-sky-500/40');
                b.classList.add('text-slate-400');
            });
            btn.classList.add('active', 'bg-sky-500/20', 'text-sky-300', 'border-sky-500/40');
            btn.classList.remove('text-slate-400');

            projectCards.forEach(card => {
                const category = card.dataset.category;
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });
        });
    });
}

/* -------------------------------------------------------------
   7. Copy Email & Quick Action Toast
   ------------------------------------------------------------- */
function initCopyButtons() {
    const copyEmailBtns = document.querySelectorAll('.btn-copy-email');
    copyEmailBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const email = btn.dataset.email || 'er.rakeshsharma.sf@gmail.com';
            navigator.clipboard.writeText(email).then(() => {
                showToast(`Copied ${email} to clipboard!`);
                triggerConfetti();
            }).catch(() => {
                showToast(`Email: ${email}`);
            });
        });
    });
}

function showToast(message) {
    let toast = document.getElementById('toastNotification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastNotification';
        toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl bg-slate-900 border border-sky-500/50 shadow-2xl text-sky-200 text-sm flex items-center gap-3 backdrop-blur-md';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 text-base"></i> <span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
            colors: ['#00A1E0', '#8B5CF6', '#10B981', '#38BDF8']
        });
    }
}

/* -------------------------------------------------------------
   8. Contact Form Simulation & Mailto Launcher
   ------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById('portfolioContactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('senderName')?.value || 'Friend';
        const subject = document.getElementById('senderSubject')?.value || 'Salesforce Consulting Inquiry';
        const message = document.getElementById('senderMessage')?.value || '';

        // Form success state
        form.innerHTML = `
            <div class="p-8 text-center space-y-4 rounded-2xl bg-sky-950/20 border border-sky-500/30">
                <div class="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-2xl">
                    <i class="fa-solid fa-paper-plane"></i>
                </div>
                <h4 class="text-xl font-bold text-white">Thank You, ${name}!</h4>
                <p class="text-slate-300 text-sm max-w-md mx-auto">
                    Your inquiry has been staged. Click below if you wish to launch your email client directly with this message prefilled.
                </p>
                <div class="pt-2 flex flex-wrap gap-3 justify-center">
                    <a href="mailto:er.rakeshsharma.sf@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}" 
                       class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium text-sm shadow-lg shadow-sky-500/20 hover:scale-105 transition-all">
                       <i class="fa-regular fa-envelope mr-1.5"></i> Open in Mail Client
                    </a>
                    <button type="button" onclick="location.reload()" 
                       class="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-sm border border-white/10">
                       Send Another
                    </button>
                </div>
            </div>
        `;
        triggerConfetti();
        showToast("Message prepared! Er Rakesh Sharma will reply promptly.");
    });
}

/* -------------------------------------------------------------
   9. Mobile Navigation Drawer
   ------------------------------------------------------------- */
function initMobileNav() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenuDrawer');
    const closeBtn = document.getElementById('closeMobileMenu');
    const navLinks = document.querySelectorAll('.mobile-nav-link');

    if (!toggleBtn || !mobileMenu) return;

    function openMenu() {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenu.classList.add('opacity-100');
        }, 10);
    }

    function closeMenu() {
        mobileMenu.classList.remove('opacity-100');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }

    toggleBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
}

/* -------------------------------------------------------------
   10. Sticky Navbar Blur & Scroll Progress
   ------------------------------------------------------------- */
function initScrollHeader() {
    const header = document.getElementById('mainNavBar');
    const progressBar = document.getElementById('scrollProgressBar');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (header) {
            if (scrolled > 40) {
                header.classList.add('bg-slate-950/85', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
                header.classList.remove('bg-transparent', 'border-transparent');
            } else {
                header.classList.remove('bg-slate-950/85', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
                header.classList.add('bg-transparent', 'border-transparent');
            }
        }

        if (progressBar) {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / docHeight) * 100;
            progressBar.style.width = `${progress}%`;
        }
    });
}
