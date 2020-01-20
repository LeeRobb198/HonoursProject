/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
  document.getElementById("dropdownCountries").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, option, i;
  input = document.getElementById("countriesInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("dropdownCountries");
  option = div.getElementsByTagName("option");
  for (i = 0; i < option.length; i++) {
    txtValue = option[i].textContent || option[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      option[i].style.display = "";
    } else {
      option[i].style.display = "none";
    }
  }
}
