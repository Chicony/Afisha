$(function () {
    let mapContainer = $('#mapContainer');
    let dataMap = mapContainer.data('map');
    setTimeout(function () {
        mapContainer.html(dataMap);
    }, 2000);
})