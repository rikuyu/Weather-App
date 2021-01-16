import {
  WeatherState,
  WeatherAction,
  GET_WEATHER,
  SET_LOADING,
  SET_ERROR,
} from "../types";

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: false,
};

const weatherReducer = (
  state = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};
export default weatherReducer;
