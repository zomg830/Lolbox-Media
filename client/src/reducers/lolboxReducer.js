import { SAVE_ITEM, FETCH_LOLBOX } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_ITEM:
      return { ...state, [action.payload._id]: action.payload };
    case FETCH_LOLBOX:
      const userArr = action.payload.map(el => el);
      return { ...state, userArr };
    default:
      return state;
  }
};
