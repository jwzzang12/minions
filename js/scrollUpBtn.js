const scrollUpBtn = document.querySelector('.north');

scrollUpBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
