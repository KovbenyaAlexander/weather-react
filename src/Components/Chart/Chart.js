import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { connect } from "react-redux";

function Chart({ weatherInfo }) {
  if (!weatherInfo) {
    return <p>Loading...</p>;
  }

  const currentTime = weatherInfo.current.last_updated;
  const currentHour = new Date(currentTime).getHours();

  const hoursInfo = weatherInfo.forecast.forecastday[1].hour;

  const data = [];

  hoursInfo.forEach((item) => {
    const hour = new Date(item.time).getHours();
    if (hour < currentHour) {
      data.push({
        name: hour,
        pastHours: item.temp_c,
        XAxis: hour,
      });
    }
    if (hour === currentHour) {
      data.push({
        name: hour,
        pastHours: item.temp_c,
        futureHours: item.temp_c,
        XAxis: hour,
      });
    }
    if (hour > currentHour) {
      data.push({
        name: hour,
        futureHours: item.temp_c,
        XAxis: hour,
      });
    }
  });

  return (
    <LineChart
      width={500}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="futureHours" stroke="green" />
      <Line type="monotone" dataKey="pastHours" stroke="grey" />
    </LineChart>
  );
}

const mapStateToProps = (state) => {
  return {
    weatherInfo: state.weatherInfo,
  };
};

export default connect(mapStateToProps)(Chart);
