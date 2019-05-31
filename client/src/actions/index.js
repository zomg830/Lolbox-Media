import {
  SIGN_IN,
  SIGN_OUT,
  SAVE_ITEM,
  FETCH_LOLBOX,
  DELETE_ITEM
} from "./types";
import API from "../api/lolboxAPI";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const saveLolboxItem = lolboxData => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await API.saveLolboxItem({ ...lolboxData, userId });

  dispatch({ type: SAVE_ITEM, payload: response.data });
};

export const fetchLolbox = userId => async dispatch => {
  const response = await API.getUserLolbox(userId);

  dispatch({ type: FETCH_LOLBOX, payload: response.data });
};

export const deleteLolboxItem = id => dispatch => {
  API.deleteLolboxItem(id);

  dispatch({ type: DELETE_ITEM, payload: id });
};
