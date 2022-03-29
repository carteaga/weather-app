import { useQuery } from "react-query";
import { findWeather } from "../services/weather";

export const useWeather = (city) => {
  const normalizedCity = city.trim().toLowerCase();

  const { isLoading, error, data, isFetching, isSuccess } = useQuery(
    ["weathers", normalizedCity],
    () => findWeather(normalizedCity),
    {
      enabled: !!normalizedCity,
    }
  );

  return { data, isLoading, isFetching, isSuccess, error };
};
