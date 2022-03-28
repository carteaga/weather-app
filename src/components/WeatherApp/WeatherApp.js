// components
import { WeatherList, WeatherListSkeleton } from "../WeatherList";

// Hooks
import { useWeather, useInput, useDebounce } from "../../hooks";

// styles
import "./WeatherApp.css";

const DELAY_INPUT_MS = 500;

export const WeatherApp = () => {
  const city = useInput("");
  const debounceCity = useDebounce(city.value, DELAY_INPUT_MS);
  const { data, loading } = useWeather({ city: debounceCity });
  const hasCity = debounceCity.length > 0;
  const hasResults = data && data.length > 0;

  return (
    <div className="weather-app">
      <div className="weather-app__container">
        <input
          placeholder="Ingresa una localidad"
          className="weather-app__location"
          type="text"
          {...city}
        />
        {loading && <WeatherListSkeleton />}
        {hasCity && !hasResults && !loading && (
          <p>Ops! No se han encontrado resultados.</p>
        )}
        {hasResults && !loading && <WeatherList data={data} />}
      </div>
    </div>
  );
};
