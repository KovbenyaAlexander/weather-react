import { connect } from "react-redux";
import { useEffect } from "react";
import Form from "./Components/Form/Form";
import getWeatherInfo from "./redux/actions/thunk/getWeatherInfo";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";
import Map from "./Components/Map/Map";

function App({ reverseGeocoding, isShowLoader, getWeatherInfo }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      getWeatherInfo(data.coords.latitude, data.coords.longitude);
    });
  }, [reverseGeocoding, getWeatherInfo]);

  return (
    <div className="App">
      <p>{isShowLoader ? "Loading..." : null}</p>
      <hr />
      <Form />
      <WeatherContainer />
      <Map />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isShowLoader: state.isShowLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherInfo: (lat, lng) => dispatch(getWeatherInfo(lat, lng)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
