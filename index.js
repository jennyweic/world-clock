// call this into a function to run every minute
function showCityClock() {
  //London city details
  let londonCityElement = document.querySelector("#london-city");
  let londonCityDateElement = londonCityElement.querySelector(".date");
  let londonCityTimeElement = londonCityElement.querySelector(".time");
  let londonCityTime = moment().tz("Europe/London");

  londonCityDateElement.innerHTML = londonCityTime.format("dddd Do MMMM YYYY");

  londonCityTimeElement.innerHTML = londonCityTime.format(
    "HH:mm [<span>]A[</span>]"
  );

  //Hong Kong city details
  let hongKongCityElement = document.querySelector("#hk-city");
  let hongKongCityDateElement = hongKongCityElement.querySelector(".date");
  let hongKongCityTimeElement = hongKongCityElement.querySelector(".time");
  let hongKongCityTime = moment().tz("Asia/Hong_Kong");

  hongKongCityDateElement.innerHTML =
    hongKongCityTime.format("dddd Do MMMM YYYY");

  hongKongCityTimeElement.innerHTML = hongKongCityTime.format(
    "HH:mm [<span>]A[</span>]"
  );

  //Portugal city details
  let portugalCityElement = document.querySelector("#portugal-city");
  let portugalCityDateElement = portugalCityElement.querySelector(".date");
  let portugalCityTimeElement = portugalCityElement.querySelector(".time");
  let portugalCityTime = moment().tz("Portugal");

  portugalCityDateElement.innerHTML =
    portugalCityTime.format("dddd Do MMMM YYYY");

  portugalCityTimeElement.innerHTML = portugalCityTime.format(
    "HH:mm [<span>]A[</span>]"
  );

  //Oslo city details
  let osloCityElement = document.querySelector("#oslo-city");
  let osloCityDateElement = osloCityElement.querySelector(".date");
  let osloCityTimeElement = osloCityElement.querySelector(".time");
  let osloCityTime = moment().tz("Europe/Oslo");

  osloCityDateElement.innerHTML = osloCityTime.format("dddd Do MMMM YYYY");

  osloCityTimeElement.innerHTML = osloCityTime.format(
    "HH:mm [<span>]A[</span>]"
  );
}
setInterval(showCityClock, 1000);

// create a function to update multiple locations
function updateCity(event) {
  event.preventDefault;
  let cityTimeZone = event.target.value;
  console.log(cityTimeZone);
  let cityTime = moment().tz("cityTimeZone");
  console.log(cityTime.format("dddd Do MMMM YYYY"));

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
<div class="individual-city" id="london-city">
  <div>
    <h2>${cityTimeZone}</h2>
    <div class="date">v${cityTime.format("dddd Do MMMM YYYY")}</div>
  </div>
    <div class="time"> ${cityTime.format("HH:mm")} 
      <span>${cityTime.format("A")}</span></div>
</div>

<div class="individual-city" id="hk-city">
    <div>
  <h2>Hong Kong 🇭🇰</h2>
  <div class="date">20 November 2023</div>
  </div>
  <div class="time">16:50 
    <span>PM</span></div>
</div>

<div class="individual-city" id="portugal-city">
    <div>
  <h2>Portugual 🇵🇹</h2>
  <div class="date">20 November 2023</div>
  </div>
  <div class="time">09:50 
    <span>AM</span></div>
</div>

<div class="individual-city" id="oslo-city">
    <div>
  <h2>Olso 🇳🇴</h2>
  <div class="date">20 November 2023</div>
  </div>
  <div class="time">10:50 
    <span>AM</span></div>
</div>


  `;
}

let citiesSelectElement = document.querySelector("#choose-city");
citiesSelectElement.addEventListener("change", updateCity);
