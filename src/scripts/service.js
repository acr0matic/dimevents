const service = document.getElementById('service');
const serviceItems = service.querySelectorAll('.service__item');

_.forEach(serviceItems, item => {
  const video = item.querySelector('.service__video');

  item.addEventListener('mouseenter', () => video.play());
  item.addEventListener('mouseleave', () => video.pause());
})