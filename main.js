ymaps.ready(init);

function init() {
  var map = new ymaps.Map("map", {
    center: [59.93876565029051, 30.322475142852795],
    zoom: 17,
    controls: ["zoomControl"],
    behaviors: ["drag"]
  });

  var placemark = new ymaps.Placemark(
    [59.93876565029051, 30.322475142852795],
    {},

    {
      iconLayout: "default#image",
      iconImageHref: "img/map-marker.png",
      iconImageSize: [367, 190]
    }
  );

  map.geoObjects.add(placemark);
}
