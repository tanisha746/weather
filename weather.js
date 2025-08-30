const apiKey = '02c89cf4213e42f912e4e5944d5348c7'; // Replace with your actual API key

document.getElementById('search-btn').onclick = async function () {
    const city = document.getElementById('city-input').value;
    if (!city) return alert('Please enter a city name');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
            console.log(data.weather)
            document.getElementById('city-name').textContent = data.name;
            document.getElementById('temperature').textContent = `${data.main.temp}°C`;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
            document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            document.getElementById('weather-info').style.display = 'block';
        }
        else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        alert('Error fetching weather data.');
    }
};