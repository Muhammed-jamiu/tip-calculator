//script.js
//hide the tip amount on screen
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("tip").style.display = "none";
//clicking the button to call a function.
document.getElementById("calculate").onclick = function () {
  calculateTip();
};
//fuction creation
function calculateTip() {
  //store the date of input
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;

  // var numPeople = document.getElementById("totalPeople").value;
}
//quick validation(if nothing is input on the space of the calculator)
if (billAmount === "" || serviceQuality === 0) {
  window.alert("please enter some value, to perform a task!!");
  // return;
}
//check to see if this input is empty or lessthan or eqaul to 1
if (numPeople === "" || numPeople <= 1) {
  numPeople = 1;
  document.getElementById("each").style.display = "none";
} else {
  document.getElementById("each").style.display = "block";
}
//do some math
var total = (billAmount * serviceQuality) / numPeople;
total = Math.round(total * 100) / 100;
total = total.toFixed(2);
//display the tip
document.getElementById("totalTip").style.display = "block";
document.getElementById("tip").innerHTML = "total";
