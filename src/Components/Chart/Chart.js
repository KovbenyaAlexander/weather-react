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

  const data = weatherInfo.forecast.forecastday[1].hour.map((item, i) => {
    const hour = new Date(item.time).getHours();
    return {
      hour: hour,
      temperature: item.temp_c,
    };
  });

  // const data = [
  //   { name: "Page A", uv: 5, pv: 7400, amt: 9400 },
  //   { name: "Page B", uv: 6, pv: 6400, amt: 8400 },
  //   { name: "Page C", uv: 7, pv: 5400, amt: 78400 },
  //   { name: "Page D", uv: 6, pv: 4400, amt: 2400 },
  //   { name: "Page E", uv: 5, pv: 3400, amt: 2400 },
  //   { name: "Page F", uv: 4, pv: 2400, amt: 2400 },
  // ];

  return (
    <LineChart
      width={900}
      height={450}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="hour" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
}

const mapStateToProps = (state) => {
  return {
    weatherInfo: state.weatherInfo,
  };
};

export default connect(mapStateToProps)(Chart);
