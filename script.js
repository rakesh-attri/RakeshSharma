(() => {
  'use strict';
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const toggle = document.getElementById('motion-toggle');
  let paused = reduced.matches;
  try { const saved = localStorage.getItem('rs-motion-paused'); if (saved !== null) paused = saved === 'true' || reduced.matches; } catch (_) {}
  function applyMotion() {
    root.classList.toggle('motion-paused', paused);
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.title = paused ? 'Resume decorative animations' : 'Pause decorative animations';
    toggle.querySelector('.sr-only').textContent = toggle.title;
    toggle.querySelector('[aria-hidden]').textContent = paused ? '▷' : 'Ⅱ';
  }
  applyMotion();
  toggle.addEventListener('click', () => { paused = !paused; applyMotion(); try { localStorage.setItem('rs-motion-paused', String(paused)); } catch (_) {} });
  reduced.addEventListener('change', e => { paused = e.matches; applyMotion(); });
  if ('IntersectionObserver' in window && !reduced.matches) {
    root.classList.add('js-motion');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.07 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('copy-link').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    if (!/^https?:$/.test(location.protocol)) { status.textContent = 'Publish your portfolio to share its web address.'; return; }
    const url = location.href.split('#')[0];
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(url);
      status.textContent = 'Portfolio link copied. Ready to share!';
    } catch (_) { status.textContent = 'Copy this link: ' + url; }
  });
  const counterImg = document.getElementById('visit-counter-img');
  if (counterImg) {
    const visitKey = 'rs_portfolio_unique_visitor';
    let hasVisited = false;
    try { hasVisited = !!localStorage.getItem(visitKey); } catch (_) {}
    if (!hasVisited) {
      counterImg.src = 'https://visitor-badge.laobi.icu/badge?page_id=rakesh-attri.RakeshSharma&left_text=Unique%20Visitors&left_color=%23242421&right_color=%23f15b35';
      try { localStorage.setItem(visitKey, '1'); } catch (_) {}
    }
  }
})();

// Static, illustrative framework walkthrough. This does not run browser tests or call an AI service.
(() => {
  'use strict';
  const deck = document.querySelector('.framework-deck');
  if (!deck) return;
  const tabs = [...deck.querySelectorAll('[role="tab"]')];
  const panels = [...deck.querySelectorAll('[role="tabpanel"]')];
  const dots = [...deck.querySelectorAll('.deck-dots i')];
  const status = document.getElementById('deck-status');
  const run = document.getElementById('run-demo');
  const names = ['Plan', 'Execute', 'Review', 'Report'];
  let current = 0;
  let timer = null;
  let playing = false;
  function select(index, focusTab = false) {
    current = (index + panels.length) % panels.length;
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === current));
      tab.tabIndex = i === current ? 0 : -1;
      panels[i].hidden = i !== current;
      dots[i].classList.toggle('active', i === current);
    });
    document.getElementById('slide-count').textContent = String(current + 1).padStart(2, '0') + ' / 04';
    status.textContent = `Slide ${current + 1} of 4: ${names[current]}. Illustrative demo.`;
    if (focusTab) tabs[current].focus();
  }
  function stop(completed = false) {
    if (timer !== null) clearTimeout(timer);
    timer = null;
    playing = false;
    run.setAttribute('aria-pressed', 'false');
    run.innerHTML = '<span aria-hidden="true">▷</span> ' + (completed ? 'Replay sample walkthrough' : 'Play sample walkthrough');
    if (completed) status.textContent = 'Sample walkthrough complete. These are illustrative slides, not a real test run.';
  }
  function schedule() {
    timer = setTimeout(() => {
      if (current < panels.length - 1) { select(current + 1); schedule(); }
      else stop(true);
    }, 4500);
  }
  tabs.forEach((tab, index) => tab.addEventListener('click', () => { stop(); select(index); }));
  document.getElementById('slide-prev').addEventListener('click', () => { stop(); select(current - 1); });
  document.getElementById('slide-next').addEventListener('click', () => { stop(); select(current + 1); });
  deck.addEventListener('keydown', event => {
    if (!(event.target.matches('[role="tab"]') || event.target === deck)) return;
    let target;
    if (event.key === 'ArrowRight') target = current + 1;
    else if (event.key === 'ArrowLeft') target = current - 1;
    else if (event.key === 'Home') target = 0;
    else if (event.key === 'End') target = panels.length - 1;
    else return;
    event.preventDefault(); stop(); select(target, true);
  });
  run.setAttribute('aria-pressed', 'false');
  run.addEventListener('click', () => {
    if (playing) { stop(); return; }
    select(0); playing = true;
    run.setAttribute('aria-pressed', 'true');
    run.innerHTML = '<span aria-hidden="true">Ⅱ</span> Pause walkthrough';
    schedule();
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden && playing) stop(); });
  document.getElementById('motion-toggle').addEventListener('click', () => {
    if (document.documentElement.classList.contains('motion-paused') && playing) stop();
  });
})();
