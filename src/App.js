import { connect } from "react-redux";
import { useEffect } from "react";
import Form from "./Components/Form/Form";
import getWeatherInfo from "./redux/actions/thunk/getWeatherInfo";
import {
  setCoordsForCity,
  setGeolocationStatus,
} from "./redux/actions/actions";
import WeatherContainer from "./Components/WeatherContainer/WeatherContainer";
import Map from "./Components/Map/Map";
import Chart from "./Components/Chart/Chart";
import "./index.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App({
  isShowLoader,
  getWeatherInfo,
  setCoordsForCity,
  setGeolocationStatus,
  iaGeoLocationAllowed,
}) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        setCoordsForCity(data.coords.latitude, data.coords.longitude);
        getWeatherInfo();
        setGeolocationStatus(true);
      },
      () => {
        setGeolocationStatus(false);
      }
    );
  }, []);

  return (
    <div className="App">
      <Header />
      <p>{isShowLoader ? "Loading..." : null}</p>
      {iaGeoLocationAllowed ? "allow" : "deny"}
      <section className="weatherInfo-wrapper">
        <Form />
        <WeatherContainer />
        <Map />
        <Chart />
      </section>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isShowLoader: state.isShowLoader,
    iaGeoLocationAllowed: state.iaGeoLocationAllowed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherInfo: (lat, lng) => dispatch(getWeatherInfo(lat, lng)),
    setCoordsForCity: (lat, lng) => dispatch(setCoordsForCity(lat, lng)),
    setGeolocationStatus: (status) => dispatch(setGeolocationStatus(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
