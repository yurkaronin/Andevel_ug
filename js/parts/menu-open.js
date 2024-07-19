var buttonsMenu = document.querySelectorAll('.menu-button');
if (buttonsMenu.length > 0) {
  buttonsMenu.forEach(function(buttonMenu) {
    buttonMenu.addEventListener('click', function () {
      // buttonMenu.classList.toggle('isActive');
      document.body.classList.toggle('menu-open');
    });
  });
};
