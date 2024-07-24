document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".js-slider-photo")) {
    const swiper = new Swiper(".js-slider-photo", {
      // Optional parameters
      loop: true,
    });
  }
});
