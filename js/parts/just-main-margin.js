document.addEventListener("DOMContentLoaded", function() {
  // Функция для установки отступа, основанная на высоте шапки
  function setInitialMainMargin() {
    const header = document.querySelector('header');
    const mainElement = document.querySelector('.main');

    if (header && mainElement) {
      const headerHeight = header.offsetHeight;
      mainElement.style.marginTop = headerHeight + 'px';
    }
  }

  // Вызов функции для установки отступа сразу после загрузки DOM
  setInitialMainMargin();
});
