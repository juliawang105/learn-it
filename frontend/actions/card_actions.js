import * as CardUtil from '../util/card_util';

export const RECEIVE_CARD = 'RECEIVE_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

const receiveCard = card => ({
    type: RECEIVE_CARD,
    card
});

const removeCard = cardId => ({
    type: REMOVE_CARD,
    cardId
});

export const fetchCard = cardId => dispatch => (
    CardUtil.fetchCard(cardId)
        .then( res => dispatch(receiveCard(res)))
); 

export const createCard = (deckId, card) => dispatch => (
    CardUtil.createCard(deckId, card)
        .then(res => receiveCard(res))
);

export const updateCard = card => dispatch(
    CardUtil.updateCard(card)
        .then( res => (receiveCard(res)))
);

export const deleteCard = cardId => dispatch => (
    Card.CardUtil.deleteCard(cardId)
        .then( ()=> dispatch(removeCard(cardId)))
); 


