// Инициализация центра и зума: Центр и зум теперь определяются так, чтобы учесть все метки.
// Получение элементов с координатами: Скрипт проходит по каждому элементу .office-announce-card, читает его координаты, и создаёт метку с этими координатами.
// Автоматическое установление границ карты: После добавления всех меток, карта автоматически подстроит зум и центр так, чтобы все метки были видны.
// Этот скрипт позволит добавлять на карту все объекты, перечисленные на странице, и каждая метка будет соответствовать координатам и названию своего объекта.

if (document.querySelector('.js-office-map')) {
  // Устанавливаем центр карты и масштаб по умолчанию
  let center = [55.582431, 37.581424];
  let zoom = 10;  // Больший зум, чтобы вместить все объекты

  function init() {
    let mapElement = document.querySelector('.js-office-map');
    let map = new ymaps.Map(mapElement, {
      center: center,
      zoom: zoom
    });

    // Определяем размер и смещение иконки по умолчанию
    let iconSize = [40, 56];
    let iconOffset = [-20, -56];

    // Удаление стандартных элементов управления
    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.behaviors.disable(['scrollZoom']);

    // Получаем все объекты с атрибутом data-coords
    document.querySelectorAll('.office-announce-card').forEach(function(item) {
      let coords = JSON.parse(item.getAttribute('data-coords'));
      let title = item.querySelector('.office-announce-card__title').textContent;

      // Создаем метку для каждого объекта
      let placeMark = new ymaps.Placemark(coords, {
        hintContent: title,
        balloonContentHeader: title,
        balloonContentFooter: 'Произвольное описание или адрес'
      }, {
        iconLayout: 'default#image',
        iconImageHref: './img/map/balun.svg',
        iconImageSize: iconSize,
        iconImageOffset: iconOffset
      });

      // Добавляем метку на карту
      map.geoObjects.add(placeMark);
    });

    // Определяем границы карты по объектам
    map.setBounds(map.geoObjects.getBounds(), {
      checkZoomRange: true,
      zoomMargin: 50
    });
  }

  ymaps.ready(init);
};
