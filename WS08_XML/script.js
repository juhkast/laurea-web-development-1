// Store your OpenWeatherMap API key.
const apiKey = "ff64c247a136f706923d1ee0d55d71e2";

// Find the HTML element where we display the weather data.
const weatherdata = document.querySelector("#weatherdata");


// Run this function when the user clicks the "Fetch data" button.
// async allows us to use await inside the function.
document.querySelector("#fetchWeather").addEventListener("click", async function () {

     // Display a loading message.
    weatherdata.textContent = "Loading weather data...";

    // Try to fetch and process the weather data.
    try {

        // Send a GET request to the weather API and wait for the response.
        // q=Helsinki selects the city.
        // units=metric gives the temperature in Celsius.
        // mode=xml requests the data in XML format.
        // ${apiKey} inserts our API key into the URL.
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=xml&appid=${apiKey}`
        );

        // Check whether the API returned a successful HTTP status.
        if (!response.ok) {
         // Create an error and jump to the catch block.
         throw new Error(`HTTP error: ${response.status}`);
        }

        // Read the response body as text and wait until it is ready.
        const xmlText = await response.text();

        // Display the XML as plain text on the page.
        weatherdata.textContent = xmlText;

    // Handle errors from the request or the code above.
    } catch (error) {

        // Choose an error message in the page's language.
        const message = isEnglish
            ? "Failed to fetch weather data: "
            : "Säätietojen haku epäonnistui: ";

        // Display the message and details of the error.
        weatherdata.textContent = message + error.message;
    }
});