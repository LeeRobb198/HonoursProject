// AR Button -------------------------------------------------------------------

$("#arPageButton").click(function(){
  console.log("Click registered");
  // console.log("Lat: " + lat);
  // console.log("Lng: " + lng);

  // let buttonGroupDiv = document.getElementById("buttonGroup");
  // if () {
    location.href="FlightAR.html";
  // }
});

// Search Button ---------------------------------------------------------------

var timeOut;

var clearFlag;

$("#searchFlightsButton").click(function(){
  console.log("Click registered search button");
  clearFlag = true;
  refreshData();
  timeOut = setInterval(refreshData, 10000);
});

// Clear Button ----------------------------------------------------------------

$("#resetButton").click(function(){
  console.log("Click registered reset button");
  clearFlag = false;
  planeLayer.clearLayers();
  clearTimeout(timeOut);
});
