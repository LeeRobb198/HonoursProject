// -----------------------------------------------------------------------------
// apiSpecificRequest POST Method ----------------------------------------------
// -----------------------------------------------------------------------------

var https = require('https');

module.exports = function(app){
  app.post('/apiSpecificRequest', function(request, response)  {
    // Test - Returns the array from client
    console.log("\nRequest body from client: ");
    // console.log(request.body);

    // Search criteria for API sent by client
    var chosenCountry = request.body.chosenCountry;
    var minSlider = request.body.minSlider * 3.28084;
    var maxSlider = request.body.maxSlider * 3.28084;
    var onGround = request.body.onGround;

    // Testing
    console.log("\nParameters: ");
    console.log(chosenCountry);
    console.log(minSlider);
    console.log(maxSlider);
    console.log(onGround);

    // Input Sanitation --------------------------------------------------------

    countryArray = ["Brunei", "Iran", "Laos", "Libya", "Moldova", "Netherlands",
                    "North Macedonia", "Russia", "South Korea", "Syria", "Tanzania"]

    fullCountryArray = {"Brunei": "Brunei Darussalam", "Iran": "Islamic Republic of Iran",
                        "Laos": "Lao People's Democratic Republic", "Libya": "Libyan Arab Jamahiriya",
                        "Moldova": "Republic of Moldova", "Netherlands": "Kingdom of the Netherlands",
                        "North Macedonia": "The former Yugoslav Republic of Macedonia",
                        "Russia": "Russian Federation", "South Korea":"Republic of Korea",
                        "Syria": "Syrian Arab Republic", "Tanzania": "United Republic of Tanzania"};

    for (var i = 0; i < countryArray.length; i++) {
      if (countryArray[i] == chosenCountry) {
        chosenCountry = fullCountryArray[countryArray[i]];
        console.log(chosenCountry);
      }
    }

    // URL
    var url = "https://opensky-network.org/api/states/all";

    // Response to server ------------------------------------------------------

    https.get(url, function(res){

      var body = '';

        res.on('data', function(chunk){
            body += chunk;
        });

        res.on('end', function(){
          var apiResponse = JSON.parse(body);

          var newData = [];
          var newArray = [];

          // Adds the time to the time object of the new results array
          var time = apiResponse.time;

          var icao24, callsign, origin_country, time_position, last_contact,
              longitude, latitude, baro_altitude, on_ground, velocity,
              true_track, vertical_rate, sensors, geo_altitude, squawk,
              spi, position_source;

          for(var i = 0; i < apiResponse.states.length; i++) {
            if((apiResponse.states[i][2] == chosenCountry) && (apiResponse.states[i][8] == onGround) && (((apiResponse.states[i][7]) >= minSlider) && ((apiResponse.states[i][7]) <= maxSlider)) && (apiResponse.states[i][6] !== null && apiResponse.states[i][5] !== null)) {
                icao24 = apiResponse.states[i][0];
                callsign = apiResponse.states[i][1];
                origin_country = apiResponse.states[i][2];
                time_position = apiResponse.states[i][3];
                last_contact = apiResponse.states[i][4];
                longitude = apiResponse.states[i][5];
                latitude = apiResponse.states[i][6];
                baro_altitude = apiResponse.states[i][7];
                on_ground = apiResponse.states[i][8];
                velocity = apiResponse.states[i][9];
                true_track = apiResponse.states[i][10];
                vertical_rate = apiResponse.states[i][11];
                sensors = apiResponse.states[i][12];
                geo_altitude = apiResponse.states[i][13];
                squawk = apiResponse.states[i][14];
                spi = apiResponse.states[i][15];
                position_source = apiResponse.states[i][16];

                // Country Shortened -------------------------------------------

                for (var j = 0; j < countryArray.length; j++) {
                  if (apiResponse.states[i][2] == fullCountryArray[countryArray[j]]) {
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

          responseAPIData = {time, newArray};

          response.status(200).json({
            message: "Response received",
            body: responseAPIData
          });

        });

    }).on('error', function(e){
          console.log("POST method got an error: ", e);
    });
  }); // End of post method
}
