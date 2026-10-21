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
