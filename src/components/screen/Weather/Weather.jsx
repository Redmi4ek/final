import React, { useState} from 'react';
import { Link } from 'react-router-dom';

const api = {
  key: "04f562fba0dc54cb85a3583b1a929353",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
   * Search button is pressed. Make a fetch call to the Open Weather Map API.
   */
  const searchPressed = async () => {
    try {
      const response = await fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`);
      const result = await response.json();
      setWeather(result);
    } catch (error) {
      console.error(error); // Handle errors gracefully (optional)
    }
  };

  return (
    <div className="weather-container">
      <Link className='flex justify-center align-middle text-white' to="/" >Todo</Link>
      <h2 className="flex justify-center align-middle text-white">Weather App</h2>

      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-gray-300 rounded-md p-2 w-full md:w-1/2"
        />
        <button onClick={searchPressed} className="bg-blue-500 text-white p-2 rounded-md mt-2">Search</button>
      </div>

      {typeof weather.main !== "undefined" ? (
        <div className="flex flex-col items-center mt-4">
          <p className="text-2xl font-bold text-white">{weather.name}</p>
          <p className="text-xl mt-2 text-white">{weather.main.temp}°C</p>
          <p className="text-lg mt-2 text-white">{weather.weather[0].main}</p>
          <p className="text-md mt-2 text-white">({weather.weather[0].description})</p>
        </div>
      ) : (
        <p className="text-center mt-4 text-white">Enter a city to see the weather.</p>
      )}
    </div>
  );
}

export default Weather;