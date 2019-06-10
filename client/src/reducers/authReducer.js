import { AUTH_USER, AUTH_ERROR, SET_ID } from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
  email: "",
  isLoggedIn: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    case SET_ID:
      return {
        ...state,
        userId: action.payload.userId,
        email: action.payload.email,
        isLoggedIn: !action.payload ? false : true
      };
    default:
      return state;
  }
}
