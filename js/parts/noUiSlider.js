document.addEventListener("DOMContentLoaded", function () {
  // Инициализация noUiSlider для "Стоимость, ₽"
  const customRangeSlider = document.getElementById('customRangeSlider');
  const customRangePrice = document.getElementById('customRangePrice');

  noUiSlider.create(customRangeSlider, {
    start: 2850000, // Начальное значение
    connect: [true, false],
    range: {
      'min': 0,
      'max': 5000000
    },
    format: {
      to: function (value) {
        return parseInt(value).toLocaleString('ru-RU');
      },
      from: function (value) {
        return Number(value.replace(/\s/g, ''));
      }
    }
  });

  customRangeSlider.noUiSlider.on('update', function (values, handle) {
    customRangePrice.value = values[handle];
  });

  // Инициализация noUiSlider для "Первоначальный взнос, ₽"
  const customInitialPaymentSlider = document.getElementById('customInitialPaymentSlider');
  const customInitialPayment = document.getElementById('customInitialPayment');

  noUiSlider.create(customInitialPaymentSlider, {
    start: 450000, // Начальное значение
    connect: [true, false],
    range: {
      'min': 0,
      'max': 2000000
    },
    format: {
      to: function (value) {
        return parseInt(value).toLocaleString('ru-RU');
      },
      from: function (value) {
        return Number(value.replace(/\s/g, ''));
      }
    }
  });

  customInitialPaymentSlider.noUiSlider.on('update', function (values, handle) {
    customInitialPayment.value = values[handle];
  });

  // Инициализация noUiSlider для "Срок кредита, лет"
  const customLoanTermSlider = document.getElementById('customLoanTermSlider');
  const customLoanTerm = document.getElementById('customLoanTerm');

  noUiSlider.create(customLoanTermSlider, {
    start: 30, // Начальное значение
    connect: [true, false],
    range: {
      'min': 1,
      'max': 30
    },
    step: 1,
    format: {
      to: function (value) {
        return `${parseInt(value)} лет`;
      },
      from: function (value) {
        return Number(value.replace(/\D/g, ''));
      }
    }
  });

  customLoanTermSlider.noUiSlider.on('update', function (values, handle) {
    customLoanTerm.value = values[handle];
  });
});
