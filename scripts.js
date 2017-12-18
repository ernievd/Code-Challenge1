console.log('JS loaded');

// When the DOM is loaded, our code in the onReady function will run.
$(document).ready(function(){

  $('#generateButton').on('click', Main);

});

function Main() {
  $('#generateButton').append("<div></div>");
} // END: Main
