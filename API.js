// Url

var url = "https://opensky-network.org/api/states/all";

// Return All States -----------------------------------------------------------
//$("#showTest").click(function(){
  $.getJSON( url , function(data) {

      //Returns all states to the console
      console.log("First console");
      console.log(data);

      console.log(data.states.length);

      // var test = [];
      // test[0] = data.time;
      // test[1] = data.states[0];
      //
      // console.log(test);

      // Returns 1 states first value
      //console.log(data.states[0][2]);
  });
//});

// Return Specific States ------------------------------------------------------

$("#showTest").click(function(){
  $.getJSON( url , function(data) {

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
        if(data.states[i][2] == 'United States') {
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
            // L.marker([latitude, longitude], {icon: planeIcon}).addTo(map);
            L.marker([latitude, longitude], {icon: planeIcon}).addTo(map)
            .bindPopup( "Flight Data" +
                        "\nICAO 24-bit Address: " + icao24 +
                        "\nOrigin Country: " + origin_country +
                        "\nLatitude: " + latitude +
                        "\nLongitude: " + longitude +
                        "\nVelocity: " + velocity).openPopup();
          }
          //testArray.push(data.states[i][2]);
        }

      }

      result['states'] = newArray;
      console.log("Third console");
      console.log(result);

      //console.log("Countries");
      //console.log(testArray);

  });
});

// Icon ------------------------------------------------------------------------

var planeIcon = L.icon({
    iconUrl: 'planeIcon2.svg',

    iconSize:     [15, 60], // size of the icon
    //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// Add Markers -----------------------------------------------------------------

// L.marker([51.5, -0.09], {icon: planeIcon}).addTo(map);
