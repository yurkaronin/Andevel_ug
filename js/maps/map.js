if (document.querySelector('.js-map')) {
  let center = [55.582431, 37.581424];

  function init() {
    let mapElement = document.querySelector('.js-map');
    let map = new ymaps.Map(mapElement, {
      center: center,
      zoom: 15
    });

    // Определяем размер и смещение иконки по умолчанию
    let iconSize = [40, 56];
    let iconOffset = [-20, -56];

    // Проверка ширины экрана и установка размеров для мобильных устройств
    // if (window.innerWidth <= 767) {
    //   iconSize = [40, 56];
    //   iconOffset = [-20, -56];
    // }

    let placeMark = new ymaps.Placemark([55.582431, 37.581424], {
      hintContent: 'Название',
      balloonContentHeader: 'Название',
      balloonContentFooter: 'Произвольное описание или адрес'
    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/map/balun.svg',
      iconImageSize: iconSize,
      iconImageOffset: iconOffset
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.behaviors.disable(['scrollZoom']);

    map.geoObjects.add(placeMark);

    // placeMark.events.add('mouseenter', function (e) {
    //   e.get('target').options.set('iconImageHref', './img/map/balun-hover.svg');
    // });

    // placeMark.events.add('mouseleave', function (e) {
    //   e.get('target').options.set('iconImageHref', './img/map/balun.svg');
    // });
  }

  ymaps.ready(init);
};
