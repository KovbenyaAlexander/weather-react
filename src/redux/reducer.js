import {
  SET_USER_LOCATION,
  SHOW_LOADER,
  HIDE_LOADER,
  SEARCH_TEXT_CHANGE,
  SET_COORDS_FOR_LOOKING_CITY,
} from "./actions/actionsTypes";

const initialState = {
  searchText: "",
  showLoader: true,
  userLocation: "",
  coordsForLookingCity: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_LOCATION:
      return { ...state, userLocation: action.payload };

    case SHOW_LOADER:
      return { ...state, showLoader: true };

    case HIDE_LOADER:
      return { ...state, showLoader: false };

    case SEARCH_TEXT_CHANGE:
      return { ...state, searchText: action.payload };

    case SET_COORDS_FOR_LOOKING_CITY:
      return {
        ...state,
        coordsForLookingCity: { ...action.payload },
      };

    default:
      return state;
  }
}
