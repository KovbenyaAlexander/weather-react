import { connect } from "react-redux";
import { useEffect } from "react";
import Form from "./Components/Form/Form";
import reverseGeocoding from "./redux/actions/thunk/reverseGeocoding";
import getWeatherInfo from "./redux/actions/thunk/getWeatherInfo";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";

function App({ location, reverseGeocoding, isShowLoader, getWeatherInfo }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      reverseGeocoding(data.coords.latitude, data.coords.longitude);
      getWeatherInfo(data.coords.latitude, data.coords.longitude);
    });
  }, [reverseGeocoding, getWeatherInfo]);

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
    getWeatherInfo: (lat, lng) => dispatch(getWeatherInfo(lat, lng)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
