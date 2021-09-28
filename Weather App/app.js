// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// 945001ba60ab5ebcd72b544e66864ef6

const weatherApi = {
    key : "945001ba60ab5ebcd72b544e66864ef6",
    baseURL : "https://api.openweathermap.org/data/2.5/weather"
}

// Event Listener Function On Keypress

const searchInputBox = document.getElementById('input-box-id');

searchInputBox.addEventListener('keypress', (event) => {
    if(event.keyCode == 13){
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
    }
});



// Get Weather Report

function getWeatherReport(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=945001ba60ab5ebcd72b544e66864ef6&units=metric`)
    .then(weather => {
        return weather.json();
    }).then((showWeatherReport));
}


// Show Weather Report

function showWeatherReport(weatherJson){
    console.log(weatherJson);

    let city = document.getElementById('city');
    city.innerText = `${weatherJson.name}, ${weatherJson.sys.country}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    let temp =  document.getElementById('temp');
    temp.innerHTML = `${Math.round(weatherJson.main.temp)}&deg;C`;


    let min_max =  document.getElementById('min-max');
    min_max.innerHTML = `${Math.round(weatherJson.main.temp_max)}&deg;C / ${Math.round(weatherJson.main.temp_min)}&deg;C`;

    let weather = document.getElementById('weather');
    weather.innerText = `${weatherJson.weather[0].main}`;
}

// To manage Date

function dateManage(dateArg){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let months = ["January", "February" , "March" , "April" , "June" , "July" , "August","September" , "October" , "November" , "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let day = days[dateArg.getDay()];
    let date = dateArg.getDate();

    return `${date} ${month} (${day}), ${year}`;
}








