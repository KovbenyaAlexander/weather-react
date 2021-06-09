import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import WeatherContainerItem from "./WeatherContainerItem";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function WeatherContainer({ weatherInfo }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!weatherInfo) {
    return <p>Loading...</p>;
  }
  const WeatherContainerItems = weatherInfo.forecast.forecastday.map(
    (item, i) => {
      return (
        <WeatherContainerItem data={item} value={value} index={i} key={i} />
      );
    }
  );

  console.log(weatherInfo);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label={weatherInfo.forecast.forecastday[0].date} />
          <Tab label={weatherInfo.forecast.forecastday[1].date} />
          <Tab label={weatherInfo.forecast.forecastday[2].date} />
        </Tabs>
      </AppBar>

      {WeatherContainerItems}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    weatherInfo: state.weatherInfo,
  };
};
export default connect(mapStateToProps)(WeatherContainer);
