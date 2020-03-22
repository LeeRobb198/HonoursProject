// AR Button -------------------------------------------------------------------

$("#arPageButton").click(function(){
  console.log("Click registered");
  location.href="FlightAR.html";
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

function toggleSearchOverlay() {
  let overlaySearchDiv = document.querySelector(".search_container");
  let buttonGroupDiv = document.getElementById("buttonGroup");

  if (overlaySearchDiv.style.display === "none") {
    overlaySearchDiv.style.display = "block";
    buttonGroupDiv.style.display = "none";
  } else {
    overlaySearchDiv.style.display = "none";
    buttonGroupDiv.style.display = "block";
  }
}

function toggleSearchExit() {
  let overlaySearchDiv = document.querySelector(".search_container");
  let buttonGroupDiv = document.getElementById("buttonGroup");

  if (overlaySearchDiv.style.display === "none") {
    overlaySearchDiv.style.display = "block";
    buttonGroupDiv.style.display = "none";
  } else {
    overlaySearchDiv.style.display = "none";
    buttonGroupDiv.style.display = "block";
  }
}
