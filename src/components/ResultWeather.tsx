import React, { FC } from "react";
import { WeatherData } from "../store/types";

interface WeatherProps {
  data: WeatherData;
}

const ResultWeather: FC<WeatherProps> = ({ data }) => {
  const celsius = (data.main.temp - 273.15).toFixed(2);
  console.log(data);
  return (
    <div>
      <div className="container flex flex-col items-center py-8 mb-20">
        <h1 className="text-white font-mono text-4xl ">
          {data.name} in {data.sys.country}
        </h1>

        <p className="text-white font-mono text-3xl ">
          天気：{data.weather[0].description}
        </p>
        <p>
          <img
            className="w-32 h-32 justify-center"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
            alt="weather-img"
          />
        </p>

        <p className="text-white font-mono text-2xl ">気温：{celsius} ℃</p>

        <p className="text-white font-mono text-2xl ">
          湿度：{data.main.humidity} %
        </p>

        <p className="text-white font-mono text-2xl ">
          気圧：{data.main.pressure}
        </p>
        <p></p>

        <p className="text-white font-mono text-2xl ">
          風速：{data.wind.speed} m/s
        </p>
      </div>
    </div>
  );
};

export default ResultWeather;
