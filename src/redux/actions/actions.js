import {
  SHOW_LOADER,
  HIDE_LOADER,
  SEARCH_TEXT_CHANGE,
  SET_COORDS_FOR_CITY,
  SET_WEATHER_INFO,
  SET_GEOLOCATION_STATUS,
} from "./actionsTypes";

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
export function setGeolocationStatus(status) {
  return {
    type: SET_GEOLOCATION_STATUS,
    payload: status,
  };
}
