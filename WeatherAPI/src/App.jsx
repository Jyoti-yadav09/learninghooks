import { useState } from "react";
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'aed01b48520506926c715c82c2a9d3d0'; 

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city');
      return;
    }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found');
      } else {
        setError('Something went wrong!');
      }
      setWeatherData(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">Weather App</h1>

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={fetchWeather}
          className="w-full p-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Get Weather
        </button>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

        {weatherData && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold">{weatherData.name}</h2>
            <p className="text-lg text-gray-600">{weatherData.weather[0].description}</p>
            <p className="text-xl font-semibold mt-2">
              Temperature: {weatherData.main.temp}°C
            </p>
            <p className="text-lg text-gray-600">Humidity: {weatherData.main.humidity}%</p>
            <p className="text-lg text-gray-600">Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
