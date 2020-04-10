/* -------------------------------------------------------------------------- */
/* Select Menu JS ----------------------------------------------------------- */
/* -------------------------------------------------------------------------- */

// var x, i, j, selElmnt, a, b, c;
// /* Look for any elements with the class "custom-select": */
// x = document.getElementsByClassName("dropdownCountries");
// for (i = 0; i < x.length; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   /* For each element, create a new DIV that will act as the selected item: */
//   a = document.createElement("DIV");
//   a.setAttribute("class", "country-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   /* For each element, create a new DIV that will contain the option list: */
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < selElmnt.length; j++) {
//     /* For each option in the original select element,
//     create a new DIV that will act as an option item: */
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function(e) {
//         /* When an item is clicked, update the original select box,
//         and the selected item: */
//         var y, i, k, s, h;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < s.length; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             for (k = 0; k < y.length; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             break;
//           }
//         }
//         h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function(e) {
//     /* When the select box is clicked, close any other select boxes,
//     and open/close the current select box: */
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }
//
// function closeAllSelect(elmnt) {
//   /* A function that will close all select boxes in the document,
//   except the current select box: */
//   var x, y, i, arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   for (i = 0; i < y.length; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i)
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < x.length; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }

// /* If the user clicks anywhere outside the select box,
// then close all select boxes: */
// document.addEventListener("click", closeAllSelect);







// -----------------------------------------------------------------------------
// Dropdown JS -----------------------------------------------------------------
// -----------------------------------------------------------------------------

// Variables
var allDropdowns, selectElement, newDivSelected, newDivOptionList, newDivOptionItem;

// Index
var i, j,

// All dropdowns in the app with class currencyDropdown
allDropdowns = document.getElementsByClassName("dropdownCountries");

for (i = 0; i < allDropdowns.length; i++) { // Start outer for statement
  selectElement = allDropdowns[i].getElementsByTagName("select")[0];

  // For each element create new div. Act as the selected item
  newDivSelected = document.createElement("DIV");
  newDivSelected.setAttribute("class", "country-selected");
  newDivSelected.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
  allDropdowns[i].appendChild(newDivSelected);

  // For each element create new div. Will contain the option list
  newDivOptionList = document.createElement("DIV");
  newDivOptionList.setAttribute("class", "country-items select-hide");

  for (j = 1; j < selectElement.length; j++) { // Start centre for statement

    // For each option in the original select element create new div. Will act as an option item
    newDivOptionItem = document.createElement("DIV");
    newDivOptionItem.innerHTML = selectElement.options[j].innerHTML;

    // When item clicked update the original select box and selected item
    newDivOptionItem.addEventListener("click", function(e) {

      // Variables
      var sameSelected, select, previousSibling;
      // Index
      var i, k,

      select = this.parentNode.parentNode.getElementsByTagName("select")[0];
      previousSibling = this.parentNode.previousSibling;

      for (i = 0; i < select.length; i++) { // Start inner for statement
        if (select.options[i].innerHTML == this.innerHTML) {
          select.selectedIndex = i;
          previousSibling.innerHTML = this.innerHTML;
          sameSelected = this.parentNode.getElementsByClassName("same-as-selected");
          for (k = 0; k < sameSelected.length; k++) {
            sameSelected[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      } // End inner for statement
      previousSibling.click();
    }); // End on click
    newDivOptionList.appendChild(newDivOptionItem);
  } // End centre for statement

  allDropdowns[i].appendChild(newDivOptionList);
  newDivSelected.addEventListener("click", function(e) {
    // When select box is clicked close any other select boxes and open/close the current select box
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("arrow-active");
  });
} // End outer for statement

// Function to close all select boxes in document except current select box
function closeAllSelect(element) {

  // Variables
  var currencyOptions, currencySelected
  var selectBoxesToClose = [];

  // Index
  var i;

  currencyOptions = document.getElementsByClassName("country-items");
  currencySelected = document.getElementsByClassName("country-selected");
  for (i = 0; i < currencySelected.length; i++) {
    if (element == currencySelected[i]) {
      selectBoxesToClose.push(i)
    } else {
      currencySelected[i].classList.remove("arrow-active");
    }
  }
  for (i = 0; i < currencyOptions.length; i++) {
    if (selectBoxesToClose.indexOf(i)) {
      currencyOptions[i].classList.add("select-hide");
    }
  }
}

// Click outside the select box closes all select boxes
document.addEventListener("click", closeAllSelect);
