document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form').forEach(form => {
    const errorMessage = form.querySelector('.error-message');
    const phoneInputs = form.querySelectorAll('input[type="tel"]');

    function applyMask(event) {
      let input = event.target;
      let value = input.value.replace(/\D+/g, '');
      let formattedValue = '+7 ';

      if (value.length > 1) {
        formattedValue += '(' + value.slice(1, 4);
      }
      if (value.length >= 4) {
        formattedValue += ') ' + value.slice(4, 7);
      }
      if (value.length >= 7) {
        formattedValue += '-' + value.slice(7, 9);
      }
      if (value.length >= 9) {
        formattedValue += '-' + value.slice(9, 11);
      }

      input.value = formattedValue.slice(0, 18); // Ограничиваем длину форматированного номера

      // Проверка валидности введенного номера и обновление UI
      if (validatePhone(formattedValue)) {
        input.classList.remove('error'); // Удаление класса ошибки, если номер валиден
        errorMessage.style.display = 'none'; // Скрываем сообщение об ошибке
      } else {
        if (input.value.length === 18) { // Показываем ошибку только если введено достаточно символов
          errorMessage.style.display = 'block'; // Показываем сообщение об ошибке
        }
      }
    }

    function validatePhone(value) {
      const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
      return phoneRegex.test(value);
    }

    phoneInputs.forEach(input => {
      input.addEventListener('input', applyMask);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let isFormValid = true;

      // Проверяем каждое поле ввода перед отправкой формы
      phoneInputs.forEach(input => {
        if (!validatePhone(input.value)) {
          input.classList.add('error');
          errorMessage.style.display = 'block';
          isFormValid = false;
        } else {
          input.classList.remove('error');
          errorMessage.style.display = 'none';
        }
      });

      if (isFormValid) {
        console.log('Форма успешно отправлена');
        alert('Форма успешно отправлена. Спасибо за вашу заявку!');
        // Здесь может быть код для реальной отправки формы, например, через AJAX
      } else {
        console.log('Форма содержит невалидные поля, отправка отменена');
      }
    });
  });
});
