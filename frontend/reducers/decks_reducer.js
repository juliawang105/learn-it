import { RECEIVE_ALL_DECKS, REMOVE_DECK, RECEIVE_DECK} from '../actions/deck_actions';
import { RECEIVE_CARD } from '../actions/card_actions'

export const decksReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    // let nextState = {};

    let deck
    switch(action.type) {
        case RECEIVE_ALL_DECKS:
            // debugger
            newState = action.decks
            return newState;
        
        // case RECEIVE_CARD: 
        //     const { card } = action;
        //     newState[card.deck_id].
        case RECEIVE_DECK:
            deck = action.payload.deck;
            return Object.assign({}, state, { [deck.id]: deck })
        case REMOVE_DECK:
            delete newState[action.deckId];
            return newState;

        default:
            return state;        
    };
};