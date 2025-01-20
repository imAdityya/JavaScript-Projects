const apiKey = "f623ed99b21510f3d9ff4b8768871c64";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const error = document.querySelector(".error");
const weather = document.querySelector(".weather");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        error.style.display = "block";
        weather.style.display = "none";
    } else{
    
    var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.floor(data.wind.speed) + " km/h";
    document.querySelector("#cond").innerHTML = data.weather[0].main;
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    } 
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    error.style.display = "none";
    weather.style.display = "block";
}
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})


searchBox.addEventListener('keypress', (event)=>{
    if(event.key == "Enter"){
        event.preventDefault();
        
        searchBtn.click();
    }
})