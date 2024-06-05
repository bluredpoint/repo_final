let buttonTwo = document.querySelector('.btn2');

function getWeather() {
fetch('https://api.openweathermap.org/data/2.5/weather?q=Tomsk&lang=ru&appid=c37610323e6001d78ebd0a2e6f1bbbd5')

.then (function (resp) {return resp.json()})
.then (function(data) {
    console.log(data)
    document.querySelector('.city-name').innerHTML = data.name
    document.querySelector('.temp').textContent = Math.round((data.main.temp - 273))
    document.querySelector('.weather').textContent = data.weather[0].description
    document.querySelector('.icon').innerHTML = `<image src = https://api.openweathermap.org/img/w/${data.weather[0].icon}>`

    document.querySelector('.humidity').textContent = `Влажность - ${data.main.humidity}`
    document.querySelector('.wind').textContent = `Скорость ветра - ${data.wind.speed}`
    document.querySelector('.country').textContent = `Страна - ${data.sys.country}`
    const sunriseDate = data.sys.sunrise
    const sunsetDate = data.sys.sunset
    document.querySelector('.sunrise').textContent = `Восход - ${new Date(sunriseDate)}`
    document.querySelector('.sunset').textContent = `Закат - ${new Date(sunsetDate)}`
})
};
buttonTwo.onclick = getWeather;
