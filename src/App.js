import { connect } from "react-redux";
import reverseGeocoding from "./redux/actions/thunk/reverseGeocoding";
import { useEffect } from "react";
import Form from "./Components/Form/Form";

function App({ userLocation, reverseGeocoding, showLoader }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      reverseGeocoding(data.coords.latitude, data.coords.longitude);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">{userLocation}</header>
      <p>{showLoader ? "Loading..." : null}</p>
      <hr />
      <Form />
    </div>
  );
}

const mstp = (state) => {
  return { userLocation: state.userLocation, showLoader: state.showLoader };
};

const mdtp = (dispatch) => {
  return {
    reverseGeocoding: (lat, lng) => dispatch(reverseGeocoding(lat, lng)),
  };
};

export default connect(mstp, mdtp)(App);
