import {
  SET_USER_LOCATION,
  SHOW_LOADER,
  HIDE_LOADER,
} from "./actions/actionsTypes";

const initialState = {
  showLoader: true,
  userLocation: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_LOCATION:
      return { ...state, userLocation: action.payload };

    case SHOW_LOADER:
      console.log(`SHOW`);

      return { ...state, showLoader: true };

    case HIDE_LOADER:
      console.log(`HIDE`);

      return { ...state, showLoader: false };

    default:
      return state;
  }
}
