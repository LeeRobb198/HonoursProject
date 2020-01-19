// initialize() ----------------------------------------------------------------

function initialize() {

        // Map -----------------------------------------------------------------
        var earth = new WE.map('map_3D');
        WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

        earth.setView([51.505, 0], 2);


        // Url -----------------------------------------------------------------

        var url = "https://opensky-network.org/api/states/all";

        // Return Specific States (WebGL Map) ----------------------------------

        setInterval(function(){

          $.getJSON( url , function(data) {

            var result = [];
            var newData = [];
            var newArray = [];
            var testArray = [];
            var marker;

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
                  // WE.marker([latitude, longitude], {icon: planeIcon}).addTo(map_3D)
                  WE.marker([latitude, longitude]).addTo(earth)
                  .bindPopup( "<b>Flight Data</b>" +
                              "<br>ICAO 24-bit Address: " + icao24 +
                              "<br>Origin Country: " + origin_country +
                              "<br>Latitude: " + latitude +
                              "<br>Longitude: " + longitude +
                              "<br>Velocity: " + velocity, {maxWidth: 150, closeButton: true});
                }
              }

            }

            result['states'] = newArray;
            // console.log("Third console");
            // console.log(result);

          });
        }, 10000); // Updates every 5 seconds
        // Icon ----------------------------------------------------------------

      //   var planeIcon = L.icon({
      //       iconUrl: 'planeIcon2.svg',
      //       iconSize:     [15, 60], // size of the icon
      //       popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      //   });
      //
      }
