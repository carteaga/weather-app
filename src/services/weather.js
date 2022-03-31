import { get, urlParamsToString } from './utils';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const KEY = process.env.REACT_APP_API_KEY;
const CODE_REQUEST_OK = 200;

export const mapWeather = (data) => {
  const { id, main = {}, weather: weathers = [], name, sys, coord } = data;

  const [weather] = weathers;
  const { icon, description } = weather || {};

  const { temp } = main;

  const { country } = sys;

  return {
    id,
    name,
    coord,
    country,
    description,
    temperature: temp,
    weatherIcon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
    flagIcon: `https://www.countryflagicons.com/FLAT/32/${country}.png`,
    coordLink: `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${coord.lat}&lon=${coord.lon}&zoom=12`,
  };
};

export const findWeather = async (city) => {
  const params = urlParamsToString({
    q: city,
    units: 'metric',
    lang: 'es',
    appid: KEY,
  });

  const data = await get(`${BASE_URL}/find?${params}`);

  if (Number(data.cod) !== CODE_REQUEST_OK) {
    throw Error(data.message);
  }

  const { list } = data;

  return list.map(mapWeather);
};
