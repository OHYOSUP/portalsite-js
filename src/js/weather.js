function onGeook(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "ca7fb2c8e705371bcbeef2f10782538d";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const name = data.name;
      const weather = data.weather[0].main;
      const weatherContainer = document.getElementById("weather");
      const temp = document.getElementById("temp");
      const weatherCondition = document.getElementById("weatherCondition");
      const city = document.getElementById("city");
      weatherCondition.innerText = name;
      temp.innerText = `${Math.floor(data.main.temp - 273.15)}℃`;
      city.innerText = weather;
    });
}

function onGeoError() {
  alert("날씨를 찾을 수 없습니다");
}

navigator.geolocation.getCurrentPosition(onGeook, onGeoError);
