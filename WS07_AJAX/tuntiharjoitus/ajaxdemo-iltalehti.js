// Luodaan ajax olio
var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET","https://www.iltalehti.fi/rss/uutiset.xml",true);
xmlhttp.open("GET", "./uutiset.xml", true);
xmlhttp.send();

// Luodaan vastauksen käsittelijä
xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
        // console.log(xmlhttp.responseXML)
        // Otetaan vastaus talteen
        let xmldoc = xmlhttp.responseXML

        // Aletaan parsimaan
        // Kaivetaan item-tägit esiin
        let uutiset = xmldoc.querySelectorAll('item')
        let rivit = '<table border="1">'
        // Käydään jokainen item-läpi
        for (let i=0; i < uutiset.length; i++){
            let otsikko = uutiset[i].querySelector('title').innerHTML
            let pvm = uutiset[i].querySelector('pubDate').innerHTML
            let link = uutiset[i].querySelector('link').innerHTML
            //console.log(otsikko, pvm)
            // Luodaan silmukan jokaisella kierroksella uusi rivi
              rivit += `<tr>
                            <td><a target='_blank' href='${link}'>${otsikko}</a></td>
                            <td>${pvm}</td>
                         </tr>`
            
        } // for
        // Suljetaan taulukko-tägi
        rivit += '</table>'
        // Korvaa sivun nykyisen sisällön rivit-muuttujan sisällöllä
        document.body.innerHTML = rivit
      
        
  }
}

