import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

export const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      // debugger
      newState = action.searchDecks;
      return newState;
    default:
      return state;
  }
};

export default searchReducer;
