(function () {
  if (typeof GLightbox === 'undefined') return;

  GLightbox({
    selector: '.gallery-item',
    touchNavigation: true,
    loop: true,
    openEffect: 'fade',
    closeEffect: 'fade',
    slideEffect: 'slide',
    moreLength: 0,
    skin: 'groundwork',
  });
})();
