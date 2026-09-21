// Select → Listen → Change the DOM

const changeHeadingButton =
    document.querySelector("#changeHeadingButton");

const taskOneHeading =
    document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Muokattu otsikko!";
});