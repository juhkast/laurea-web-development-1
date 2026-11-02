// Fetch weather data for a city using AJAX.
function haeData(city) {
    const tulos = document.getElementById("weatherdata");
    city = city.trim();

    if (!city) {
        tulos.textContent = "Enter a city name.";
        return;
    }

    // Add your own API key here. You can get one from the OpenWeatherMap website.
    const apiKey = "ff64c247a136f706923d1ee0d55d71e2";
    const url =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city)}` +
        `&units=metric&lang=en&appid=${apiKey}`;

    tulos.textContent = "Loading weather data…";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);

    // Handle the server response.
    xmlhttp.onload = function () {
        if (xmlhttp.status === 200) {
            const json = JSON.parse(xmlhttp.responseText);
            console.log(json);
            naytaData(json);
        } else if (xmlhttp.status === 404) {
            tulos.textContent = "City not found.";
        } else if (xmlhttp.status === 401) {
            tulos.textContent = "The API key is invalid. Check your key.";
        } else {
            tulos.textContent =
                "Request failed. Error code: " + xmlhttp.status;
        }
    };

    xmlhttp.onerror = function () {
        tulos.textContent =
            "Network error. Check the Console tab (F12).";
    };

    xmlhttp.send();
}

// Display the weather data on the page.
function naytaData(json) {
    const rivit = `
        <table border="1">
            <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Weather</th>
                <th>Icon</th>
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

// Fetch the weather in Helsinki as soon as the page loads.
haeData("Helsinki");