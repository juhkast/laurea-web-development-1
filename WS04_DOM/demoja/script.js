const form = document.querySelector("#nameForm");
const nameInput = document.querySelector("#name");
const errorMessage = document.querySelector("#errorMessage");
const nameList = document.querySelector("#nameList");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Remove the previous validation error
    nameInput.classList.remove("invalid");
    errorMessage.textContent = "";

    // VALIDATION: Remove unnecessary spaces
    const name = nameInput.value.trim();

    // VALIDATION: The name must contain at least 2 characters
    if (name.length < 2) {
        nameInput.classList.add("invalid");
        errorMessage.textContent =
            "The name must contain at least 2 characters.";
    // return stops the function to be executed
        return;
    }

    // Add the valid name to the list
    const listItem = document.createElement("li");
    listItem.textContent = name;
    nameList.appendChild(listItem);

    form.reset();
});