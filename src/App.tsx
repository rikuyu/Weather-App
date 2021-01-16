import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import InputCityName from "./components/InputCityName";
import ErrorMsg from "./components/ErrorMsg";
import ResultWeather from "./components/ResultWeather";

const App: FC = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);
  const loading = useSelector((state: RootState) => state.weather.loading);
  const error = useSelector((state: RootState) => state.weather.error);

  console.log("loading:" + loading);
  console.log("error:" + error);

  return (
    <div className="mx-auto">
      <h1 className="text-white font-mono text-3xl text-center mt-10">
        天気取得アプリ
      </h1>
      <InputCityName title="今の天気を調べる場所の名前を入力" />
      <div className="container mx-auto">
        {loading ? (
          <h2 className="text-white font-mono text-2xl text-center my-5">
            天気情報取得中...
          </h2>
        ) : (
          weatherData && <ResultWeather data={weatherData} />
        )}
        {error && <ErrorMsg />}
      </div>
    </div>
  );
};

export default App;
