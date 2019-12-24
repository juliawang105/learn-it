import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser
      });
      //brackets are evaluated first before the key is set. we don't want the words "action.user.id"
    default:
      return state;
  }
};
