// Url

var url = "https://opensky-network.org/api/states/all";

// Plane Layer

var planeLayer = L.layerGroup().addTo(map);

// Return All States -----------------------------------------------------------

//$("#showTest").click(function(){
  $.getJSON( url , function(data) {

      //Returns all states to the console
      console.log("First console");
      console.log(data);

      console.log(data.states.length);

      // Test ------------------------------------------------------------------

      var unitedStates, chile, austria, barbados, spain, hungary,
          southAfrica, canada, germany, sweden, brazil, iceland,
          estonia, australia, thailand, unitedKingdom;

      // Finding all countries ---------------------

      for(var i = 0; i < data.states.length; i++) {
        if(data.states[i][2] == 'United States') {
          unitedStates++;
        } else if(data.states[i][2] == 'Chile') {
          chile++;
        } else if(data.states[i][2] == 'Austria') {
          austria++;
        } else if(data.states[i][2] == 'Barbados') {
          barbados++;
        } else if(data.states[i][2] == 'Spain') {
          spain++;
        } else if(data.states[i][2] == 'Hungary') {
          hungary++;
        } else if(data.states[i][2] == 'South Africa') {
          southAfrica++;
        } else if(data.states[i][2] == 'Canada') {
          canada++;
        } else if(data.states[i][2] == 'Germany') {
          germany++;
        } else if(data.states[i][2] == 'Sweden') {
          sweden++;
        } else if(data.states[i][2] == 'Brazil') {
          brazil++;
        } else if(data.states[i][2] == 'Iceland') {
          iceland++;
        } else if(data.states[i][2] == 'Estonia') {
          estonia++;
        } else if(data.states[i][2] == 'Australia') {
          australia++;
        } else if(data.states[i][2] == 'Thailand') {
          thailand++;
        } else if(data.states[i][2] == 'New Zealand') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Indonesia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Norway') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Slovakia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'France') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Argentina') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Italy') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Poland') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'China') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'India') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Colombia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Czech Republic') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Iraq') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Bangladesh') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Japan') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Israel') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Turkey') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'United Kingdom') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Kingdom of the Netherlands') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'United Arab Emirates') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Denmark') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Belgium') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'San Marino') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Morocco') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Islamic Republic of Iran') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Russian Federation') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Brunei Darussalam') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Kazakhstan') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Luxembourg') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Jordan') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Libyan Arab Jamahiriya') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Finland') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'United Kingdom') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Mexico') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Malaysia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Portugal') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Serbia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Singapore') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Albania') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Bahrain') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Lebanon') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Taiwan') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Togo') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Ireland') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Ethiopia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Ukraine') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Latvia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Republic of Korea') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Qatar') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Trinidad and Tobago') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Lithuania') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Myanmar') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Algeria') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Belarus') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Fiji') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Republic of Moldova') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Azerbaijan') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Bolivia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Switzerland') {
          unitedKingdom++;
        } else if(data.states[i][2] == "Lao People's Democratic Republic") {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Dominican Republic') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Romania') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Philippines') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Bulgaria') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Mongolia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Slovenia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Greece') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Tunisia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Saudi Arabia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Mauritius') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Pakistan') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Sri Lanka') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Oman') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Viet Nam') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Croatia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Kuwait') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Venezuela') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Tajikistan') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Turkmenistan') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Uzbekistan') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Egypt') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Georgia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Malta') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Cape Verde') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Nepal') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Kenya') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Cambodia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Panama') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Armenia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Maldives') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Guatemala') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Peru') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Papua New Guinea') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Montenegro') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Antigua and Barbuda') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Mauritania') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Ecuador') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Paraguay') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Bahamas') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Costa Rica') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Vanuatu') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Nigeria') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Seychelles') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Senegal') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Afghanistan') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Angola') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Uruguay') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Syrian Arab Republic') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Zimbabwe') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Rwanda') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'United Republic of Tanzania') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Suriname') {
          unitedKingdom++;
        } else if(data.states[i][2] == "Côte d'Ivoire") {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Kyrgyzstan') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Cyprus') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Botswana') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Namibia') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Malawi') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Saint Vincent and the Grenadines') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Niger') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Swaziland') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Solomon Islands') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Burkina Faso') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Madagascar') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Honduras') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Monaco') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Bhutan') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'Ghana') {
          unitedKingdom++;
        } else if(data.states[i][2] == 'The former Yugoslav Republic of Macedonia') {
          unitedKingdom++;
        }

        else {
          console.log(data.states[i][2]);
        }
      }

      // Max altitude test ---------------------
      var maxAltitude = 0;

      for(var i = 0; i < data.states.length; i++) {
        // if(data.states[i][7] != false) {
          if(data.states[i][7] > maxAltitude) {
            maxAltitude = data.states[i][7];
            // console.log("Max Altitude: " + maxAltitude);
          }
        // }
      }
      console.log("Max Altitude: " + maxAltitude);

      console.log("Complete");

      // Returns 1 states first value
      //console.log(data.states[0][2]);
  });
//});

// Refresh Data Function -------------------------------------------------------

function refreshData() {

  $.getJSON( url , function(data) {

      // Clears all flights on plane layer
      planeLayer.clearLayers();

      // Get chosen country from dropdown
      var cc = document.getElementById("dropdownCountries");
      var chosenCountry = cc.options[cc.selectedIndex].value;

      // Get on ground parameter from dropdown
      // var og = document.getElementById("dropdownOnGround");
      // var onGround = og.options[og.selectedIndex].value;

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
        if((data.states[i][2] == chosenCountry) && (data.states[i][8] == onGround) && ((minSlider >= (data.states[i][7] * 3.28084) && ((data.states[i][7] * 3.28084) <= maxSlider)))) {
        // if((data.states[i][2] == chosenCountry) && (data.states[i][8] == onGround)) {
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
            L.marker([latitude, longitude], {icon: planeIcon}).addTo(planeLayer)
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
  });
}

// Search Button ---------------------------------------------------------------

$("#searchButton").click(function(){
  console.log("Click registered");
  var timeOut = setInterval(refreshData, 10000);

  // Clear Function

  $("#clearButton").click(function(){
      planeLayer.clearLayers();
      clearInterval(timeOut);
  });
});

// AR Button -------------------------------------------------------------------

$("#arPageButton").click(function(){
  console.log("Click registered");
  location.href="FlightAR.html";
});

// WebGL Button ----------------------------------------------------------------

$("#3dPageButton").click(function(){
  console.log("Click registered");
  location.href="WebGL.html";
});

// Icon ------------------------------------------------------------------------

var planeIcon = L.icon({
    iconUrl: '/images/planeIcon2.svg',
    iconSize:     [15, 60], // size of the icon
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
