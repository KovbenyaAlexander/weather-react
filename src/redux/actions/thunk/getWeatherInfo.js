import axios from "axios";
import { setWeather } from "../actions";
import { hide_loader, show_loader } from "../actions";

/*

Weather search by city name is not used because the accuracy is very poor.
There is no information on many small towns.

To solve this problem i use getting coordinates by city name.
From the coordinates i get the weather.

*/

const getWeatherInfo = () => {
  return (dispatch, getState) => {
    dispatch(show_loader());

    const state = getState();
    const searchText = state.searchText;
    let lat;
    let lng;

    if (!searchText) {
      lat = state.coords.lat;
      lng = state.coords.lng;
      getWeatherDataByCoords();
      dispatch(hide_loader());
      return;
    }

    const URL = `https://api.opencagedata.com/geocode/v1/json?q=${searchText}&key=99ecf60eb3944fd69770b5c974614a6a`;

    axios.get(URL).then((resp) => {
      const data = resp.data.results;

      if (data.length === 0) {
        alert("Data non found!"); // TODO: Create a message wich contains the error
        return;
      }

      lat = data[0].geometry.lat;
      lng = data[0].geometry.lng;

      getWeatherDataByCoords();
    });

    dispatch(hide_loader());

    function getWeatherDataByCoords() {
      // TODO: Add try/catch
      dispatch(show_loader());
      const URL = `https://api.weatherapi.com/v1/forecast.json?key=0faa504995bd4273abe171804200407&q=${lat},${lng}&days=3`;
      axios.get(URL).then((resp) => {
        const weatherData = resp.data;

        dispatch(setWeather(weatherData));
        dispatch(hide_loader());
      });
    }
  };
};

export default getWeatherInfo;
