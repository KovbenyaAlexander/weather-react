import {
  SET_USER_LOCATION,
  SHOW_LOADER,
  HIDE_LOADER,
  SEARCH_TEXT_CHANGE,
  SET_COORDS_FOR_CITY,
  SET_WEATHER_INFO,
} from "./actionsTypes";

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

export function searchTextChange(text) {
  return {
    type: SEARCH_TEXT_CHANGE,
    payload: text,
  };
}

export function setCoordsForCity(lat, lng) {
  return {
    type: SET_COORDS_FOR_CITY,
    payload: { lat, lng },
  };
}

export function setWeather(data) {
  return {
    type: SET_WEATHER_INFO,
    payload: data,
  };
}
