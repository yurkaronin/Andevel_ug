document.addEventListener("DOMContentLoaded", function () {
  // Слайдеры в первом экране на главной странице
  let swiperPhoto, swiperText;

  if (document.querySelector(".js-hero-slider-photo")) {
    swiperPhoto = new Swiper(".js-hero-slider-photo", {
      loop: true,
      speed: 500
      // Убираем автопрокрутку и навигацию, так как переключение будет идти синхронно с текстовым слайдером
    });
  }

  if (document.querySelector(".js-hero-slider-text")) {
    swiperText = new Swiper(".js-hero-slider-text", {
      loop: true,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".js-hero-sliders .swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".js-hero-sliders .swiper-button-next",
        prevEl: ".js-hero-sliders .swiper-button-prev"
      },
    });

    if (swiperPhoto && swiperText) {
      swiperText.on('slideChange', function () {
        // Переключаем слайдер с фото на тот же индекс, что и текстовый слайдер
        swiperPhoto.slideTo(swiperText.activeIndex);
      });
    }

    swiperText.on('transitionEnd', function () {
      swiperPhoto.slideTo(swiperText.activeIndex);
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
