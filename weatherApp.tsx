import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState(""); // this use state is to hold the variables for the city and set the variables for the cities
  const [weatherData, setWeatherData] = useState(null); // Holds the actual API for the weatrher APP
  const [error, setError] = useState(""); // Errors usestate variable and setter

  const apiKey = "c2ab6013faa84f20941413e94ef00069";
  // API key

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found");
      setWeatherData(null);
    }
  };

  return (
    <div>
      <img className="img" src="weather-image.jpg"></img>

      <input
        className="find"
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button className="clicks" onClick={fetchWeather}>
        Get Weather
      </button>

      {error && <p>{error}</p>}
      
      {weatherData && (
        <div className="container">
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>
            Temperature: {((weatherData.main.temp - 273.15) * 9) / 5 + 32} F
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
