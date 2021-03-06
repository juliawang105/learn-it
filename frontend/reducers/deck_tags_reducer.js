import { RECEIVE_DECK } from "../actions/deck_actions";
import {
  RECEIVE_All_DECK_TAGS,
  RECEIVE_DECK_TAG,
  REMOVE_DECK_TAG,
  RECEIVE_ALL_DECK_TAGS
} from "../actions/deck_tag_actions";

export const deckTagsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_DECK_TAGS:
      newState = action.deckTags;
      // debugger
      return newState;

    case RECEIVE_DECK_TAG:
      // debugger
      newState[action.deckTag.id] = action.deckTag;
      return newState;

    case REMOVE_DECK_TAG:
      delete newState[action.deckTagId];
      return newState;
    default:
      return state;
  }
};
