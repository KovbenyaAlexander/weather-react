import { searchTextChange } from "../../redux/actions/actions";
import { connect } from "react-redux";
import getCoordinatsByCityName from "../../redux/actions/thunk/getCoordinatsByCityName";
import getWeatherInfo from "../../redux/actions/thunk/getWeatherInfo";

function Form({ searchText, searchTextChange, getWeatherInfo }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    // getCoordinatsByCityName(searchText);
    getWeatherInfo();
  };

  const searchTextChangeHandler = (e) => {
    const newText = e.target.value;
    searchTextChange(newText);
  };

  return (
    <form onSubmit={(e) => onSubmitHandler(e)}>
      <input
        id="input"
        value={searchText}
        onChange={searchTextChangeHandler}
        type="text"
        className="validate"
      />
      <button>Search</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTextChange: (searchText) => {
      dispatch(searchTextChange(searchText));
    },
    getCoordinatsByCityName: (searchText) => {
      dispatch(getCoordinatsByCityName(searchText));
    },
    getWeatherInfo: () => {
      dispatch(getWeatherInfo());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
