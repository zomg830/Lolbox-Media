import {
  SAVE_ITEM,
  FETCH_LOLBOX,
  DELETE_ITEM,
  AUTH_USER,
  AUTH_ERROR,
  SET_ID
} from "./types";
import API from "../api/lolboxAPI";
import history from "../history";

export const saveLolboxItem = lolboxData => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await API.saveLolboxItem({ ...lolboxData, userId });

  dispatch({ type: SAVE_ITEM, payload: response.data });
};

export const fetchLolbox = userId => async dispatch => {
  const response = await API.getUserLolbox(userId);

  dispatch({ type: FETCH_LOLBOX, payload: response.data.lolbox });
};

export const deleteLolboxItem = (userId, id) => dispatch => {
  API.deleteLolboxItem(userId, id);

  dispatch({ type: DELETE_ITEM, payload: id });
};

export const signup = formProps => async dispatch => {
  try {
    const response = await API.signup(formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};

export const login = formProps => async dispatch => {
  try {
    const response = await API.login(formProps);

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  history.push("/lolbox");
  return {
    type: AUTH_USER,
    payload: ""
  };
};

export const setId = token => async dispatch => {
  const response = await API.getSession(token);
  dispatch({ type: SET_ID, payload: response.data });
};

export const destroyId = () => async dispatch => {
  dispatch({ type: SET_ID, payload: "" });
  window.location.reload();
};
