// MUOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN
// MUOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN

const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu!");

});

// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// listener for the select element from the drop down list.

animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

      // function to update the DOM based on the selected animal

      console.log("selected animal:", selectedAnimal);

      if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tämä on tiikeri";
        animalDescription.textContent = "Tiikerit ovat raidallisia ja melko rauhallisia eläimiä";

      }
})

// listener for the select element from the drop down list.
// function to update the DOM based on the selected animal

// -------------------------------------------------- EXAMPLE 4 CSS
// -------------------------------------------------- EXAMPLE 4 CSS

const heading = document.querySelector("#taskOneHeading");
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    heading.classList.toggle("highlight");
});