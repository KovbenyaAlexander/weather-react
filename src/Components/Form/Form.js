import { searchTextChange } from "../../redux/actions/actions";
import { connect } from "react-redux";
import getWeatherInfo from "../../redux/actions/thunk/getWeatherInfo";
import "materialize-css";
import css from "./Form.module.css";

function Form({ searchText, searchTextChange, getWeatherInfo }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    getWeatherInfo();
  };

  const searchTextChangeHandler = (e) => {
    const newText = e.target.value;
    searchTextChange(newText);
  };

  return (
    <form className={css.formWrapper} onSubmit={(e) => onSubmitHandler(e)}>
      <div className={`input-field col s6 ${css.inputWrapper} `}>
        <input
          autoComplete="off"
          className={css.input}
          type="text"
          value={searchText}
          onChange={searchTextChangeHandler}
          id="input"
        />
        <label htmlFor="input">Search</label>
      </div>

      <button
        className={`waves-effect btn waves-light btn-small ${css.btnSubmit}`}
      >
        <i className={`material-icons prefix search-icon`}>search</i>
      </button>
      <hr />
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

    getWeatherInfo: () => {
      dispatch(getWeatherInfo());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
