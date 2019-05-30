import { SAVE_ITEM, DELETE_ITEM, FETCH_LOLBOX } from "../actions/types";

let userArr = [];

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_ITEM:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_ITEM:
      userArr = state.userArr.filter(el => el._id !== action.payload);
      return { ...state, userArr };
    case FETCH_LOLBOX:
      userArr = action.payload.map(el => el);
      return { ...state, userArr };
    default:
      return state;
  }
};
