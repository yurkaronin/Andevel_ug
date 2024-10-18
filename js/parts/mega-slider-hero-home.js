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

    // Инициализация текстового слайдера с пагинацией
    const swiperText = new Swiper(".js-hero-slider-text", {
      loop: true,
      simulateTouch: true,
      pagination: {
        el: ".hero__sliders-nav .swiper-pagination",
        clickable: true,
      }
    });

    // Синхронизация слайдеров фото и текст при смене слайдов
    swiperPhoto.on("slideChange", function () {
      const newIndex = swiperPhoto.realIndex;
      if (swiperText.realIndex !== newIndex) {
        swiperText.slideToLoop(newIndex);
      }
    });

    swiperText.on("slideChange", function () {
      const newIndex = swiperText.realIndex;
      if (swiperPhoto.realIndex !== newIndex) {
        swiperPhoto.slideToLoop(newIndex);
      }
    });

  }
});
