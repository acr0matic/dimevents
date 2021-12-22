MicroModal.init(modalParams);

tippy('[data-tippy-content]', {
  allowHTML: true,
  maxWidth: 300,
  theme: 'flat',
});

const scrollController = new SmoothScroll('a[href*="#"]', {
  speed: 300,
});

const forms = document.querySelectorAll('form');
_.forEach(forms, form => new Form(form));
