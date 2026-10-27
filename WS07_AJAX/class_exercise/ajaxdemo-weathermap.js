// The HTML page must contain a <div id="weatherdata"></div> element.
const tulos = document.getElementById("weatherdata");

var xmlhttp = new XMLHttpRequest();

xmlhttp.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&lang=en&appid=ff64c247a136f706923d1ee0d55d71e2",
    true
);

// Define the handlers before sending the request.
xmlhttp.onload = function () {
    if (xmlhttp.status !== 200) {
        tulos.textContent =
            "Request failed: " + xmlhttp.status +
            " – " + xmlhttp.responseText;
        return;
    }

    let json = JSON.parse(xmlhttp.responseText);
    console.log(json);

    let rivit = `
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

    tulos.innerHTML = rivit;
};

xmlhttp.onerror = function () {
    tulos.textContent =
        "Network error. Check the browser's Console tab (F12).";
};

xmlhttp.send();