import {
  SHOW_LOADER,
  HIDE_LOADER,
  SEARCH_TEXT_CHANGE,
  SET_COORDS_FOR_CITY,
  SET_WEATHER_INFO,
  SET_GEOLOCATION_STATUS,
} from "./actions/actionsTypes";

const initialState = {
  searchText: "gomel",
  isShowLoader: true,
  weatherInfo: null,
  coords: { lat: null, lng: null },
  iaGeoLocationAllowed: false,
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
        coords: { ...action.payload },
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

    case SET_GEOLOCATION_STATUS:
      return {
        ...state,
        iaGeoLocationAllowed: action.payload,
      };

    default:
      return state;
  }
}
