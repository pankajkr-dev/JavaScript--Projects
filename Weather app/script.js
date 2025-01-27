const apiKey = "6fd788338db0d00ea92530997421f59c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;

async function checkWeatherData(city) {
    const response = await fetch(apiUrl + `&q=${city}`);
    const data = await response.json();
    console.log(data);
}

checkWeatherData("London");