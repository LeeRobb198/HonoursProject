/* -------------------------------------------------------------------------- */
/* Home Buttons JS ---------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

// AR Button -------------------------------------------------------------------

$("#arPageButton").click(function(){
  console.log("Click registered AR button");

  if (Array.isArray(valuesArray) && valuesArray.length) {

    // Check flight selected is in range
    // planeLatitude = valuesArray[0];
    // planeLongitude = valuesArray[1];

    // distanceBetweenPoints = userLocation.distanceTo([planeLatitude, planeLongitude]).toFixed(0);
    distanceBetweenPoints = userLocation.distanceTo([latitudeTest, longitudeTest]).toFixed(0);

    if (distanceBetweenPoints < 10500) {

      var latitude = valuesArray[0];
      var longitude = valuesArray[1];
      var rotation = valuesArray[2];
      var callSignValue = valuesArray[3];
      var countryValue = valuesArray[4];
      var groundSpeedValue = valuesArray[5];
      var altitudeValue = valuesArray[6];
      var icaoValue = valuesArray[7];
      var dataSourceValue = valuesArray[8];
      var onGroundValue = valuesArray[9];
      var verticalRateValue = valuesArray[10];
      var lastUpdateValue = valuesArray[11];

      var queryString = "?paraLatitude=" + latitude + "&paraLongitude=" + longitude +
                        "&paraRotation=" + rotation + "&paraCallSign=" + callSignValue +
                        "&paraCountry=" + countryValue + "&paraGroundSpeed=" + groundSpeedValue +
                        "&paraAltitude=" + altitudeValue + "&paraIcao=" + icaoValue +
                        "&paraDataSource=" + dataSourceValue + "&paraOnGround=" + onGroundValue +
                        "&paraVerticalRate=" + verticalRateValue + "&paraLastUpdate=" + lastUpdateValue;

      window.location.href = "FlightAR.html" + queryString;
    } else {
      // Zooms to outer circle
      map.flyTo(userLocation, 10.5);

      let overlayPopupARDiv = document.querySelector(".popupARDiv");
      overlayPopupARDiv.style.display = "block";
    }
  } else {
    let overlayPopupARDiv = document.querySelector(".popupARDiv");
    overlayPopupARDiv.style.display = "block";
  }

});

// Search Button ---------------------------------------------------------------

var timeOut;

var clearFlag;

$("#searchFlightsButton").click(function(){
  console.log("Click registered search button");

  // Zooms out showing entire map
  map.flyTo(userLocation, 2, {duration: 1});

  clearFlag = true;
  clearFlagInitialFlights = false;
  refreshData();
  timeOut = setInterval(refreshData, 10000);
});

// Clear Button ----------------------------------------------------------------

$("#resetButton").click(function(){
  console.log("Click registered reset button");
  clearFlag = false;
  clearFlagInitialFlights = false;
  planeLayer.clearLayers();
  clearTimeout(timeOut);
});

// Info Button -----------------------------------------------------------------

$("#infoButton").click(function(){
  console.log("Click registered info button");
  window.location.href = "Information.html"
});
