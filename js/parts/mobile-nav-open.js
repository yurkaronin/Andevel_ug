document.addEventListener("DOMContentLoaded", function () {
  // Обработка открытия и закрытия мобильного меню
  var mobileButtonMenu = document.querySelector('.js-menu-button-mobile');
  mobileButtonMenu.addEventListener('click', function () {
    document.body.classList.toggle('mobile-nav-open');
  });

});
