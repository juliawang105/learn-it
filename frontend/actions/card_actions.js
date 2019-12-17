import * as CardUtil from '../util/card_util';

export const RECEIVE_CARD = 'RECEIVE_CARD';
export const RECEIVE_CARDS = "RECEIVE_CARDS";
export const REMOVE_CARD = 'REMOVE_CARD';
export const CLEAR_CARD = 'CLEAR_CARD';

const receiveCards = cards => ({
    type: RECEIVE_CARDS,
    cards
})

const receiveCard = card => ({
    type: RECEIVE_CARD,
    card
});

const removeCard = cardId => ({
    type: REMOVE_CARD,
    cardId
});

const clearCard = () => ({
    type: CLEAR_CARD
});

export const fetchCards = deck_id => dispatch => (
    CardUtil.fetchCards(deck_id)
        .then(res => dispatch(receiveCards(res)))
)

export const fetchCard = cardId => dispatch => (
    CardUtil.fetchCard(cardId)
        .then( res => dispatch(receiveCard(res)))
); 

export const createCard = (card) => dispatch => (
    CardUtil.createCard(card)
        .then(res => dispatch(receiveCard(res)))
);

export const updateCard = card => dispatch => (
    CardUtil.updateCard(card)
        .then(res => dispatch(receiveCard(res)))
);

export const deleteCard = cardId => dispatch => (
    CardUtil.deleteCard(cardId)
        .then( ()=> dispatch(removeCard(cardId)))
); 

export const clearAllCards = () => dispatch => (
    dispatch(clearCard())
);


