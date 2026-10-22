// Haetaan sivun elementit.
// Select the elements on the page.
const tallennaBtn = document.getElementById("tallennaBtn");
const haeBtn = document.getElementById("haeBtn");
const tulos = document.getElementById("tulos");

// Tallennetaan funktioon tervehdys selaimen localStorageen.
// Save a function greeting in the browser's localStorage.

function tallennaTervehdys() {

    // Avain on "tervehdys" ja arvo on tallennettava teksti.
    // The key is "tervehdys" and the value is the text to save.

    localStorage.setItem("tervehdys", "Hei, tervetuloa! / Hello, welcome!");

    // Näytetään käyttäjälle vahvistus tallennuksesta.
    // Show a confirmation message to the user.
    tulos.textContent = "Tervehdys tallennettu! / Greeting saved!";

}
// Haetaan tallennettu tervehdys.
// Load the saved greeting.

function haeTervehdys() {
    const data = localStorage.getItem("tervehdys");


    // Haetaan tieto samalla avaimella, jolla se tallennettiin.
    // Retrieve the data using the same key used when saving.

    if (data === null) {
        tulos.textContent = "No saved data yet.";

    // Jos avainta ei löydy, getItem() palauttaa null.
    // If the key does not exist, getItem() returns null.


        // Näytetään tallennettu teksti sivulla.
        // Display the saved text on the page.
    } else {
        tulos.textContent = data;
    }
}
// Liitetään funktiot painikkeiden klikkauksiin.
// Connect the functions to the buttons' click events.

tallennaBtn.addEventListener("click", tallennaTervehdys);
haeBtn.addEventListener("click", haeTervehdys);