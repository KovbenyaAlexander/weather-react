import Box from "@material-ui/core/Box";
import css from "./Weather.module.css";
import Chart from "../Chart/Chart";

function WeatherContainerItem(props) {
  const { data, value, index, ...other } = props;

  return (
    <div
      className={css.weatherContainerItem}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {data.date}
      {/* {value === index && <Box p={3}></Box>} */}
      <Chart index={index} hourlyInformation={data} />
    </div>
  );
}

export default WeatherContainerItem;
