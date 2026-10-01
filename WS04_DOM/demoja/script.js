//Haetaan HTML stä tarvittavat elementit ja luodaan muuttujat. Hakee lomakkeen jonka id on nameForm.

const form = document.querySelector("#nameForm"); // hakee form elementin jonka id on nameForm
const nameInput = document.querySelector("#name"); // hakee input elementin jonka id on name
const errorMessage = document.querySelector("#errorMessage"); // hakee span elementin jonka id on errorMessage
const nameList = document.querySelector("#nameList");   // hakee ul elementin jonka id on nameList


form.addEventListener("submit", function (event) { // Lisää tapahtumankuuntelijan lomakkeelle, joka kuuntelee "submit" tapahtumaa. Kun lomake lähetetään, suoritetaan annettu funktio.
    event.preventDefault(); // Estää lomakkeen oletustoiminnon, joka olisi sivun uudelleenlataus.

    // Remove the previous validation error
    nameInput.classList.remove("invalid"); // Poistaa css luokan "invalid" input elementistä.
    errorMessage.textContent = ""; // tyhjentää virheilmoituksen tekstin.

    // VALIDATION: Remove unnecessary spaces
    const name = nameInput.value.trim(); // poistaa input elementin arvosta ylimääräiset välilyönnit alusta ja lopusta.

    // VALIDATION: The name must contain at least 2 characters
    if (name.length < 2) {
        nameInput.classList.add("invalid"); // Lisää css luokan "invalid" input elementtiin, jos nimi on liian lyhyt.
        errorMessage.textContent = "The name must contain at least 2 characters."; // Asettaa virheilmoituksen tekstiksi, jos nimi on liian lyhyt.
    // return stops the function to be executed. Virheellistä nimeä ei lisätä listaan.
        return;
    }

    // jos validointi menee läpi, luodaan uusi list item ja lisätään se listaan.

    // Add the valid name to the list
    const listItem = document.createElement("li"); // Luo uuden list item elementin.
    listItem.textContent = name;    // Asettaa list itemin tekstiksi syötetyn nimen.
    nameList.appendChild(listItem); // Lisää uuden list itemin ul elementtiin.

    // Tyhjennetään input kenttä ja virheilmoitus, jotta käyttäjä voi syöttää uuden nimen.
    form.reset();
}); 