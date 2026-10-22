// lisätään eventlistener, joka kuuntelee, kun sivu on latautunut
document.addEventListener('DOMContentLoaded', () => {
    // haetaan elementti, jonka id on Quotes
    const quoteContainer = document.getElementById('Quotes');
    // määritellään uri, joka on osoite, josta haetaan dataa
    const uri = "https://dummyjson.com/quotes"
    // haetaan dataa uri:sta fetch-metodilla, joka palauttaa promisen ja käsitellään se
    fetch(uri)
        .then(response => response.json())
        .then(data => {
            // kutsutaan displayCustomerInfo-funktiota, joka käsittelee datan ja tulostaa sen sivulle
            displayCustomerInfo(data);
        })
        // jos tulee virhe, tulostetaan se konsoliin
        .catch(error => {
            console.error('Error fetching customer data:', error);
        });
    // määritellään displayCustomerInfo-funktio, joka käsittelee datan ja tulostaa sen sivulle
    function displayCustomerInfo(quoteData) {
        // käydään läpi quoteData-objektin quotes-taulukko ja tulostetaan jokainen quote ja sen author  
        console.log(quoteData);
        for (let i = 0; i < quoteData.quotes.length; i++) {
            const id = quoteData.quotes[i].author;
            const quote = quoteData.quotes[i].quote;
            // luodaan div-elementti, joka sisältää quote- ja id-tiedot ja lisätään se quoteContainer-elementtiin
            const quoteElement = document.createElement('div');
            quoteElement.innerHTML = `<h2> ${quote} </h2> <p> ${id} </p><hr>`;
            quoteContainer.appendChild(quoteElement);
        };
    }
});
