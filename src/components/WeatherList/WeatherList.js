import PropTypes from 'prop-types';

// Components
import { Weather } from '../Weather';
import './WeatherList.css';

export const WeatherList = (props) => {
  const { data = [] } = props;

  return (
    <div className="weather-list">
      {data.map((weather) => (
        <Weather {...weather} key={weather.id} />
      ))}
    </div>
  );
};

WeatherList.propTypes = {
  data: PropTypes.array,
};
