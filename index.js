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
}
setInterval(showCityClock, 1000);
