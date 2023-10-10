export default class WeatherApi {
  init = () => {
    this.api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    this.api_url = 'https://api.openweathermap.org/data/2.5';
  }

  getCurrentWeatherFromCoordinates = async (latitude, longitude) => {
    const data = await fetch(`${this.api_url}/weather?lat=${latitude}&lon=${longitude}&APPID=${this.api_key}`)
    .then((res) => res.json())
    .then((data) => data);

    return data;
  };
}