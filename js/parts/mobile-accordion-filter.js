document.addEventListener('DOMContentLoaded', function() {
  // Найти все элементы с классом '.mobile-accordion-filter__item'
  var accordionItems = document.querySelectorAll('.mobile-accordion-filter__item');

  // Проверить, есть ли хотя бы один элемент
  if (accordionItems.length > 0) {
      // Сделать первый элемент активным
      accordionItems[0].classList.add('isActive');

      // Добавить обработчики событий для всех элементов коллекции
      accordionItems.forEach(function(item) {
          // Найти заголовок внутри элемента
          var head = item.querySelector('.mobile-accordion-filter__head');

          // Добавить обработчик события клика на заголовок
          if (head) {
              head.addEventListener('click', function() {
                  // Переключить класс 'isActive' на текущем элементе
                  item.classList.toggle('isActive');
              });
          }
      });
  }
});
