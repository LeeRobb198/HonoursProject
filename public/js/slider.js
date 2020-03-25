// Min Slider

var minSlider = document.getElementById("minSlider");
var minOutput = document.getElementById("minValue");
minOutput.innerHTML = minSlider.value;

minSlider.oninput = function() {
  minOutput.innerHTML = this.value;
}

// Max Slider

var maxSlider = document.getElementById("maxSlider");
var maxOutput = document.getElementById("maxValue");
maxOutput.innerHTML = maxSlider.value;

maxSlider.oninput = function() {
  maxOutput.innerHTML = this.value;
}
