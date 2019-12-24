import { RECEIVE_ALL_TAGS, RECEIVE_TAG } from "../actions/tag_actions";
import { RECEIVE_DECK } from "../actions/deck_actions";

export const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_DECK:
      // debugger
      // newState = {};
      for (let i = 0; i < action.payload.tags.length; i++) {
        newState[action.payload.tags[i].id] = action.payload.tags[i];
      }
      return newState;
    case RECEIVE_ALL_TAGS:
      // debugger
      newState = action.tags;
      // debugger
      return newState;

    case RECEIVE_TAG:
      // debugger
      newState[action.tag.id] = action.tag;
      return newState;

    default:
      return state;
  }
};
