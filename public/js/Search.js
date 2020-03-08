// Url

var url = "https://opensky-network.org/api/states/all";

// Plane Layer

var planeLayer = L.layerGroup().addTo(map);

// Refresh Data Function -------------------------------------------------------

function refreshData() {

    $.getJSON( url , function(data) {

      // Flag statement
      if (clearFlag == true) {

        // Clears all flights on plane layer
        planeLayer.clearLayers();

        // Get chosen country from dropdown
        var cc = document.getElementById("countrySelection");
        var chosenCountry = cc.options[cc.selectedIndex].value;

        console.log(chosenCountry);

        var onGround = document.getElementById("onGroundCheck").checked;

        // Get minimum slider value
        var minSlider = document.getElementById("minSlider").value;

        // Get maximum slider value
        var maxSlider = document.getElementById("maxSlider").value;

        // Console logs of parameters
        console.log("Chosen Country:")
        console.log(chosenCountry);
        console.log("On Ground:")
        console.log(onGround);
        console.log("Minimum Slider:");
        console.log(minSlider * 3.28084);
        console.log("Maximum Slider:");
        console.log(maxSlider * 3.28084);

        var result = [];
        var newData = [];
        var newArray = [];
        var testArray = [];

        result['times'] = data.time;

        var icao24, callsign, origin_country, time_position, last_contact,
            longitude, latitude, baro_altitude, on_ground, velocity,
            true_track, vertical_rate, sensors, geo_altitude, squawk,
            spi, position_source;

        for(var i = 0; i < data.states.length; i++) {
          if((data.states[i][2] == chosenCountry) && (data.states[i][8] == onGround) && (((data.states[i][7] * 3.28084) >= minSlider) && ((data.states[i][7] * 3.28084) <= maxSlider))) {
            icao24 = data.states[i][0];
            callsign = data.states[i][1];
            origin_country = data.states[i][2];
            time_position = data.states[i][3];
            last_contact = data.states[i][4];
            longitude = data.states[i][5];
            latitude = data.states[i][6];
            baro_altitude = data.states[i][7];
            on_ground = data.states[i][8];
            velocity = data.states[i][9];
            true_track = data.states[i][10];
            vertical_rate = data.states[i][11];
            sensors = data.states[i][12];
            geo_altitude = data.states[i][13];
            squawk = data.states[i][14];
            spi = data.states[i][15];
            position_source = data.states[i][16];

            newData = [icao24, callsign, origin_country, time_position, last_contact,
                longitude, latitude, baro_altitude, on_ground, velocity,
                true_track, vertical_rate, sensors, geo_altitude, squawk,
                spi, position_source];

            newArray.push(newData);

            if(latitude !== null && longitude !== null) {
            L.marker([latitude, longitude], {icon: planeIcon, rotationAngle: true_track}).addTo(planeLayer)
              .bindPopup( "<b>Flight Data</b>" +
                          "<br>ICAO 24-bit Address: " + icao24 +
                          "<br>Call Sign: " + callsign +
                          "<br>Origin Country: " + origin_country +
                          "<br>Latitude: " + latitude +
                          "<br>Longitude: " + longitude +
                          "<br>Velocity: " + velocity +
                          "<br>Altitude: " + baro_altitude +
                          "<br>On Ground: " + on_ground); //.openPopup();
            }
          }

        }

        result['states'] = newArray;
        console.log("Third console");
        console.log(result);
      }
      else {
        console.log("Clear Flag is set false stop!");
      }
    });
}

// // Icon ------------------------------------------------------------------------
//
// var planeIcon = L.icon({
//     iconUrl: '/images/planeIcon.svg',
//     // iconUrl: '/images/plane-icon.jpeg',
//     iconSize: [20, 20], // size of the icon
//     popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
//     iconAnchor: [10, 20],
//     // rotationAngle: true_track
// });
