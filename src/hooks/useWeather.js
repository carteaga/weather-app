import { useQuery } from "react-query";
import { findWeather } from "../services/weather";

export const useWeather = ({ city }) => {
  const { isFetching, error, data } = useQuery(
    ["weathers", city],
    () => findWeather(city),
    {
      initialData: [],
      enabled: !!city
    }
  );

  return { data, loading: isFetching, error };
};
