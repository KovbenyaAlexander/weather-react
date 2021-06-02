import { connect } from "react-redux";
import { useEffect } from "react";
import Form from "./Components/Form/Form";
import getWeatherInfo from "./redux/actions/thunk/getWeatherInfo";
import { setCoordsForCity } from "./redux/actions/actions";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";
import Map from "./Components/Map/Map";

function App({ isShowLoader, getWeatherInfo, setCoordsForCity }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      setCoordsForCity(data.coords.latitude, data.coords.longitude);
      getWeatherInfo();
    });
  }, []);

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
    setCoordsForCity: (lat, lng) => dispatch(setCoordsForCity(lat, lng)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
