document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());

// Highlight the current page in the primary navigation.
(() => {
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a[href]').forEach(link => {
    const href = (link.getAttribute('href') || '').split('#')[0].toLowerCase();
    if (href === current) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
