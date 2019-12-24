import {
  UNFOLLOW_DECK,
  FOLLOW_DECK,
  RECEIVE_ALL_SAVES
} from "../actions/save_actions";

export const savesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case FOLLOW_DECK:
      // debugger
      newState[action.save.id] = action.save;
      return newState;
    case UNFOLLOW_DECK:
      // debugger
      delete newState[action.saveId];
      return newState;
    case RECEIVE_ALL_SAVES:
      newState = action.saves;
      return newState;
    default:
      return state;
  }
};
