(function () {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const overlay = document.querySelector('.nav__overlay');
  const overlayLinks = document.querySelectorAll('.nav__overlay-link');

  if (!nav) return;

  // On inner pages the nav is always solid.
  // On the home page it starts transparent and switches on scroll.
  const alwaysSolid = nav.dataset.nav === 'solid';

  function updateNav() {
    if (alwaysSolid) {
      nav.classList.add('nav--solid');
      nav.classList.remove('nav--transparent');
      return;
    }
    if (window.scrollY > 60) {
      nav.classList.add('nav--solid');
      nav.classList.remove('nav--transparent');
    } else {
      nav.classList.remove('nav--solid');
      nav.classList.add('nav--transparent');
    }
  }

  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  // Mobile overlay toggle
  function openMenu() {
    overlay.classList.add('nav__overlay--open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('nav__overlay--open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger && overlay) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    overlayLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }
})();
