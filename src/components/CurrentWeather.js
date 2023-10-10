import { useEffect, useState } from "react";
import WeatherApi from "../services/WeatherApi";

function CurrentWeather() {
  const api = new WeatherApi();

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const [location, setLocation] = useState();
  const [temperatures, setTemperatures] = useState();
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
      if ((typeof latitude === 'number') && (typeof latitude === 'number')) {
        currentWeatherData();
      }
    }
    fetchData();
  }, [latitude, longitude])

  async function currentWeatherData() {
    api.init();
    const data = await api.getCurrentWeatherFromCoordinates(latitude, longitude);

    setLocation({ 
      name: data.name,
      country: data.sys.country
    });
    
    setTemperatures({
      temperature: Math.round(data.main.temp - 273.15)
    })

    const iconCode = data.weather[0].icon;
    const iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
    setWeather({
      description: data.weather[0].main,
      icon: iconUrl
    })
  }

  return (
    <div>
      <h2 className="text-xl">Current weather</h2>
      {location !== undefined ? (
        <div>
          {location.name} ({location.country})
        </div>
      ) : null}
      {temperatures !== undefined ? (
        <div>
          {temperatures.temperature}°C
        </div>
      ) : null}
      {weather !== undefined ? (
        <div className="flex justify-center items-center">
          <span>{weather.description}</span>
          <img src={weather.icon} alt="Weather icon" />
        </div>
      ) : null}
    </div>
  );
}

export default CurrentWeather;