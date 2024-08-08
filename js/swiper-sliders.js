document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".js-hero-slider-photo")) {
    const swiper = new Swiper(".js-hero-slider-photo", {
      // Optional parameters
      loop: true,
    });
  }

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

  // скрипт инициализации мини-слайдеров в анонсах
  if (document.querySelector(".announce-card__slider")) {
    const sliderCards = document.querySelectorAll(".announce-card");

    sliderCards.forEach((card, index) => {
      const sliderContainer = card.querySelector(".js-announce-card-slider");

      if (sliderContainer) {
        sliderContainer.classList.add(`announce-card-gallery-${index}`);
        const swiperTest = new Swiper(`.announce-card-gallery-${index}`, {});

        const navItems = card.querySelectorAll(
          ".announce-card__navigation-item"
        );

        navItems.forEach((item, i) => {
          item.setAttribute("data-number", i);
        });

        card
          .querySelector(".announce-card__navigation")
          .addEventListener("mouseover", (event) => {
            if (
              event.target.classList.contains("announce-card__navigation-item")
            ) {
              navItems.forEach((elem) => {
                elem.classList.remove("announce-card__navigation-item--active");
              });

              event.target.classList.add(
                "announce-card__navigation-item--active"
              );
              swiperTest.slideTo(event.target.getAttribute("data-number"));
            }
          });
      }
    });
  }
});
