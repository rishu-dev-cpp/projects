const button = document.getElementById('search-btn');
let myKey = "";
const weatherInfo = document.querySelector('.weather-info');


button.addEventListener('click', async () => {
    
    if(!myKey || myKey.trim() === ""){
        myKey = prompt("Please! Paste your API key to get weather ☀️🌧️");
        
        if(!myKey){
            alert("Bro, without API you can't get Data 🥲");
            return;
        }
    }
    
    const input = document.getElementById('city-input');
    let cityName = input.value.trim().toLowerCase();

    if(cityName === ""){
        alert("Bro! Enter city name first 🥲");
        return;
    }
    
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}&units=metric`;

    try {
        const response = await fetch(weatherUrl);
        
        if(!response.ok){
            alert("Sorry! Didn't get the DATA. Check city spelling!");
            return;
        }

        const data = await response.json();
        
        const mainWeather = data.weather[0].main;

        let weatherEmoji = "";

        switch(mainWeather){
            case "Clear":
                weatherEmoji = "☀️"; // Sun for clear sky
                break;
            case "Clouds":
                weatherEmoji = "☁️"; // Cloud
                break;
            case "Rain":
            case "Drizzle":
                weatherEmoji = "🌧️"; // Rain cloud
                break;
            case "Thunderstorm":
                weatherEmoji = "⛈️"; // Lightning and rain
                break;
            case "Haze":
            case "Mist":
            case "Smoke":
            case "Fog":
                weatherEmoji = "🌫️"; // Foggy/Haze
                break;
            case "Snow":
                weatherEmoji = "❄️"; // Snowflake
                break;
            default:
                weatherEmoji = "🌍"; // Default global
        }

        weatherInfo.innerHTML = 
        `

        <h2 id="city-name">${data.name}, ${data.sys.country}</h2>

        <h1 id="temp">${weatherEmoji} ${Math.round(data.main.temp)}°C</h1>

        <p id="description">${data.weather[0].main.toUpperCase()}</p>
        
        <div class="extra-details">
            <p>Humidity: <span id="humidity">${data.main.humidity}%</span></p>

            <p>Wind: <span id="wind">${data.wind.speed} km/h</span></p>
        </div>
        `;


    } catch (error) {
        console.error("Error occured:", error);
    }

    input.value = "";
});
