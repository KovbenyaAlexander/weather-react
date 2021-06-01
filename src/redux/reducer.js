import {
  SET_USER_LOCATION,
  SHOW_LOADER,
  HIDE_LOADER,
  SEARCH_TEXT_CHANGE,
  SET_COORDS_FOR_CITY,
  SET_WEATHER_INFO,
} from "./actions/actionsTypes";

const initialState = {
  searchText: "gomel",
  isShowLoader: true,
  location: "",
  coordsForCity: null,
  weatherInfo: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_LOCATION:
      return { ...state, location: action.payload };

    case SHOW_LOADER:
      return { ...state, isShowLoader: true };

    case HIDE_LOADER:
      return { ...state, isShowLoader: false };

    case SEARCH_TEXT_CHANGE:
      return { ...state, searchText: action.payload };

    case SET_COORDS_FOR_CITY:
      return {
        ...state,
        coordsForCity: { ...action.payload },
      };

    case SET_WEATHER_INFO:
      return {
        ...state,
        weatherInfo: action.payload,
      };

    default:
      return state;
  }
}
