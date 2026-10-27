// Add an event listener that waits for the page to finish loading.
document.addEventListener('DOMContentLoaded', () => {
    // Find the element whose id is Quotes.
    const quoteContainer = document.getElementById('Quotes');
    // Set the URI to the address from which the data will be fetched.
    const uri = "https://dummyjson.com/quotes"
    // Fetch data from the URI and handle the promise returned by fetch().
    fetch(uri)
        .then(response => response.json())
        .then(data => {
            // Call displayCustomerInfo() to process the data and display it on the page.
            displayCustomerInfo(data);
        })
        // If an error occurs, print it to the console.
        .catch(error => {
            console.error('Error fetching customer data:', error);
        });
    // Define displayCustomerInfo() to process the data and display it on the page.
    function displayCustomerInfo(quoteData) {
        // Loop through the quotes array and display each quote and its author.
        console.log(quoteData);
        for (let i = 0; i < quoteData.quotes.length; i++) {
            const id = quoteData.quotes[i].author;
            const quote = quoteData.quotes[i].quote;
            // Create a div containing the quote and author, then add it to quoteContainer.
            const quoteElement = document.createElement('div');
            quoteElement.innerHTML = `<h2> ${quote} </h2> <p> ${id} </p><hr>`;
            quoteContainer.appendChild(quoteElement);
        };
    }
});
