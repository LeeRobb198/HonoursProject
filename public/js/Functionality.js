// Plane Layer

var planeLayer = L.layerGroup().addTo(map);

// Refresh Data Function -------------------------------------------------------

async function refreshData() {

  if (clearFlag == true) {

    // Get chosen country from dropdown
    var cc = document.getElementById("countrySelection");
    var chosenCountry = cc.options[cc.selectedIndex].value;

    // Check if plane is grounded
    var onGround = document.getElementById("onGroundCheck").checked;

    // Get minimum slider value
    var minSlider = document.getElementById("minSlider").value;

    // Get maximum slider value
    var maxSlider = document.getElementById("maxSlider").value;

    // Array to be sent to server
    var flightRequestData = {chosenCountry, onGround, minSlider, maxSlider};

    // Content to be sent to server
    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(flightRequestData)
    }

    // Sends request to server
    var response = await fetch('/apiRequest', options);

    var data = await response.json();

    var result = [];

    result['times'] = data.body.time;

    result['states'] = data.body.newArray;

    console.log(result);

    console.log(data.body.newArray.length);

    if (data.body.newArray.length > 0) {

      var icao24, callsign, origin_country, time_position, last_contact,
          longitude, latitude, baro_altitude, on_ground, velocity,
          true_track, vertical_rate, sensors, geo_altitude, squawk,
          spi, position_source;

      // Clear plane layer (optimal place for reduction of blackout)
      planeLayer.clearLayers();

      for(var i = 0; i < data.body.newArray.length; i++) {
        icao24 = data.body.newArray[i][0];
        callsign = data.body.newArray[i][1];
        origin_country = data.body.newArray[i][2];
        time_position = data.body.newArray[i][3];
        last_contact = data.body.newArray[i][4];
        longitude = data.body.newArray[i][5];
        latitude = data.body.newArray[i][6];
        baro_altitude = data.body.newArray[i][7];
        on_ground = data.body.newArray[i][8];
        velocity = data.body.newArray[i][9];
        true_track = data.body.newArray[i][10];
        vertical_rate = data.body.newArray[i][11];
        sensors = data.body.newArray[i][12];
        geo_altitude = data.body.newArray[i][13];
        squawk = data.body.newArray[i][14];
        spi = data.body.newArray[i][15];
        position_source = data.body.newArray[i][16];

      L.marker([latitude, longitude], {icon: planeIcon, rotationAngle: true_track}).addTo(planeLayer)

        // Testing -------------------------------------------------------------
        // .bindPopup( "<b>Flight Data</b>" +
        //             "<br>ICAO 24-bit Address: " + icao24 +
        //             "<br>Call Sign: " + callsign +
        //             "<br>Origin Country: " + origin_country +
        //             "<br>Latitude: " + latitude +
        //             "<br>Longitude: " + longitude +
        //             "<br>Velocity: " + velocity +
        //             "<br>Altitude: " + baro_altitude +
        //             "<br>Rotation: " + true_track +
        //             "<br>On Ground: " + on_ground)
        // ---------------------------------------------------------------------

        // On click of icon display data to the Flight Data container
        .on('click', function(e) {

          let overlayFlightDataDiv = document.querySelector(".flightData_container");
          let buttonGroupDiv = document.getElementById("buttonGroup");

          overlayFlightDataDiv.style.display = "block";
          buttonGroupDiv.style.display = "none";

          var lat = e.latlng.lat;
          var lng = e.latlng.lng;
          var rotationAngle = e.target.options.rotationAngle;

          // console.log(data.body.newArray.length);

          for(var i = 0; i < data.body.newArray.length; i++) {
            if ((data.body.newArray[i][6] == lat) && (data.body.newArray[i][5] == lng) && (data.body.newArray[i][10] == rotationAngle)) {
              // Finding value associated to that ID
              var callSignValue = document.getElementById("callSignValue");
              var countryValue = document.getElementById("countryValue");
              var groundSpeedValue = document.getElementById("groundSpeedValue");
              var altitudeValue = document.getElementById("altitudeValue");
              var icaoValue = document.getElementById("icaoValue");
              var dataSourceValue = document.getElementById("dataSourceValue");
              var onGroundValue = document.getElementById("onGroundValue");
              var verticalRateValue = document.getElementById("verticalRateValue");
              var lastUpdateValue = document.getElementById("lastUpdateValue");

              // Assigning new value
              callSignValue.innerHTML = data.body.newArray[i][1];
              countryValue.innerHTML = data.body.newArray[i][2];
              groundSpeedValue.innerHTML = data.body.newArray[i][9] + " knts";
              altitudeValue.innerHTML = data.body.newArray[i][7] + " ft";
              icaoValue.innerHTML = data.body.newArray[i][0];
              verticalRateValue.innerHTML = data.body.newArray[i][11] + " m/s";

              // Data Source
              if (data.body.newArray[i][16] == 0) {
                dataSourceValue.innerHTML = "ADS-B";
              } else if (data.body.newArray[i][16] == 1) {
                dataSourceValue.innerHTML = "ASTERIX";
              } else if (data.body.newArray[i][16] == 2) {
                dataSourceValue.innerHTML = "MLAT";
              } else {
                dataSourceValue.innerHTML = "Null";
              }

              // Airbourne
              if (data.body.newArray[i][8] == true) {
                onGroundValue.innerHTML = "False";
              } else if (data.body.newArray[i][8] == false) {
                onGroundValue.innerHTML = "True";
              } else {
                onGroundValue.innerHTML = "Null";
              }

              // Last Update
              var timestamp = data.body.time
              dateObj = new Date(timestamp * 1000);

              // hours as 2 digits (hh)
              var hours = ("0" + dateObj.getHours()).slice(-2);

              // minutes as 2 digits (mm)
              var minutes = ("0" + dateObj.getMinutes()).slice(-2);

              // seconds as 2 digits (ss)
              var seconds = ("0" + dateObj.getSeconds()).slice(-2);

              lastUpdate = hours + ":" + minutes + ":" + seconds;
              lastUpdateValue.innerHTML = lastUpdate;
            }
          }
        });

      }

    } else {
      let overlayPopupDiv = document.querySelector(".popupDiv");
      overlayPopupDiv.style.display = "block";
      clearFlag = false;
    }

  } else {
    console.log("Clear Flag is set false stop!");
  };
};
