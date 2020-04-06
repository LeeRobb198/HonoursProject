var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()
app.use(express.json());

app.use(express.static(__dirname + '/public')); // Get the public folder
app.use(express.static(__dirname)); // Get the other webpages

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/Home.html");
})

// app.get('/', function (req, res,html) {
//  res.sendFile(path.join(__dirname + '/WebGL.html'));
// });

// POST Method -----------------------------------------------------------------

app.post('/apiSpecificRequest', function(request, response)  {
  // Test - Returns the array from client
  console.log("\nRequest body from client: ");
  console.log(request.body);

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

  // URL
  var url = "https://opensky-network.org/api/states/all";

  // Response to server --------------------------------------------------------

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

// Second POST -----------------------------------------------------------------

app.post('/apiContinuedRequest', function(request, response)  {

  // URL
  var url = "https://opensky-network.org/api/states/all";

  // Response to server --------------------------------------------------------

  https.get(url, function(res){

    var body = '';

      res.on('data', function(chunk){
          body += chunk;
      });

      res.on('end', function(){
        var apiContinuedResponse = JSON.parse(body);

        var newData = [];
        var newArray = [];

        // Adds the time to the time object of the new results array
        var time = apiContinuedResponse.time;

        var icao24, callsign, origin_country, time_position, last_contact,
            longitude, latitude, baro_altitude, on_ground, velocity,
            true_track, vertical_rate, sensors, geo_altitude, squawk,
            spi, position_source;

        for(var i = 0; i < apiContinuedResponse.states.length; i++) {
          if((apiContinuedResponse.states[i][6] !== null && apiContinuedResponse.states[i][5] !== null)) {
              icao24 = apiContinuedResponse.states[i][0];
              callsign = apiContinuedResponse.states[i][1];
              origin_country = apiContinuedResponse.states[i][2];
              time_position = apiContinuedResponse.states[i][3];
              last_contact = apiContinuedResponse.states[i][4];
              longitude = apiContinuedResponse.states[i][5];
              latitude = apiContinuedResponse.states[i][6];
              baro_altitude = apiContinuedResponse.states[i][7];
              on_ground = apiContinuedResponse.states[i][8];
              velocity = apiContinuedResponse.states[i][9];
              true_track = apiContinuedResponse.states[i][10];
              vertical_rate = apiContinuedResponse.states[i][11];
              sensors = apiContinuedResponse.states[i][12];
              geo_altitude = apiContinuedResponse.states[i][13];
              squawk = apiContinuedResponse.states[i][14];
              spi = apiContinuedResponse.states[i][15];
              position_source = apiContinuedResponse.states[i][16];

              newData = [icao24, callsign, origin_country, time_position, last_contact,
                  longitude, latitude, baro_altitude, on_ground, velocity,
                  true_track, vertical_rate, sensors, geo_altitude, squawk,
                  spi, position_source];

              newArray.push(newData);
          }
        }

        continuedResponseAPIData = {time, newArray};

        response.status(200).json({
          message: "Response received",
          body: continuedResponseAPIData
        });

      });

  }).on('error', function(e){
        console.log("Second POST method got an error: ", e);
  });

}); // End of post method

// Create Server ---------------------------------------------------------------

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})
