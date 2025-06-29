# ☁️ Weather App

A simple, responsive weather web application built using **HTML**, **CSS**, and **JavaScript** that fetches real-time weather data from the **OpenWeatherMap API**.  
Users can search for any city and view the current temperature, weather condition, and icon.

---

## 🌟 Features

- ✅ Search weather by **city name**
- ✅ Display:
  - City Name
  - Temperature (°C)
  - Weather Condition
  - Weather Icon
- ✅ Handles invalid or empty inputs
- ✅ Fully responsive design
- ✅ Clean and modern UI
- ✅ Fetches data from OpenWeatherMap API

---

## 🧱 Technologies Used

- **HTML5** – Structure and layout  
- **CSS3** – Styling and responsiveness  
- **JavaScript (Vanilla)** – Fetch API and DOM manipulation  
- **OpenWeatherMap API** – For live weather data

---

## 🔐 Prerequisite

You need a **free API key** from [OpenWeatherMap](https://openweathermap.org/api):

1. Sign up and log in
2. Navigate to your API keys
3. Copy the key and paste it in the `script.js` file:
   ```js
   const apiKey = 'YOUR_API_KEY';

---

## 📁 Folder Structure

weather-app/

├── index.html       // UI layout

├── style.css        // Styling and responsiveness

└── script.js        // JavaScript logic and API integration

---

## 💡 Example Usage
Enter a city like "London" or "New York"

Click Search

The app will display:

City: London

Temperature: 18 °C

Condition: clear sky

Icon: ☀️

---

## 📸 Screenshot

![O1](https://github.com/user-attachments/assets/a0cee461-830a-4905-a6e0-b8c12f43cdf8)
![O2](https://github.com/user-attachments/assets/d191d44b-3c94-4e6e-a202-c4a855a2bc93)

---

## 🧪 Error Handling
If the city is not found, it shows a friendly error message

If the input is empty, it prompts the user to enter a city name

---

## 📃 License
This project is licensed under the MIT License.

---

## 🙌 Acknowledgements
OpenWeatherMap API

Developed as part of a weather web app task to demonstrate API integration and frontend development skills
