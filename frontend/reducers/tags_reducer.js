import { RECEIVE_ALL_TAGS, RECEIVE_TAG } from '../actions/tag_actions';
import { RECEIVE_DECK } from "../actions/deck_actions";

export const tagsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
  // debugger
    switch (action.type) {
      case RECEIVE_DECK:
        newState = {};
        for (let i = 0; i < action.payload.tags.length; i++) {
          newState[action.payload.tags[i].id] = action.payload.tags[i];
        }

        return newState;
      case RECEIVE_TAG:
        // debugger
        newState[action.tag.id] = action.tag;
        return newState;

      default:
        return state;
    };
};