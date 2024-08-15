document.addEventListener("DOMContentLoaded", function () {
  var customSelects = document.querySelectorAll(".custom-select");

  // Функция для обрезки текста до 20 символов
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  customSelects.forEach(function (select) {
    var selected = select.querySelector(".custom-select__selected");
    var options = select.querySelector(".custom-select__options");

    selected.addEventListener("click", function () {
      select.classList.toggle("open");
    });

    var selectOptions = options.querySelectorAll(".custom-select__option");
    selectOptions.forEach(function (option) {
      option.addEventListener("click", function () {
        var value = this.getAttribute("data-value");
        // Обрезаем текст до 20 символов перед его установкой
        selected.textContent = truncateText(this.textContent, 20);
        select.classList.remove("open");
        var input = select.querySelector("input[type=hidden]");
        input.value = value;
        input.dispatchEvent(new Event('input'));
      });
    });

    var defaultValue = select.getAttribute("data-default");
    if (defaultValue) {
      // Обрезаем значение по умолчанию до 20 символов
      selected.textContent = truncateText(defaultValue, 20);
      var defaultOption = options.querySelector(
        '.custom-select__option[data-value="' + defaultValue + '"]'
      );
      if (defaultOption) {
        var defaultOptionValue = defaultOption.getAttribute("data-value");
        var input = select.querySelector("input[type=hidden]");
        input.value = defaultOptionValue;
        selected.textContent = defaultOption.textContent;
      }
    }

    document.addEventListener("click", function (event) {
      if (!select.contains(event.target)) {
        select.classList.remove("open");
      }
    });
  });
});
