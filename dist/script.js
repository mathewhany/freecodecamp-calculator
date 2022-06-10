// The code below is just a piece of SHIT! I know I can have done it a lot better but I just wanted to complete this project without using React or Vue or any other libraries, just old jQuery, and it was a bad decision, so I just wanted to complete this project and move on :(

var displayCurr = $('#display-text #current');
var displayPrev = $('#display-text #prev');
var lastIsOperator = false;

$('.digit').click(function () {
  var digit = $(this).text();
  lastIsOperator = false;
  
  if (digit == '.' && displayCurr.text().indexOf('.') != -1) {
    return;
  } 
  
  if (displayCurr.text() == '0') {
    displayCurr.text(digit);
  } else {
    displayCurr.text(displayCurr.text() + digit);
  }
});

$('#clear').click(function () {
  displayCurr.text('0');
  displayPrev.text('');
});

$('.operation:not(#clear):not(#equals)').click(function () {
  if (displayCurr.text() != '0' && !lastIsOperator) {
    lastIsOperator = true;
    displayPrev.text(displayPrev.text() + displayCurr.text());
    displayCurr.text($(this).attr('value') || $(this).text());
  }
});

$('#equals').click(function () {
  displayCurr.text(eval(displayPrev.text() + displayCurr.text()));
  displayPrev.text('');
});