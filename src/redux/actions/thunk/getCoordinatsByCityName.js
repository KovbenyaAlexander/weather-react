import axios from "axios";
import { setCoordsForCity, hide_loader, show_loader } from "../actions";

const getCoordinatsByCityName = (searchText) => {
  const URL = `https://api.opencagedata.com/geocode/v1/json?q=${searchText}&key=99ecf60eb3944fd69770b5c974614a6a`;

  return (dispatch) => {
    dispatch(show_loader());

    axios.get(URL).then((resp) => {
      if (resp.data.results.length === 0) {
        alert(`results not found`); //TODO: MAKE MODAL WINDOW WITH ERROR
      } else {
        const lat = resp.data.results[0].geometry.lat;
        const lng = resp.data.results[0].geometry.lng;

        dispatch(setCoordsForCity(lat, lng));
      }

      dispatch(hide_loader());
    });
  };
};

export default getCoordinatsByCityName;
