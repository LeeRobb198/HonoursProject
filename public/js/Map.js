// Creates map -----------------------------------------------------------------

var map = L.map('map_2D', {minZoom: 2, maxBoundsViscosity: 1.0}).fitWorld();

// Light map theme
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	maxZoom: 18
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
		// Two decimal points
		var twoDecRadius = (Math.round(radius * 100) / 100);

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + twoDecRadius + " meters from this point").openPopup();

    L.circle(e.latlng, radius, {
			color: '#407099',
			fillColor: '#B8DEFF',
    fillOpacity: 0.2
	}).addTo(map);
}

function onLocationError(e) {
    alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

// Icon ------------------------------------------------------------------------

var planeIcon = L.icon({
    iconUrl: '/images/planeIcon.svg',
    iconSize: [20, 20], // size of the icon
    popupAnchor: [-1, -60], // point from which the popup should open relative to the iconAnchor
    iconAnchor: [10, 20],
});
