document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".js-hero-slider-photo")) {
    const swiper = new Swiper(".js-hero-slider-photo", {
      // Optional parameters
      loop: true,
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".js-hero-slider-text")) {
    const swiper = new Swiper(".js-hero-slider-text", {
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: ".js-hero-sliders .swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".js-hero-sliders .swiper-button-next",
        prevEl: ".js-hero-sliders .swiper-button-prev",
      },
    });
  }
});

