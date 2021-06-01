import { connect } from "react-redux";
import { useEffect, useCallback } from "react";
import Form from "./Components/Form/Form";
import reverseGeocoding from "./redux/actions/thunk/reverseGeocoding";
import getWeatherInfoByCoords from "./redux/actions/thunk/getWeatherInfoByCoords";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";

function App({
  location,
  reverseGeocoding,
  isShowLoader,
  getWeatherInfoByCoords,
}) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      reverseGeocoding(data.coords.latitude, data.coords.longitude);
      getWeatherInfoByCoords(data.coords.latitude, data.coords.longitude);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">{location}</header>
      <p>{isShowLoader ? "Loading..." : null}</p>
      <hr />
      <Form />
      <WeatherContainer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    isShowLoader: state.isShowLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reverseGeocoding: (lat, lng) => dispatch(reverseGeocoding(lat, lng)),
    getWeatherInfoByCoords: (lat, lng) =>
      dispatch(getWeatherInfoByCoords(lat, lng)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
