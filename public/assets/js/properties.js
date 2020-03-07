// Variable to be called to add/change map elements that points to the map div
var map = L.map('map');
L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
    attribution:
        '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

$.get("/api/search", function (data) {
    map.setView([
        parseFloat(data[0].latitude),
        parseFloat(data[0].longitude)
    ])
});
