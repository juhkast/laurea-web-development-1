// Haetaan kaupungin säätiedot AJAXilla.
function haeData(city) {
    const tulos = document.getElementById("weatherdata");
    city = city.trim();

    if (!city) {
        tulos.textContent = "Kirjoita kaupungin nimi.";
        return;
    }

    // LAITA TAHAN OMA API AVAIN, JONKA SAAT OPENWEATHERMAPIN SIVUILTA.
    const apiKey = "ff64c247a136f706923d1ee0d55d71e2";
    const url =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city)}` +
        `&units=metric&lang=fi&appid=${apiKey}`;

    tulos.textContent = "Haetaan säätietoja…";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);

    // Käsitellään palvelimen vastaus.
    xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {
            const json = JSON.parse(xmlhttp.responseText);
            console.log(json);
            naytaData(json);
        } else if (xmlhttp.status === 404) {
            tulos.textContent = "Kaupunkia ei löytynyt.";
        } else if (xmlhttp.status === 401) {
            tulos.textContent = "API-avain ei kelpaa. Tarkista avain.";
        } else {
            tulos.textContent =
                "Haku epäonnistui. Virhekoodi: " + xmlhttp.status;
        }
    };

    xmlhttp.onerror = function () {
        tulos.textContent =
            "Verkkovirhe. Tarkista Console-välilehti (F12).";
    };

    xmlhttp.send();
}

// Näytetään säätiedot sivulla.
function naytaData(json) {
    const rivit = `
        <table border="1">
            <tr>
                <th>Kaupunki</th>
                <th>Lämpötila</th>
                <th>Sää</th>
                <th>Kuvake</th>
            </tr>
            <tr>
                <td>${json.name}</td>
                <td>${json.main.temp} °C</td>
                <td>${json.weather[0].description}</td>
                <td>
                    <img
                        src="https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png"
                        alt="${json.weather[0].description}"
                    >
                </td>
            </tr>
        </table>
    `;

    document.getElementById("weatherdata").innerHTML = rivit;
}

// Haetaan Helsingin sää heti sivun avautuessa.
haeData("Helsinki");