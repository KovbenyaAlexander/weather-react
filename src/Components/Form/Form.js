import { searchTextChange } from "../../redux/actions/actions";
import { connect } from "react-redux";
import getCoordinatsByCityName from "../../redux/actions/thunk/getCoordinatsByCityName";

function Form({ searchText, searchTextChange, getCoordinatsByCityName }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    getCoordinatsByCityName(searchText);
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
