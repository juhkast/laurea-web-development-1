// 1. When the user clicks a button, show a message about the elephant.

const animalButton = document.querySelector("#animalButton");

animalButton.addEventListener("click", function() {
    alert("Elephants are the largest land animals on Earth!");
});

// click = event
// addEventListener = listen for the event
// function = what happens after the event

// 2. ID HTML defines the page. The browser creates the DOM, and JavaScript can use the DOM to read and change the page.
const animalTitle = document.querySelector("#animalTitle");

animalTitle.addEventListener("click", function() {
    animalTitle.textContent = "My Favourite Animal is the Blue Elephant!";
    animalTitle.style.color = "blue";
});


// 3. MOUSEOVER

const animalImage = document.querySelector("img");

animalImage.addEventListener("mouseover", function() {
    animalImage.style.border = "5px solid blue";
   
    
});

animalImage.addEventListener("mouseout", function() {
    animalImage.style.border = "none";
    console.log("Mouse is out of the image!");
} );


// 4. Input event. The input event happens every time the value changes.

const animalInput = document.querySelector("#animalInput");
const animalOutput = document.querySelector("#animalOutput");

animalInput.addEventListener("input", function () {
    animalOutput.textContent = animalInput.value;
});

// then print on console when the input is focused and when it loses focus
animalInput.addEventListener("focus", function () {
    console.log("Input focused");
});

animalInput.addEventListener("blur", function () {
    console.log("Input lost focus");
});


// 6. Form + submit + preventDefault()
// preventDefault stops the browser’s normal form submission, so JavaScript can handle it instead.

const animalForm = document.querySelector("#animalForm");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    animalOutput.textContent = "Your favorite animal is: " + animalInput.value;
    console.log("Form submitted with animal: " + animalInput.value);

});

// 7. key down demonstration

document.addEventListener("keydown", function (event) {
    console.log("Key pressed: " + event.key);
    console.log("Key code: " + event.code);
});