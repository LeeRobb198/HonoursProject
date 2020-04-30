/* -------------------------------------------------------------------------- */
/* Home Buttons JS ---------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

// AR Button -------------------------------------------------------------------

$("#arPageButton").click(function(){
  console.log("Click registered AR button");

    // Check flight selected is in range
    // planeLatitude = valuesArray[0];
    // planeLongitude = valuesArray[1];

    // distanceBetweenPoints = userLocation.distanceTo([planeLatitude, planeLongitude]).toFixed(0);
    distanceBetweenPoints = userLocation.distanceTo([latitudeTest, longitudeTest]).toFixed(0);

    if (distanceBetweenPoints < 10500) {

      var latitude = valuesArray[0];
      var longitude = valuesArray[1];
      var rotation = valuesArray[2];
      var callSignValue = "LR 1998";
      var countryValue = "United Kingdom";
      var groundSpeedValue = "230";
      var altitudeValue = "10000";
      var icaoValue = "<Long-Number>";
      var dataSourceValue = "ADS-B";
      var onGroundValue = "false";
      var verticalRateValue = "-5";
      var lastUpdateValue = "<Get-A-Watch>";

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
