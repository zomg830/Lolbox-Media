import { combineReducers } from "redux";
import {
  reducer as formReducer,
  actionTypes as formActionTypes
} from "redux-form";

import authReducer from "./authReducer";
import lolboxReducer from "./lolboxReducer";

// Removes issue of comment values carrying over
// between two different lolbox card modal comments
const removeUnregisteredFormFieldValue = (state, action) => {
  if (action.type !== formActionTypes.UNREGISTER_FIELD) return state;

  const {
    values: { [action.payload.name]: unregistered, ...values }
  } = state;
  return { ...state, values };
};

export default combineReducers({
  auth: authReducer,
  lolbox: lolboxReducer,
  form: formReducer.plugin({
    comment: removeUnregisteredFormFieldValue
  })
});
