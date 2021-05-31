import axios from "axios";
import { set_user_location, hide_loader, show_loader } from "../actions";

const reverseGeocoding = (lat, lng) => {
  const URL = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=99ecf60eb3944fd69770b5c974614a6a&language=en`;

  return (dispatch) => {
    dispatch(show_loader());
    axios.get(URL).then((resp) => {
      const location =
        resp.data.results[0].components.city ||
        resp.data.results[0].components.town ||
        resp.data.results[0].components.village ||
        resp.data.results[0].components.county ||
        resp.data.results[0].components.state;

      dispatch(set_user_location(location));
      dispatch(hide_loader());
    });
  };
};

export default reverseGeocoding;
