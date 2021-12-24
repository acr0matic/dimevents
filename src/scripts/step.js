const step = document.getElementById('step');
if (step) {
  const items = step.querySelectorAll('.step__item');
  const modal = document.getElementById('modal-step');
  const modalContent = modal.querySelector('.modal__content');

  _.forEach(items, (item) => {
    const info = item.querySelector('.step__info');
    const text = item.querySelector('.step__description').innerHTML;

    info.addEventListener('click', () => {
      modalContent.innerHTML = text;
      MicroModal.show("modal-step", modalParams);
    });
  });
}