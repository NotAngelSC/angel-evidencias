// @ts-check
(() => {
  'use strict';
  document.documentElement.classList.add('js-ready');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  const navLinks = Array.from(document.querySelectorAll('#primary-nav a'));
  const progress = document.querySelector('.reading-progress');

  function closeMenu() {
    nav?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('is-open', open);
  });
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
      closeMenu();
      if (menuButton instanceof HTMLElement) menuButton.focus();
    }
  });

  if ('IntersectionObserver' in window) {
    if (!reducedMotion) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.07 });
      document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
      document.documentElement.classList.add('motion-ready');
    }
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + entry.target.id) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
    document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));
  }

  let ticking = false;
  function updateProgress() {
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    if (progress instanceof HTMLElement) progress.style.width = `${distance > 0 ? Math.min(100, window.scrollY / distance * 100) : 0}%`;
    ticking = false;
  }
  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; window.requestAnimationFrame(updateProgress); }
  }, { passive: true });
  window.addEventListener('resize', updateProgress);
  document.querySelector('.evidence-archive')?.addEventListener('toggle', updateProgress);
  updateProgress();

  const dialog = document.querySelector('.lightbox');
  const image = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-title');
  const original = document.getElementById('lightbox-original');
  /** @type {HTMLAnchorElement|null} */
  let trigger = null;
  if (dialog instanceof HTMLDialogElement && typeof dialog.showModal === 'function' && image instanceof HTMLImageElement && caption && original instanceof HTMLAnchorElement) {
    document.querySelectorAll('a.evidence-link').forEach(link => {
      if (!(link instanceof HTMLAnchorElement)) return;
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        trigger = link;
        const label = link.dataset.caption || link.querySelector('img')?.alt || 'Evidencia de trayectoria';
        image.src = link.href;
        image.alt = label;
        caption.textContent = label;
        original.href = link.href;
        dialog.showModal();
      });
    });
    dialog.querySelector('.lightbox-close')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => { image.removeAttribute('src'); trigger?.focus(); });
  }
})();
