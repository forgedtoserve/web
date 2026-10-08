document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());

// Highlight the current page in the primary navigation.
(() => {
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a[href], .nav-donate[href]').forEach(link => {
    const href = (link.getAttribute('href') || '').split('#')[0].toLowerCase();
    if (href === current) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();


// v23 Garth Brooks raffle popup
(() => {
  const modal = document.getElementById('garth-raffle-modal');
  if (!modal) return;

  // Stop promoting the raffle after entries close / winner is drawn.
  const raffleCloses = new Date('2026-10-21T18:00:00-05:00').getTime();
  if (Date.now() >= raffleCloses) return;

  const storageKey = 'fts-garth-raffle-v23-dismissed-until';
  const dismissedUntil = Number(localStorage.getItem(storageKey) || 0);
  if (Date.now() < dismissedUntil) return;

  const closeButtons = modal.querySelectorAll('[data-raffle-close]');
  const enterLink = modal.querySelector('[data-raffle-enter]');
  const closeButton = modal.querySelector('.raffle-modal__close');
  let lastFocused = null;

  const close = (hours = 24) => {
    localStorage.setItem(storageKey, String(Date.now() + hours * 60 * 60 * 1000));
    modal.hidden = true;
    document.body.classList.remove('raffle-modal-open');
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  };

  const open = () => {
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.classList.add('raffle-modal-open');
    requestAnimationFrame(() => closeButton?.focus());
  };

  closeButtons.forEach(button => button.addEventListener('click', () => close(24)));
  enterLink?.addEventListener('click', () => {
    // Avoid showing the same promotion repeatedly right after someone enters.
    localStorage.setItem(storageKey, String(Date.now() + 72 * 60 * 60 * 1000));
  });

  document.addEventListener('keydown', event => {
    if (!modal.hidden && event.key === 'Escape') close(24);
  });

  window.setTimeout(open, 900);
})();

// v37 accessible mobile navigation.
(() => {
  document.querySelectorAll('.site-header').forEach(header => {
    const toggle = header.querySelector('.nav-toggle');
    const nav = header.querySelector('.nav-links');
    const donate = header.querySelector('.nav-donate');
    if (!toggle || !nav) return;

    header.classList.add('nav-enhanced');

    const setOpen = open => {
      header.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      const label = toggle.querySelector('.nav-toggle-label');
      if (label) label.textContent = open ? 'Close' : 'Menu';
    };

    toggle.addEventListener('click', () => setOpen(!header.classList.contains('nav-open')));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
    donate?.addEventListener('click', () => setOpen(false));

    const desktop = window.matchMedia('(min-width: 901px)');
    const resetForDesktop = event => { if (event.matches) setOpen(false); };
    if (desktop.addEventListener) desktop.addEventListener('change', resetForDesktop);
    else if (desktop.addListener) desktop.addListener(resetForDesktop);
  });
})();
