document.addEventListener("DOMContentLoaded", function () {
  // Управление табами
  const tabs = document.querySelectorAll(".js-sliders-tabs-nav .filter-tabs__item");
  const filterForms = document.querySelectorAll(".groups-filter-form__item");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      updateActiveTab(index);
      updateActiveFilterForm(index);
    });

    // Добавляем обработчик наведения мыши на ссылки табов
    const link = tab.querySelector(".filter-tabs__link");
    link.addEventListener("mouseover", function () {
      if (window.matchMedia("(pointer: fine)").matches) { // Активируем только если устройство имеет курсор
        activateImage(index);
      }
    });

    // Обработчик убирания курсора с ссылки
    link.addEventListener("mouseout", function () {
      if (window.matchMedia("(pointer: fine)").matches) {
        deactivateAllImages();
      }
    });
  });

  // Функция для активации изображения по индексу
  function activateImage(index) {
    document.querySelectorAll(".carpet__image").forEach((image, idx) => {
      if (idx === index) {
        image.classList.add("isActive");
      } else {
        image.classList.remove("isActive");
      }
    });
  }

  // Функция для деактивации всех изображений
  function deactivateAllImages() {
    document.querySelectorAll(".carpet__image").forEach((image) => {
      image.classList.remove("isActive");
    });
  }

  // Обновление активного таба
  function updateActiveTab(activeIndex) {
    tabs.forEach((tab, index) => {
      tab.querySelector(".filter-tabs__link").classList.toggle("isActive", index === activeIndex);
    });
  }

  // Обновление активной формы фильтра
  function updateActiveFilterForm(activeIndex) {
    filterForms.forEach((form, index) => {
      form.style.display = index === activeIndex ? "block" : "none";
    });
  }

  // Инициализация состояния формы фильтров
  updateActiveTab(0); // Устанавливаем первый таб активным
  updateActiveFilterForm(0); // Показываем содержимое первого таба

});
