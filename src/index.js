function nowCurr() {
  let now = new Date();
  let date = now.getDate();
  let year = now.getFullYear();
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
  let curMonth = month[now.getMonth()];

  let dateNow1 = document.querySelector("span#dateNow");
  dateNow1.innerHTML = `${date} ${curMonth} ${year}`;
  let dateNow2 = document.querySelector("#dateNow");
  dateNow2.innerHTML = `${date} ${curMonth} ${year}`;
}
nowCurr();

function timeCurr() {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let time = document.querySelector("#time");
  if (min < 10) {
    time.innerHTML = `${hour}:0${min}`;
  } else {
    time.innerHTML = `${hour}:${min}`;
  }
}
timeCurr();

function weekDayCurr() {
  let now = new Date();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = week[now.getDay()];

  let weekDate = document.querySelector("#weekDay");
  weekDate.innerHTML = `${day}`;
}
weekDayCurr();

function search(event) {
  event.preventDefault();
  let searchCurr = document.querySelector(".me-2");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchCurr.value}`;
  
  function weather(response) {
    let temperature = response.data.main.temp;
    temperature = Math.round(temperature);
    console.log(temperature);
    let tempCel = document.querySelector("#tempCel");
    console.log(tempCel);
    tempCel.innerHTML = `<span id="tempCel">${temperature}</span>`;
  }
  let apiKey = "5bd8dd5876af31be7dd1dd4666c7f2a5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCurr.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(weather);

}
let searchCity = document.querySelector(".d-flex");
searchCity.addEventListener("submit", search);


function showPosition(position) {
  console.log(position);
  let lat = position.coords.latitude;
  console.log(lat);
  let lon = position.coords.longitude;
  console.log(lon);


  function weather(response) {
    let temperature = response.data.main.temp;
    temperature = Math.round(temperature);
    console.log(temperature);
    let tempCel = document.querySelector("#tempCel");
    console.log(tempCel);
    tempCel.innerHTML = `<span id="tempCel">${temperature}</span>`;
  }
  let apiKey = "5bd8dd5876af31be7dd1dd4666c7f2a5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(weather);

  function cityCur(response) {
    let cityCur = response.data[0].name;
    console.log(cityCur);
    let h1 = document.querySelector("h1");
    h1.innerHTML = `<h1>${cityCur}`;
  }
  let apiUrl1 = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  console.log(apiUrl1);
  axios.get(`${apiUrl1}`).then(cityCur);
}
navigator.geolocation.getCurrentPosition(showPosition);
let curLoc = document.querySelector(".curLoc");
curLoc.addEventListener("click", showPosition);
console.log();