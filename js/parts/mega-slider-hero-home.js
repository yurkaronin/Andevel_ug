document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".js-hero-sliders")) {
    console.log("Мега слайдер инициализирован");

    // Инициализация слайдера с фотографиями
    const swiperPhoto = new Swiper(".js-hero-slider-photo", {
      loop: true,
      simulateTouch: false,
      autoplay: {
        delay: 250000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".hero__sliders-nav .swiper-button-next",
        prevEl: ".hero__sliders-nav .swiper-button-prev",
      },
    });

    // Инициализация текстового слайдера без навигационных кнопок
    const swiperText = new Swiper(".js-hero-slider-text", {
      loop: true,
      simulateTouch: true,  // Разрешаем управление с помощью мыши
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".hero__sliders-nav .swiper-pagination",
        clickable: true,
      }
    });

    // Слушатель изменений в слайдере с фото
    swiperPhoto.on("slideChange", function () {
      const newIndex = swiperPhoto.realIndex;
      if (swiperText.realIndex !== newIndex) {
        swiperText.slideToLoop(newIndex);
        updateActiveTab(newIndex);
      }
    });

    // Слушатель изменений в текстовом слайдере
    swiperText.on("slideChange", function () {
      const newIndex = swiperText.realIndex;
      if (swiperPhoto.realIndex !== newIndex) {
        swiperPhoto.slideToLoop(newIndex);
        updateActiveTab(newIndex);
      }
    });

    // Управление табами
    const tabs = document.querySelectorAll(".js-sliders-tabs-nav .filter-tabs__item");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", function (e) {
        e.preventDefault();
        swiperPhoto.slideToLoop(index);
        swiperText.slideToLoop(index);
        updateActiveTab(index);
      });
    });

    // Обновление активного таба
    function updateActiveTab(activeIndex) {
      tabs.forEach((tab, index) => {
        tab.querySelector(".filter-tabs__link").classList.toggle("isActive", index === activeIndex);
      });
    }
  }
});
