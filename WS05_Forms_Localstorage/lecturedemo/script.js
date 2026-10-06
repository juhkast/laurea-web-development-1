// Haetaan sivun elementit.
// Select the elements on the page.
const tallennaBtn = document.getElementById("tallennaBtn");
const haeBtn = document.getElementById("haeBtn");
const tulos = document.getElementById("tulos");

// Tallennetaan tervehdys selaimen localStorageen.
// Save a greeting in the browser's localStorage.
function tallenna() {
    // Avain on "tervehdys" ja arvo on tallennettava teksti.
    // The key is "tervehdys" and the value is the text to save.
    localStorage.setItem("tervehdys", "Hei maailma! / Hello world!");

    // Näytetään käyttäjälle vahvistus tallennuksesta.
    // Show a confirmation message to the user.
    tulos.textContent =
        "Tallennettu! Päivitä sivu ja paina Hae. / " +
        "Saved! Refresh the page and click Load.";
}

// Haetaan tallennettu tervehdys.
// Load the saved greeting.
function hae() {
    // Haetaan tieto samalla avaimella, jolla se tallennettiin.
    // Retrieve the data using the same key used when saving.
    const data = localStorage.getItem("tervehdys");

    // Jos avainta ei löydy, getItem() palauttaa null.
    // If the key does not exist, getItem() returns null.
    if (data === null) {
        tulos.textContent =
            "Ei vielä tallennettua tietoa. / No saved data yet.";
    } else {
        // Näytetään tallennettu teksti sivulla.
        // Display the saved text on the page.
        tulos.textContent = data;
    }
}

// Liitetään funktiot painikkeiden klikkauksiin.
// Connect the functions to the buttons' click events.
tallennaBtn.addEventListener("click", tallenna);
haeBtn.addEventListener("click", hae);