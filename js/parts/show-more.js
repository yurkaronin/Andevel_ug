const BASE_VISIBLE_ITEMS = 4; // Базовое число видимых элементов

document.addEventListener('DOMContentLoaded', function() {
    // Функция для обработки элементов
    const handleFilterForm = () => {
        document.querySelectorAll('.filter-form').forEach(form => {
            let itemsCount = form.querySelectorAll('.filter-form__item').length;

            if (itemsCount > BASE_VISIBLE_ITEMS) {
                form.querySelectorAll('.filter-form__item:not(:nth-child(-n+' + BASE_VISIBLE_ITEMS + '))').forEach(item => item.classList.add('hide'));

                if (!form.querySelector('.js-show-more')) return;

                const showMoreButton = form.querySelector('.js-show-more');
                if (form.querySelectorAll('.filter-form__item.hide').length > 0) {
                    showMoreButton.classList.add('isVisible');
                } else {
                    showMoreButton.classList.remove('isVisible');
                }
            } else if (itemsCount <= BASE_VISIBLE_ITEMS) {
                form.querySelector('.js-show-more').classList.add('hide');
            }
        });
    };

    // Обработка событий клика
    document.addEventListener('click', event => {
        const target = event.target;

        if (target.matches('.js-show-more')) {
            const parentForm = target.closest('.filter-form');
            const hideItems = parentForm.querySelectorAll('.filter-form__item.hide');
            const visibleItems = parentForm.querySelectorAll('.filter-form__item:not(.hide)');

            hideItems.forEach(item => item.classList.remove('hide'));
            visibleItems.forEach((item, index) => {
                if (index >= BASE_VISIBLE_ITEMS && !item.classList.contains('hide')) {
                    item.classList.add('hide');
                }
            });

            if (parentForm.querySelectorAll('.filter-form__item.hide').length === 0) {
                target.classList.remove('isVisible');
                parentForm.classList.add('isOpen');
            } else {
                target.classList.add('isVisible');
                parentForm.classList.remove('isOpen');
            }
        }
    });

    // Вызов функции обработки фильтров при загрузке страницы
    handleFilterForm();
});
