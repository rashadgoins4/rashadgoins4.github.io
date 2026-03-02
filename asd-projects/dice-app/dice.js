$(document).ready(function () {
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", 50)
    .css("left", 50)
    .appendTo("#die");
});
function makeDot(top, left, elementID) {
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", top)
    .css("left", left)
    .appendTo(elementID);
}




function rollDie(dieId) {
  $(dieId).empty();
  
  var randomNum = Math.ceil(Math.random() * 6);
  console.log(randomNum);
 
  if (randomNum === 1) {
    makeDot(42.5, 42.5, "#die");
  } else if (randomNum === 2) {
    makeDot(17.5, 17.5, "#die");
    makeDot(67.5, 67.5, "#die");
  } else if (randomNum === 3) {
    makeDot(17.5, 17.5, "#die");
    makeDot(67.5, 67.5, "#die");
    makeDot(42.5, 42.5, "#die");
  } else if (randomNum === 4) {
    makeDot(67.5, 67.5, "#die");
    makeDot(17.5, 17.5, "#die");
    makeDot(17.5, 67.5, "#die");
    makeDot(67.5, 17.5, "#die");
  } else if (randomNum === 5) {
    makeDot(42.5, 42.5, "#die");
    makeDot(67.5, 67.5, "#die");
    makeDot(17.5, 17.5, "#die");
    makeDot(17.5, 67.5, "#die");
    makeDot(67.5, 17.5, "#die");
  } else if (randomNum === 6) {
    makeDot(67.5, 67.5, "#die");
    makeDot(17.5, 17.5, "#die");
    makeDot(17.5, 67.5, "#die");
    makeDot(67.5, 17.5, "#die");
    makeDot(42.5, 67.5, "#die");
    makeDot(42.5, 17.5, "#die");
  }
}
function handleClick() {
  rollDie("die");
}
$("#die").on("click", handleClick);
