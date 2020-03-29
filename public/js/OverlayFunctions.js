// Search Overlay --------------------------------------------------------------

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

// Pop-up Overlay --------------------------------------------------------------

function togglePopupExit() {
  let overlayPopupDiv = document.querySelector(".popupDiv");
  overlayPopupDiv.style.display = "none";
}

// Flight Data Overlay ---------------------------------------------------------

function toggleFlightDataExit() {
  let overlayFlightDataDiv = document.querySelector(".flightData_container");
  let buttonGroupDiv = document.getElementById("buttonGroup");

  overlayFlightDataDiv.style.display = "none";
  buttonGroupDiv.style.display = "block";
}
