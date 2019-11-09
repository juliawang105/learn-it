import { RECEIVE_ALL_DECKS, REMOVE_DECK, RECEIVE_DECK} from '../actions/deck_actions';

export const decksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_ALL_DECKS:
            return action.decks;

        case RECEIVE_DECK:
            newState[action.deck.id] = action.deck;
            return newState;
        case REMOVE_DECK:
            delete newState[action.deckId];
            return newState;

        default:
            return state;        
    };
};