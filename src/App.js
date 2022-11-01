import './App.css';
import Weather from './companents/weather';
import { CityProvider } from './context/CityContext';

function App() {
  return (
    <div className="App">
      <CityProvider>
        <Weather></Weather>
      </CityProvider>
    </div>
  );
}

export default App;
