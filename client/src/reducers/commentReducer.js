import { FETCH_COMMENTS, POST_COMMENT } from "../actions/types";

let commentArr = [];

export default (state = {}, action) => {
  switch (action.type) {
    case POST_COMMENT:
      commentArr = [...commentArr, action.payload];
      return { ...state, commentArr };
    case FETCH_COMMENTS:
      commentArr = action.payload;
      return { ...state, commentArr };
    default:
      return state;
  }
};
