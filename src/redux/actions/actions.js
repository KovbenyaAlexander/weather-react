import { SET_USER_LOCATION, SHOW_LOADER, HIDE_LOADER } from "./actionsTypes";

export function set_user_location(location) {
  return {
    type: SET_USER_LOCATION,
    payload: location,
  };
}

export function show_loader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hide_loader() {
  return {
    type: HIDE_LOADER,
  };
}
