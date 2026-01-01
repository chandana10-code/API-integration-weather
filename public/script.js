function getWeather() {
    const city = document.getElementById("city").value;

    fetch(`/weather/${city}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("result").innerHTML =
                `<p>City: ${data.name}</p>
                 <p>Temp: ${data.main.temp} °C</p>
                 <p>Weather: ${data.weather[0].description}</p>`;
        });
}
