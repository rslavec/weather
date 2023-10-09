import './index.css';
import CurrentWeather from './components/CurrentWeather';

function App() {
  return (
    <div className="text-center py-10">
      <h1 className="text-2xl py-5">Weather App</h1>
      <CurrentWeather />
    </div>
  );
}

export default App;
