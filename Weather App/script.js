const userInput = document.querySelector('#cityName')
const submitBtn = document.querySelector('.btn')
const cityName = document.querySelector('#location')
const temp = document.querySelector('#temperature')
const humidity = document.querySelector('#humidity')
const wind = document.querySelector('#wind')
const weatherImg = document.querySelector('#weatherImage')
const weather = document.querySelector('#weather')
const weatherCard = document.querySelector('#weatherCard')

// Api Key
const apiKey = "0eb5d5d0b6722c6268094c8ff160c359"
// const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const getWeather = (userInput) => {
    if (userInput.trim() === '') {
        alert('Please enter a city name');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=metric`) // api for the get request
    .then(response => response.json())
    .then(data => {
        console.log(data)
        cityName.innerHTML = data.name
        temp.innerHTML = Math.round(data.main.temp)+'&deg;C'
        humidity.innerHTML = data.main.humidity
        wind.innerHTML = data.wind.speed
        weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        weather.innerHTML = data.weather[0].main
        weatherCard.style.display = "block"
    })
    .catch(error => {
        console.log(error)
        alert('Error: Unable to fetch weather details')
    })
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault()
    getWeather(userInput.value)

})

// userInput.addEventListener('keyup', (e) => {
//     if (e.keyCode === 13) {
//         button.click()
//     }
// })






