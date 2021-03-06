// Arguments for map
// 1. string, where the value matches the ID value where you want the map to go.
// 2. Javascript object/*/ optional, configuring style choices.
var map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
});
let tile_url = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}';
L.tileLayer(tile_url, {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
})
    .addTo(map);