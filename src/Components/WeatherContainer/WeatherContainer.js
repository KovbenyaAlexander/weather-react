import { connect } from "react-redux";

function WeatherContainer({ weatherInfo }) {
  console.log(weatherInfo);

  if (!weatherInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      Weather
      <hr />
      {weatherInfo ? weatherInfo.location.country : null}
      {weatherInfo ? weatherInfo.location.name : null}
      {weatherInfo ? weatherInfo.location.country : null}
      {weatherInfo ? weatherInfo.location.region : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weatherInfo: state.weatherInfo,
  };
};

export default connect(mapStateToProps)(WeatherContainer);