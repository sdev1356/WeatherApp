import axios from "axios";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: "b8c6a7406ce9f2bd49ec4dec3a2f5708",
        units: "metric"
      }
    }
  );

  return response;
}

export default getWeatherAndForecast;