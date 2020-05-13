/******************************************************************
Driver code to display the Routine objects defined in routine-object.js

*****************************************************************/




// general function to get element and change content
function display(id, content) {
    var el = document.getElementById(id);
    el.textContent = content;
}