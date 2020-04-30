// -----------------------------------------------------------------------------
// apiSpecificRequest POST Method ----------------------------------------------
// -----------------------------------------------------------------------------

var https = require('https');

module.exports = function(app){
  app.post('/apiInitialRequest', function(request, response)  {

    // Input Sanitation --------------------------------------------------------

    countryArray = ["Brunei", "Iran", "Laos", "Libya", "Moldova", "Netherlands",
                    "North Macedonia", "Russia", "South Korea", "Syria", "Tanzania"]

    fullCountryArray = {"Brunei": "Brunei Darussalam", "Iran": "Islamic Republic of Iran",
                        "Laos": "Lao People's Democratic Republic", "Libya": "Libyan Arab Jamahiriya",
                        "Moldova": "Republic of Moldova", "Netherlands": "Kingdom of the Netherlands",
                        "North Macedonia": "The former Yugoslav Republic of Macedonia",
                        "Russia": "Russian Federation", "South Korea":"Republic of Korea",
                        "Syria": "Syrian Arab Republic", "Tanzania": "United Republic of Tanzania"};

    // URL
    var url = "https://opensky-network.org/api/states/all";

    // Response to server --------------------------------------------------------

    https.get(url, function(res){

      var body = '';

        res.on('data', function(chunk){
            body += chunk;
        });

        res.on('end', function(){
          var apiInitialResponse = JSON.parse(body);

          var newData = [];
          var newArray = [];

          // Adds the time to the time object of the new results array
          var time = apiInitialResponse.time;

          var icao24, callsign, origin_country, time_position, last_contact,
              longitude, latitude, baro_altitude, on_ground, velocity,
              true_track, vertical_rate, sensors, geo_altitude, squawk,
              spi, position_source;

          for(var i = 0; i < apiInitialResponse.states.length; i++) {
            if((apiInitialResponse.states[i][6] !== null && apiInitialResponse.states[i][5] !== null)) {
                icao24 = apiInitialResponse.states[i][0];
                callsign = apiInitialResponse.states[i][1];
                origin_country = apiInitialResponse.states[i][2];
                time_position = apiInitialResponse.states[i][3];
                last_contact = apiInitialResponse.states[i][4];
                longitude = apiInitialResponse.states[i][5];
                latitude = apiInitialResponse.states[i][6];
                baro_altitude = apiInitialResponse.states[i][7];
                on_ground = apiInitialResponse.states[i][8];
                velocity = apiInitialResponse.states[i][9];
                true_track = apiInitialResponse.states[i][10];
                vertical_rate = apiInitialResponse.states[i][11];
                sensors = apiInitialResponse.states[i][12];
                geo_altitude = apiInitialResponse.states[i][13];
                squawk = apiInitialResponse.states[i][14];
                spi = apiInitialResponse.states[i][15];
                position_source = apiInitialResponse.states[i][16];

                // Country Shortened -------------------------------------------

                for (var j = 0; j < countryArray.length; j++) {
                  if (apiInitialResponse.states[i][2] == fullCountryArray[countryArray[j]]) {
                    origin_country = countryArray[j];
                  }
                }

                // New Data ----------------------------------------------------

                newData = [icao24, callsign, origin_country, time_position, last_contact,
                    longitude, latitude, baro_altitude, on_ground, velocity,
                    true_track, vertical_rate, sensors, geo_altitude, squawk,
                    spi, position_source];

                newArray.push(newData);
            }
          }

          initialResponseAPIData = {time, newArray};

          response.status(200).json({
            message: "Response received",
            body: initialResponseAPIData
          });

        });

    }).on('error', function(e){
          console.log("Initial Flights POST method got an error: ", e);
    });

  }); // End of post method
};
