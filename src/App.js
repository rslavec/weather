import './index.css';
import SearchCities from './components/SearchCities';
import CurrentWeather from './components/CurrentWeather';

function App() {
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl py-5">Weather App</h1>
      <div className="py-5">
        <SearchCities />
      </div>
      <div className="py-5">
        <CurrentWeather />
      </div>
    </div>
  );
}

export default App;
