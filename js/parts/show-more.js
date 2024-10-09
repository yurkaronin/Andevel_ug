document.addEventListener('DOMContentLoaded', function() {
  // Поиск всех кнопок с классом 'show-more'
  var showMoreButtons = document.querySelectorAll('.show-more');

  // Добавление обработчика событий к каждой кнопке
  showMoreButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          // Находим родительский элемент списка, к которому относится кнопка
          var filterFormList = button.closest('.filter-form__list');

          // Переключаем класс 'showAll' на родительском элементе списка
          filterFormList.classList.toggle('showAll');
      });
  });
});
