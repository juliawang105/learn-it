import { RECEIVE_DECK } from '../actions/deck_actions';
import { RECEIVE_DECK_TAG, REMOVE_DECK_TAG } from '../actions/deck_tag_actions';

export const deckTagsReducer = (state = {}, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type){
        // case RECEIVE_DECK:
        //     debugger
        //     for(let i = 0; i < action.payload.tags.length; i ++ ){
        //         newState[action.payload.tags[i].id] = action.payload.tags[i];
        //     };
        //     return newState; 
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
}