import { RECEIVE_CARD, REMOVE_CARD, CLEAR_CARD, RECEIVE_CARDS } from '../actions/card_actions'
import { RECEIVE_DECK, REMOVE_DECK, RECEIVE_ALL_DECKS } from '../actions/deck_actions'

export const cardsReducer = (state = {}, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    
    switch (action.type) {
        case CLEAR_CARD:
            newState = {};
            return newState;
        

        case RECEIVE_DECK:
            for (let i = 0; i < action.payload.cards.length; i++) {
                newState[action.payload.cards[i].id] = action.payload.cards[i]
            };
            return newState;

        case RECEIVE_CARDS:
            //debugger
            newState = action.cards;
            return newState 

        case RECEIVE_CARD:
            // debugger
            newState[action.card.id] = action.card 
            return newState;
    
        case REMOVE_CARD:
            delete newState[action.cardId];
            return newState;
        default:
            return state;
    };
};