import * as React from "react";
import "./Weather.css";

export const Weather = (props) => {
  const {
    coord,
    coordLink,
    country,
    description,
    flagIcon,
    name,
    temperature,
    weatherIcon
  } = props;

  return (
    <div className="weather">
      <img alt={country} title={country} src={flagIcon} />
      <p className="weather__city">
        {name} - {description}
      </p>
      <div className="weather__info">
        <span className="weather__temp">{temperature}°</span>
        <img alt="weather" src={weatherIcon} className="weather__icon" />
      </div>
      <a href={coordLink} target="blank">
        [{coord.lat}, {coord.lon}]
      </a>
    </div>
  );
};
