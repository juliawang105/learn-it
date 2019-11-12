import { RECEIVE_CARD, REMOVE_CARD } from '../actions/card_actions'
import { RECEIVE_DECK } from '../actions/deck_actions'

export const cardsReducer = (state = {}, action ) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_DECK:
            for(let i = 0; i < action.deck.cards.length; i ++ ){
                newState[action.deck.cards[i].id] = action.deck.cards[i];
            };

            return newState;

        case RECEIVE_CARD:
            newState[action.card.id] = action.card 
            return newState;
    
        case REMOVE_CARD:
            delete newState[action.cardId]
            return newState;

        default:
            return state;
    };
};