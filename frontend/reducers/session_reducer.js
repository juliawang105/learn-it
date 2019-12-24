import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const _nullSession = {
  id: null
};

export const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      //    const { id } = action.currentUser.id
      return Object.assign({}, { id: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    default:
      return state;
  }
};
