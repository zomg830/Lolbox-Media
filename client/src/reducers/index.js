import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import lolboxReducer from "./lolboxReducer";

export default combineReducers({
  auth: authReducer,
  lolbox: lolboxReducer,
  form: formReducer
});
