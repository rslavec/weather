export default class GeocodingApi {
  init = () => {
    this.api_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    this.api_url = 'http://api.openweathermap.org/geo/1.0';
  }

  getCitiesByName = async (cityName, limit) => {
    const data = await fetch(`${this.api_url}/direct?q=${cityName}&limit=${limit}&appid=${this.api_key}`)
    .then((res) => res.json())
    .then((data) => data);

    return data;
  };
}