console.log('JS loaded');
var clicks = 0;
// When the DOM is loaded, our code in the onReady function will run.
$(document).ready(function(){

  $('#generateButton').on('click', Main);
  $('#mainBody').on('click', 'swapButton' , doToggle(event));

});

function Main() {
  // $('#dataTableBody').on('click', '.deleteButton', RemoveRow);
  $('#mainBody').append("<div class=divClass id=divId> </div>");
  clicks++;
  $('#divId').append("<p id=p1></p>");
  $('#p1').text(clicks);

  $('#divId').append("<button type=\"button\" id=\"swapButton\">Swap</button>");
  $('#divId').append("<button type=\"button\" id=\"deleteButton\">Delete</button>");
} // END: Main

function doToggle(event) {
    $(event).css("background-color", "yellow");

    //$(this).toggleClass('');
} // END: doToggle
