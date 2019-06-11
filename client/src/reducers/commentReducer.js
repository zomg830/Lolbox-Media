import { POST_COMMENT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case POST_COMMENT:
      return { ...state, [action.payload._id]: action.payload };
    default:
      return state;
  }
};
