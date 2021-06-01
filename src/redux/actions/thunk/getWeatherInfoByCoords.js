import axios from "axios";
import { setWeather } from "../actions";
import { hide_loader, show_loader } from "../actions";

const getWeatherInfoByCoords = (lat, lng) => {
  return (dispatch) => {
    dispatch(show_loader());
    const URL = `https://api.weatherapi.com/v1/forecast.json?key=0faa504995bd4273abe171804200407&q=${lat},${lng}&days=3`;
    axios.get(URL).then((resp) => {
      const weatherData = resp.data;
      dispatch(setWeather(weatherData));
      dispatch(hide_loader());
    });
  };
};

export default getWeatherInfoByCoords;
