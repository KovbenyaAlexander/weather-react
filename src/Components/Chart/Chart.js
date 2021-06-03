import React from "react";
import { Chart } from "react-charts";
import ResizableBox from "./ResizableBox";
import "./styles.css";
import { connect } from "react-redux";
import useDemoConfig from "./useDemoConfig";

function Graph({ weatherInfo }) {
  // const { data, randomizeData } = useDemoConfig({
  //   series: 10,
  // });

  // console.log(data);

  const series = React.useMemo(
    () => ({
      showPoints: false,
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: "time",
        position: "bottom",
      },
      { type: "linear", position: "left" },
    ],
    []
  );

  if (!weatherInfo) {
    return <p>Loading...</p>;
  }

  const array = weatherInfo.forecast.forecastday[0].hour.map((item, i) => {
    const time = new Date(item.time).getHours();
    return {
      primary: time + 1,
      secondary: item.temp_c,
    };
  });

  console.log(array);

  const data = [
    {
      // label: "Series 1",
      data: array,
    },
  ];

  if (!weatherInfo) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <br />
      <br />
      <ResizableBox>
        <Chart data={data} series={series} axes={axes} tooltip />
      </ResizableBox>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    weatherInfo: state.weatherInfo,
  };
};

export default connect(mapStateToProps)(Graph);
