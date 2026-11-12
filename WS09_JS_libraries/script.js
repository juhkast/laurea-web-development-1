const apiKey = "ff64c247a136f706923d1ee0d55d71e2"; // <-- Lisää oma API-avain tähän
let tempChart = null; // globaali kaavioviite
let chartData = {}; // tallennetaan data ja labels uudelleenkäyttöä varten
let City = "Helsinki";

async function haeSaa() {
  city = document.getElementById("kaupunki").value;
  let url = ` https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=fi&appid=${apiKey}`;
  try {
    const response = await axios.get(url);
    const data = response.data.list;
    console.log(data);
    // Poimitaan joka 3. tunti mitattu lämpötila ja aika
    const labels = data.slice(0, 12).map((item) => {
      const aika = new Date(item.dt_txt);
      return `${aika.getDate()}.${aika.getHours()}:00`;
    });

    const temperatures = data.slice(0, 12).map((item) => item.main.temp);
    chartData = { labels, temperatures }; // tallennetaan uudelleenkäyttöä varten
    console.log(temperatures);
    piirraKaavio(labels, temperatures, city, "line");
  } catch (error) {
    console.error("Virhe datan haussa:", error);
    alert(
      "Säädatan hakeminen epäonnistui. Tarkista kaupungin nimi tai API-avain."
    );
  }
}

// Ladataan heti alkuun Helsingin sää
haeSaa();
function piirraKaavio(labels, data, city, type) {
  const ctx = document.getElementById("tempChart").getContext("2d");

  // Jos vanha kaavio on olemassa, tuhotaan se ensin
  if (window.tempChart && typeof window.tempChart.destroy === "function") {
    window.tempChart.destroy();
  }

  // Luodaan uusi kaavio
  window.tempChart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: `Lämpötila (${city}) °C`,
          data: data,
          borderWidth: 2,
          borderColor: "rgb(75, 192, 192)",
          fill: false,
          tension: 0.3,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
        },
      },
    },
  });
}

function paivitaKaavio() {
  // Haetaan valittu kaavion tyyppi select-elementistä
  let type = document.getElementById("chartType").value;
  console.log(type);
  // Tarkistetaan, että meillä on aiemmin haettua dataa
  // Piirretään kaavio uudelleen valitulla tyypillä
  piirraKaavio(chartData.labels, chartData.temperatures, city, type);
}
