import axios from "axios";
import { setWeather } from "../actions";
import { hide_loader, show_loader } from "../actions";

const getWeatherInfo = (lat, lng) => {
  return (dispatch, getState) => {
    let URL = "";

    if (lat && lng) {
      URL = `https://api.weatherapi.com/v1/forecast.json?key=0faa504995bd4273abe171804200407&q=${lat},${lng}&days=3`;
    } else {
      const cityName = getState().searchText;
      URL = `https://api.weatherapi.com/v1/forecast.json?key=0faa504995bd4273abe171804200407&q=${cityName}&days=3`;
    }

    dispatch(show_loader());

    axios.get(URL).then((resp) => {
      const weatherData = resp.data;

      dispatch(setWeather(weatherData));
      dispatch(hide_loader());
    });
  };
};

export default getWeatherInfo;
