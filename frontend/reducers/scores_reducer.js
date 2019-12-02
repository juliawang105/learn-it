import { RECEIVE_SCORE } from '../actions/score_actions';

export const scoresReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)

    switch(action.type){
        case RECEIVE_SCORE:
            newState[action.score.id] = action.score;
            return newState;
        default:
            return state; 
    }
}