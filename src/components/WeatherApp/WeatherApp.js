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
  const { data, isLoading, isSuccess } = useWeather(debounceCity);
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
        {isLoading && <WeatherListSkeleton />}
        {!hasResults && isSuccess && (
          <p>Ops! No se han encontrado resultados.</p>
        )}
        {hasResults && <WeatherList data={data} />}
      </div>
    </div>
  );
};
