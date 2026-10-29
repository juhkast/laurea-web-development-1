const apiKey = "OMA_API_AVAIN"; // Korvaa käytössäsi olevalla avaimella.
const weatherdata = document.getElementById("weatherdata");

document.getElementById("fetchWeather").addEventListener("click", async function () {
    weatherdata.textContent = "Haetaan säätietoja...";

    try {
        // fetch lähettää pyynnön API:lle.
        // await odottaa vastausta, joka tallennetaan response-muuttujaan.
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=xml&appid=${apiKey}`
        );

        // Tarkistetaan, onnistuiko pyyntö.
        // Jos ei, siirrytään catch-lohkoon käsittelemään virhe.
        if (!response.ok) {
            throw new Error(`HTTP-virhe: ${response.status}`);
        }
        // KORVAA NÄMÄ KAKSI RIVIÄ XML:n käsittelyllä, esim. DOMParserin avulla.
        // const xmlText = await response.text();
        // weatherdata.textContent = xmlText;
        // Luetaan vastauksen sisältö XML-tekstinä.

        const xmlText = await response.text();

// Muutetaan XML-teksti dokumentiksi, josta voidaan hakea tietoja.
const xml = new DOMParser().parseFromString(xmlText, "application/xml");

// Poimitaan elementtien value-attribuutit.
const temperature = xml.querySelector("temperature").getAttribute("value");
// const humidity = xml.querySelector("humidity").getAttribute("value");
// const clouds = xml.querySelector("clouds").getAttribute("value");


// Näytetään tiedot sivulla.
// Lisää tähän tarvittavat rivit, jotta näytetään myös kosteus ja pilvisyys.
weatherdata.textContent =
    `Helsinki: lämpötila ${temperature} °C`;


    } catch (error) {
        weatherdata.textContent = "Säätietojen haku epäonnistui: " + error.message;
    }
});