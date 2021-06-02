import {
  SHOW_LOADER,
  HIDE_LOADER,
  SEARCH_TEXT_CHANGE,
  SET_COORDS_FOR_CITY,
  SET_WEATHER_INFO,
} from "./actions/actionsTypes";

const initialState = {
  searchText: "gomel",
  isShowLoader: true,
  coordsForCity: null,
  weatherInfo: null,
  coords: { lat: null, lng: null },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
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
        coords: {
          lat: action.payload.location.lat,
          lng: action.payload.location.lon,
        },
      };

    default:
      return state;
  }
}
