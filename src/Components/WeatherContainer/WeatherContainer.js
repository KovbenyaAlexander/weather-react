import { connect } from "react-redux";

function WeatherContainer({ weatherInfo }) {
  // console.log(weatherInfo);

  if (!weatherInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div className="weather-container">
      <hr />
      {weatherInfo ? weatherInfo.location.country : null}
      <br />
      {weatherInfo ? weatherInfo.location.name : null}
      <br />
      {weatherInfo ? weatherInfo.location.country : null}
      <br />
      {weatherInfo ? weatherInfo.location.region : null}
      <br />
      <hr />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weatherInfo: state.weatherInfo,
  };
};

export default connect(mapStateToProps)(WeatherContainer);
