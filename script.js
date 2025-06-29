const apiKey = 'https://openweathermap.org/api'; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const weatherBox = document.getElementById('weather');
  const errorMsg = document.getElementById('errorMsg');

  if (!city) {
    errorMsg.textContent = 'Please enter a city name.';
    weatherBox.classList.add('hidden');
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    document.getElementById('cityName').textContent = data.name;
    document.getElementById('temp').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('condition').textContent = `Condition: ${data.weather[0].description}`;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherBox.classList.remove('hidden');
    errorMsg.textContent = '';
  } catch (error) {
    errorMsg.textContent = 'City not found. Please try again.';
    weatherBox.classList.add('hidden');
  }
}
