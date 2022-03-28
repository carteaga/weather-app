import { QueryClientProvider, QueryClient } from "react-query";
import { WeatherApp } from "./components/WeatherApp";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherApp />
    </QueryClientProvider>
  );
}
