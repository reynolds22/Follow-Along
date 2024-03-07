const apiKey = "5f403f01f3ef08df297c9d97efb80085";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " mph";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./IMG/Clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./IMG/Clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./IMG/Raining.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./IMG/Drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./IMG/Mist.png";
        }
        else if(data.weather[0].main == "Thunderstorm"){
            weatherIcon.src = "./IMG/Thunder.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "./IMG/Snow.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});
