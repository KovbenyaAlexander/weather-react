import { connect } from "react-redux";

function WeatherContainer({ weatherInfo }) {
  console.log(weatherInfo);

  return <div>Weather</div>;
}

const mapStateToProps = (state) => {
  return {
    weatherInfo: state.weatherInfo,
  };
};

export default connect(mapStateToProps)(WeatherContainer);
