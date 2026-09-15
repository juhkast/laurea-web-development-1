// Find the first button
let button = document.querySelector("button");
// Add a listener to the button
button.addEventListener("click", function () {
  alert("Hello world!");
});

// Find the input field on the page
let input = document.querySelector("input");
// Add a listener
input.addEventListener("focus", function () {
  alert("You activated the field");
});
