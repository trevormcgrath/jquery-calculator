/*
TODO:
    - Limit number input
    - Disallow . from being entered multiple times
    - Fix the 'shake' from messing up in mobile
    - Fix the button shadows on clicks
    - Clean up structure
*/

$(document).ready(function() {

  var answer = 0; // the answer to be displayed
  var displayArray = []; //an array that displays current values
  var evalStorage = ""; // store array value here to run eval on it
  var displayMyNumbers = 0; // variable to reset display
  $('#displayArea').html(displayMyNumbers); // inital display of 0 before values are clicked on

  //updates the display area with the displayArray
  function displayUpdater() {
    if (displayArray.length === 0) {
      $('#displayArea').html(displayMyNumbers);
    } else {
      $('#displayArea').html(displayArray);
    }
  };

  //pushes button values into an array
  $('.btn').click(function() {
    var temp = $(this).html();

    // make sure first input is a number not an operator
    if ((displayArray.length === 0) && (temp === '+' || temp === '-' || temp === '*' || temp === '/')) {
      $('h1').effect("shake", {times: .5}, 150);
    } else if(displayArray.length === 11){
      $('h1').effect("shake", {times: .5}, 150);
    } else if ((temp === '+' || temp === '-' || temp === '*' || temp === '/') && (displayArray[displayArray.length - 1] === '+' || displayArray[displayArray.length - 1] === '-' || displayArray[displayArray.length - 1] === '*' || displayArray[displayArray.length - 1] === '/')) {
      displayArray.pop(); // So we can't push more than 2 operators next to each other in the array
      displayArray.push(temp); // switches them instead, in case user made a mistake & doesn't have to clear
    } else {
      displayArray.push(temp);
    }

    displayUpdater();
    console.log(displayArray);
  }); //end of value button function

  // when the AC button is clicked all values are rest to zero
  $('#clear').click(function() {
    displayMyNumbers = 0;
    displayArray = [];
    evalStorage = "";
    displayUpdater();
  }); //end of clearing function

  // the evaluation that is run when the = button is clicked
  $('#evaluate').click(function() {
    evalStorage = displayArray.join('');
    answer = eval(evalStorage);
    $('#displayArea').html(answer);
    displayArray = [];
    displayArray.push(answer);
    console.log(displayArray);
  });

}); //end of .ready