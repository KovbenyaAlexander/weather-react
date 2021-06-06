import { YMaps, Map } from "react-yandex-maps";
import { connect } from "react-redux";

const MapContainer = ({ lat, lng }) => {
  if (!lat || !lng) {
    return "Loading...";
  }

  const coords = [lat, lng];

  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.75, 37.57], zoom: 10, fillColor: "grey" }}
        state={{ center: coords, zoom: 10, fillColor: "grey" }}
      />
    </YMaps>
  );
};

const mapStateToProps = (state) => {
  return {
    lat: state.coords.lat,
    lng: state.coords.lng,
  };
};

export default connect(mapStateToProps)(MapContainer);
