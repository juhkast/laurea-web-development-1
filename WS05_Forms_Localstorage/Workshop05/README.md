# WS05: Animal forms and localStorage

Student starter for Web Development 1 Project 1.

## Start

1. Open this folder in VS Code.
2. Open `index.html` (English) or `index-fi.html` (Finnish) with Live Server.
3. Read the exercises on the page.
4. Complete the TODOs in `js/script.js`.

The forms and styling are provided. The JavaScript exercises are intentionally unfinished.
Both language versions share the same CSS, element IDs and JavaScript file.

## Exercises

1. Animal care form: values, validation and DOM feedback.
2. Fictional animal sponsorship calculator: annual fee × whole years, 20% discount for more than 2 years, then an extra €5 discount for 5 or more years.
3. Save one animal object under `ws05Animal` with `JSON.stringify()`.
4. Restore it with `JSON.parse()`, handle missing data and remove the saved animal.

Bonus: store an array of animals and delete individual entries.

## Manual checks

- Empty fields and whitespace-only values show an error.
- A care note longer than 150 characters shows an error.
- A valid animal appears on the page.
- Elephant sponsorship: 2 years = €20.00, 3 years = €24.00, 5 years = €35.00.
- Saving a new animal replaces the previous saved animal.
- Refreshing restores the saved details.
- Clearing removes only this workshop's `ws05Animal` entry.
- Loading with no saved animal shows a useful message.

## Storage reflection

localStorage persists across browser sessions. sessionStorage survives refreshes but ends with the tab's page session. Test sessionStorage with a separate key, `ws05SessionAnimal`, by closing the tab and reopening the page in a new tab.

## References

- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

## Suomeksi

Avaa `index-fi.html` Live Serverillä ja täydennä `js/script.js`-tiedoston TODO-kohdat. Tämä on vapaaehtoinen aloituspohja, ei valmis malliratkaisu. Hyödynnä harjoitusta Project 1:ssä.
