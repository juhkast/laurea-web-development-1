// Store your OpenWeatherMap API key.


// Find the HTML element where we display the weather data.


// Run this function when the user clicks the "Fetch data" button.
// async allows us to use await inside the function.


     // Display a loading message.
   

    // Try to fetch and process the weather data.
  

        // Send a GET request to the weather API and wait for the response.
        // q=Helsinki selects the city.
        // units=metric gives the temperature in Celsius.
        // mode=xml requests the data in XML format.
        // ${apiKey} inserts our API key into the URL.
      

        // Check whether the API returned a successful HTTP status.
        
         // Create an error and jump to the catch block.
        

        // Read the response body as text and wait until it is ready.
        

        // Display the XML as plain text on the page.
       

    // Handle errors from the request or the code above.
  

        // Choose an error message in the page's language.
   

        // Display the message and details of the error.
  
