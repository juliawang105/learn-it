import { RECEIVE_SCORE, RECEIVE_SCORES } from "../actions/score_actions";
import { RECEIVE_DECK, REMOVE_DECK } from "../actions/deck_actions";

export const scoresReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_DECK:
      for (let i = 0; i < action.payload.scores.length; i++) {
        newState[action.payload.scores[i].id] = action.payload.scores[i];
      }
      return newState;

    case RECEIVE_SCORES:
      newState = action.scores;
      return newState;

    case RECEIVE_SCORE:
      newState[action.score.id] = action.score;
      return newState;

    default:
      return state;
  }
};
