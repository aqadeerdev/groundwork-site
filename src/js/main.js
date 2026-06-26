(function () {
  // Back to top
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > window.innerHeight) {
        backToTop.classList.add('back-to-top--visible');
      } else {
        backToTop.classList.remove('back-to-top--visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
