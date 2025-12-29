import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/WeatherContext";
const Weather = () => {
  const { city } = useContext(WeatherContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;
    async function getWeather() {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fabef624953a95dca455b2cbae9f99b4&units=metric`
        );

        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    }
    getWeather();
  }, [city]);

  if (error) return <p>Error : {error}</p>;

  return (
    <>
      <div>Weather</div>
      <table border="2" cellPadding={2}>
        <thead>
          <tr>
            <th>City</th>
            <th>🌡️</th>
            <th>☁️</th>
            <th>💧</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data?.name}</td>
            <td>{data?.main.temp}</td>
            <td>{data?.clouds.all}</td>
            <td>{data?.main.humidity}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Weather;
