// AR Button -------------------------------------------------------------------

$("#arPageButton").click(function(){
  console.log("Click registered");
  location.href="FlightAR.html";
});

// Search Button ---------------------------------------------------------------

var timeOut;

var clearFlag;

$("#searchButton").click(function(){
  console.log("Click registered search button");
  clearFlag = true;
  timeOut = setInterval(refreshData, 10000);
});

// Clear Button ----------------------------------------------------------------

$("#clearButton").click(function(){
  console.log("Click registered clear button");
  clearFlag = false;
  planeLayer.clearLayers();
  clearTimeout(timeOut);
});
