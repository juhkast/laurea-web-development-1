// 1. When the user clicks a button, show a message about the elephant.

const animalButton = document.querySelector("#animalButton");

animalButton.addEventListener("click", function () {
    
    console.log("Button clicked!");
    animalTable.hidden = !animalTable.hidden;


    
});

// click = event
// addEventListener = listen for the event
// function = what happens after the event

// 2. ID HTML defines the page. The browser creates the DOM, and JavaScript can use the DOM to read and change the page.

const animalTitle = document.getElementById("animalTitle");

animalTitle.addEventListener("click", function () {
    animalTitle.textContent = "The Blue Elephant";
    animalTitle.style.color = "blue";
});

// 3. MOUSEOVER

const animalImage = document.querySelector("img");

animalImage.addEventListener("mouseover", function () {
    animalImage.style.border = "5px solid blue";
    console.log("Mouse is over the elephant!");
});

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
    event.preventDefault();

    animalOutput.textContent =
        "Your favourite animal is " + animalInput.value;
});

// 7. key down demonstration

document.addEventListener("keydown", function (event) {
    console.log("Key pressed: " + event.key);
     console.log("Code:", event.code);
});