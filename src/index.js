
function curPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat, lon);

  let apiKey = "5bd8dd5876af31be7dd1dd4666c7f2a5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(timeDate);
  console.log(apiUrl);

  let cityName = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = cityName;
}
navigator.geolocation.getCurrentPosition(curPosition);

let curLoc = document.querySelector(".curLoc");
curLoc.addEventListener("click", curPosition);


function citySearch(event) {
  event.preventDefault();
  let cityName = document.querySelector(".me-2");
  cityName = cityName.value

  let apiKey = "5bd8dd5876af31be7dd1dd4666c7f2a5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(timeDate);

}
let form = document.querySelector(".d-flex");
form.addEventListener("submit", citySearch);

function timeDate(response) {
    let date = new Date(response.data.dt * 1000);
    console.log(date)
    let curHours = date.getHours();
    if (curHours < 10) {
      curHours = `0${curHours}`;
    }
    let curMinutes = date.getMinutes();
    if (curMinutes < 10) {
      curMinutes = `0${curMinutes}`;
    }

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    
    let curDay = days[date.getDay()];
    console.log(curDay);
    let curDate = date.getDate();
    let curYear = date.getFullYear();
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let curMonth = month[date.getMonth()];
    
    let h1 = document.querySelector("h1");
    h1.innerHTML = response.data.name; 
    let dateNow = document.querySelector("#dateNow");
    dateNow.innerHTML = `${curDate} ${curMonth} ${curYear}`;
    let time = document.querySelector("#time");
    time.innerHTML = `${curHours}:${curMinutes}`;
    let weekDay = document.querySelector("#weekDay")
    weekDay.innerHTML = curDay;
    let tempCel = document.querySelector("#tempCel");
    tempCel.innerHTML = Math.round(response.data.main.temp);
    let emojiMain = document.querySelector("#emojiMain");
    emojiMain.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    emojiMain.setAttribute("alt", response.data.weather[0].description);
    let feelLike = document.querySelector("#feelLike");
    feelLike.innerHTML = Math.round(response.data.main.feels_like);
    console.log(response.data.main.feels_like)
    let main = document.querySelector("#main");
    main.innerHTML = response.data.weather[0].main;
    let wind = document.querySelector("#wind")
    wind.innerHTML = response.data.wind.speed;
    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = response.data.main.humidity;
    celsiusTemperature = response.data.main.temp;

  }

function changeFahrenheit(event) {
  event.preventDefault();
  let tempCel = document.querySelector("#tempCel");
  let tempFahr = Math.round((celsiusTemperature * 1.8) + 32);
  tempCel.innerHTML = tempFahr;
  let celsius = document.querySelector(".celsius");
  let fahrenheit = document.querySelector(".fahrenheit");
  celsius.innerHTML = `<span class="celsius"><a href="">C</a></span>`;
  fahrenheit.innerHTML = `<span class="fahrenheit"> F </span>`;
}
function changeCelsius(event) {
  event.preventDefault();
  let tempCel = document.querySelector("#tempCel");
  tempCel.innerHTML = Math.round(celsiusTemperature);
  let celsius = document.querySelector(".celsius");
  let fahrenheit = document.querySelector(".fahrenheit");
  celsius.innerHTML = `<span class="celsius">C</span>`;
  fahrenheit.innerHTML = `<span class="fahrenheit"><a href=""> F</a> </span>`;
}
let celsiusTemperature = null
let fahrenheitLink = document.querySelector(".fahrenheit");
fahrenheitLink.addEventListener("click", changeFahrenheit);
let celsiusLink = document.querySelector(".celsius");
celsiusLink.addEventListener("click", changeCelsius);