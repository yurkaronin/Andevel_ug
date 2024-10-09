document.addEventListener("DOMContentLoaded", function () {
  // Находим все ссылки внутри элементов с классом .mobile-nav__item
  const links = document.querySelectorAll('.js-mobile-accordion .mobile-nav__link');

  // Добавляем обработчик клика для каждой ссылки
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      // Предотвращаем переход по ссылке
      event.preventDefault();

      // Находим родительский элемент с классом .mobile-nav__item
      const parentItem = link.closest('.js-mobile-accordion');

      // Добавляем или удаляем класс isActive у родительского элемента
      if (parentItem) {
        parentItem.classList.toggle('isActive');
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Находим все кнопки внутри элементов с классом .mobile-nav__item
//   const buttons = document.querySelectorAll('.mobile-nav__item .button');

//   // Добавляем обработчик клика для каждой кнопки
//   buttons.forEach(button => {
//     button.addEventListener('click', function () {
//       // Находим родительский элемент с классом .mobile-nav__item
//       const parentItem = button.closest('.mobile-nav__item');

//       // Добавляем или удаляем класс isActive у родительского элемента
//       if (parentItem) {
//         parentItem.classList.toggle('isActive');
//       }
//     });
//   });
// });

