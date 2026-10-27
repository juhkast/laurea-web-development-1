// Create an XMLHttpRequest object.
var xmlhttp = new XMLHttpRequest();
// Example request for the live news feed:
// xmlhttp.open("GET", "https://www.iltalehti.fi/rss/uutiset.xml", true);
xmlhttp.open("GET", "./uutiset.xml", true);
xmlhttp.send();

// Handle the response.
xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
        // console.log(xmlhttp.responseXML)
        // Store the response.
        let xmldoc = xmlhttp.responseXML

        // Start parsing the response.
        // Find all item elements.
        let uutiset = xmldoc.querySelectorAll('item')
        let rivit = '<table border="1">'
        // Loop through each item.
        for (let i=0; i < uutiset.length; i++){
            let otsikko = uutiset[i].querySelector('title').innerHTML
            let pvm = uutiset[i].querySelector('pubDate').innerHTML
            let link = uutiset[i].querySelector('link').innerHTML
            // console.log(otsikko, pvm)
            // Create a new table row on each iteration.
              rivit += `<tr>
                            <td><a target='_blank' href='${link}'>${otsikko}</a></td>
                            <td>${pvm}</td>
                         </tr>`
            
        } // End of the for loop.
        // Close the table element.
        rivit += '</table>'
        // Replace the page's current content with the contents of rivit.
        document.body.innerHTML = rivit
      
        
  }
}
