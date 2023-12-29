const getWeather = async (city) => {

    cityName.innerHTML = city
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1789958dc2mshdea829ebf710350p119525jsnbedbf75f50a5',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        // cloud_pct.innerHTML = result.cloud_pct
        temp.innerHTML = result.temp
        temp2.innerHTML = result.temp
        feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        humidity2.innerHTML = result.humidity
        min_temp.innerHTML = result.min_temp
        max_temp.innerHTML = result.max_temp
        wind_speed.innerHTML = result.wind_speed
        wind_speed2.innerHTML = result.wind_speed
        wind_degrees.innerHTML = result.wind_degrees
        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset
    } catch (error) {
        console.error(error);
    }
}



submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")


