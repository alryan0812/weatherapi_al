const weather_element = document.getElementById("weather");
const temperature_main_element = document.getElementById("temperature-main");   
const weather_description_element = document.getElementById("weather-description");
const weather_icon_element = document.getElementById("weather-icon");
const temperature_element = document.getElementById("temperature");
const humidity_element = document.getElementById("humidity");
const wind_speed_element = document.getElementById("wind-speed");
const country_element = document.getElementById("country");
const tonw_element = document.getElementById("town");


var city = "Melbourne";

const apiKey = "19ee0b3d1757c66f140a8e46f706bd10";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assets/images/cloud.png";
    }
    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "assets/images/clear.png";
    }
    if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assets/images/rain.png";
    }
    if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "assets/images/drizzle.png";

    }if(data.weather[0].main == "Mist"){
        weatherIcon.src = "assets/images/mist.png";
    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});