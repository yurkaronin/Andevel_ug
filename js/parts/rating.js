document.addEventListener("DOMContentLoaded", function () {
  // Получаем все блоки с рейтингом
  const ratingContainers = document.querySelectorAll('.rating');

  ratingContainers.forEach(container => {
    const ratingItems = container.querySelectorAll('.rating__item');

    ratingItems.forEach((item, index) => {
      item.addEventListener('click', function() {
        // Активация всех звезд до (включая) нажатой
        for (let i = 0; i < ratingItems.length; i++) {
          if (i <= index) {
            ratingItems[i].classList.add('isActive');
          } else {
            ratingItems[i].classList.remove('isActive');
          }
        }
      });
    });
  });
});
