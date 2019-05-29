import { combineReducers } from "redux";
import authReducer from "./authReducer";
import lolboxReducer from "./lolboxReducer";

export default combineReducers({
  auth: authReducer,
  lolbox: lolboxReducer
});
