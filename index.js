// call this into a function to run every minute
function showCityClock() {
  //London city details
  let londonCityElement = document.querySelector("#london-city");
  let londonCityDateElement = londonCityElement.querySelector(".date");
  let londonCityTimeElement = londonCityElement.querySelector(".time");
  let londonCityTime = moment().tz("Europe / London");

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
  let portugalCityTime = moment().tz("Asia/Hong_Kong");

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
