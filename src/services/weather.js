const BASE_URL = "https://api.openweathermap.org/data/2.5";
const KEY = process.env.REACT_APP_API_KEY;
const CODE_REQUEST_OK = 200;

const get = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

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
    coordLink: `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=${coord.lat}&lon=${coord.lon}&zoom=12`
  };
};

export const getWeather = async (city) => {
  const data = await get(
    `${BASE_URL}/weather?q=${city}&units=metric&lang=es&appid=${KEY}`
  );

  if (data.cod !== CODE_REQUEST_OK) {
    throw Error(data.message);
  }

  return mapWeather(data);
};

export const findWeather = async (city) => {
  if (!city) return [];

  const data = await get(
    `${BASE_URL}/find?q=${city}&units=metric&lang=es&appid=${KEY}`
  );

  if (Number(data.cod) !== CODE_REQUEST_OK) {
    throw Error(data.message);
  }

  const { list } = data;

  return list.map(mapWeather);
};
