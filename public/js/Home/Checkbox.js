/* -------------------------------------------------------------------------- */
/* Checkbox JS -------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

function updateSliders(val) {
  // Min Slider
  document.getElementById("minSlider").value = 0;
  var minOutput = document.getElementById("minValue");
  minOutput.innerHTML = 0;

  // Max Slider
  document.getElementById("maxSlider").value = 40000;
  var maxOutput = document.getElementById("maxValue");
  maxOutput.innerHTML = 40000;
}
