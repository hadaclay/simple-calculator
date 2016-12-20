$(document).ready(function() {
  $(".calc-button").on("click", handleButton);
});

// Add all button presses into array
var expression = [];

function handleButton() {
  var keyPressed = this.value;
  switch(keyPressed) {
    case "ac":
    case "ce":
      $("#calc-text").text("0");
      expression = [];
      break;
    case "=":
      // I know eval() is terrible but it works, gosh dang it
      var evaluated = eval(expression.join(''));
      $("#calc-text").text(evaluated);
      expression = [evaluated];
      break;
    default:
      expression.push(keyPressed);
      $("#calc-text").text(expression.join(''));
      break;
  }
}
