// Imports

// import Airplane from "plane-icon.jpeg";


// Creates map -----------------------------------------------------------------

var map = L.map('map_2D', {minZoom: 2, maxBoundsViscosity: 1.0}).fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoibGVlcm9iYjE5OCIsImEiOiJjazU3ZGIwam8wMDlxM2VxaDg3cmRjc3FnIn0.ZvgcqlYYmrcZjfinLqY1rA'
}).addTo(map);

// Ensures user cannot go outwidth bounds of map -------------------------------

var southWest = L.latLng(-89.98155760646617, -180),
northEast = L.latLng(89.99346179538875, 180);
var bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});

// Locates user location -------------------------------------------------------

map.locate({setView: true, maxZoom: 16});

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// API -------------------------------------------------------------------------
//
// var allFlights = "https://opensky-network.org/api/states/all";
//
// console.log(allFlights);
