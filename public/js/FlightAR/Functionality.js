/* -------------------------------------------------------------------------- */
/* Functionality JS --------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

window.onload = () => {

  // Flight Data Container  ----------------------------------------------------

  var queryArray = [];

  var queryString = decodeURIComponent(window.location.search);

  // Removes ? symbol from query
  queryString = queryString.substring(1);

  // Testing
  // console.log("Query String: \n" + queryString);

  // Splits query into parts
  var queries = queryString.split("&");

  // Takes value of query and adds to an array
  for (var i = 0; i < queries.length; i++) {
    var parameterValueSplit = queries[i].split("=");
    queryArray.push(parameterValueSplit[1]);
  }

  // Testing all query values extracted into array
  // console.log(queryArray);

  var callSignValue_AR = document.getElementById("callSignValue_AR");
  var countryValue_AR = document.getElementById("countryValue_AR");
  var groundSpeedValue_AR = document.getElementById("groundSpeedValue_AR");
  var altitudeValue_AR = document.getElementById("altitudeValue_AR");
  var icaoValue_AR = document.getElementById("icaoValue_AR");
  var dataSourceValue_AR = document.getElementById("dataSourceValue_AR");
  var onGroundValue_AR = document.getElementById("onGroundValue_AR");
  var verticalRateValue_AR = document.getElementById("verticalRateValue_AR");
  var lastUpdateValue_AR = document.getElementById("lastUpdateValue_AR");

  callSignValue_AR.innerHTML = queryArray[3];
  countryValue_AR.innerHTML = queryArray[4];
  groundSpeedValue_AR.innerHTML = queryArray[5] + " knts";
  altitudeValue_AR.innerHTML = queryArray[6] + " ft";
  icaoValue_AR.innerHTML = queryArray[7];
  dataSourceValue_AR.innerHTML = queryArray[9];
  onGroundValue_AR.innerHTML = queryArray[10];
  verticalRateValue_AR.innerHTML = queryArray[8] + " m/s";
  lastUpdateValue_AR.innerHTML = queryArray[11];

  // AR a-scene ----------------------------------------------------------------

  const scene = document.querySelector('a-scene');

  // Get current user location
  return navigator.geolocation.getCurrentPosition(function (position) {

                  // Selected Flight
                  // const latitude = queryArray[0];
                  // const longitude = queryArray[1];

                  // Test location
                  const latitude = 57.212509;
                  const longitude = -2.164773;

                  // Create flight image
                  const icon = document.createElement('a-image');
                  icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
                  icon.setAttribute('src', './public/images/PlaneARIcon.svg');

                  // For testing purposes scale according to distance
                  icon.setAttribute('scale', '1000, 1000');

                  // Add flight image to scene
                  scene.appendChild(icon);
  });
};
