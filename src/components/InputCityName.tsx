import React, { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "../store/actions/alertAction";
import { getWeather, setLoading } from "../store/actions/handleWeather";

interface SearchProps {
  title: string;
}

const InputCityName: FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState("");

  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCityName(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cityName.trim() === "") {
      return dispatch(setAlert("City is required!"));
    }

    dispatch(setLoading());
    dispatch(getWeather(cityName));
    setCityName("");
  };

  return (
    <div className="mb-3">
      <h1 className="text-white font-mono text-xl text-center mb-4 mt-3">
        {title}
      </h1>
      <form onSubmit={submitHandler} className="flex justify-center">
        <input
          type="text"
          placeholder="場所名をローマ字で入力 (Ex. tokyo)"
          className="mt-1 w-8/12 p-3 focus:outline-none focus:ring focus:border-blue-300 rounded-xl"
          value={cityName}
          onChange={changeHandler}
        />
        <button className="bg-red-300 hover:bg-red-400 py-1 px-4 text-white ml-1 rounded-xl">
          検索
        </button>
      </form>
    </div>
  );
};

export default InputCityName;
