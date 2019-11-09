import * as DeckUtil from '../util/deck_util';

export const RECEIVE_ALL_DECKS = 'RECEIVE_ALL_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
// export const SAVE_DECK = 'SAVE_DECK';
// export const UNSAVE_DECK = 'UNSAVE_DECK';

const receiveAllDecks = decks => ({
    type: RECEIVE_ALL_DECKS,
    decks
});

const receiveDeck = deck => ({
    type: RECEIVE_DECK,
    deck
});

const removeDeck = deckId => ({
    type: REMOVE_DECK,
    deckId
});

export const fetchDecks = () => dispatch => (
    DeckUtil.fetchDecks()
        .then(res => dispatch(receiveAllDecks(res)))
);

export const fetchDeck = (deckId) => dispatch => (
    DeckUtil.fetchDeck(deckId)
        .then(res => dispatch(receiveDeck(res)))
);

export const createDeck = (deck) => dispatch => (
    DeckUtil.createDeck(deck)
        .then(res => dispatch(receiveDeck(res)))
);

export const updateDeck = (deck) => dispatch => (
    DeckUtil.updateDeck(deck.id)
        .then(res => dispatch(receiveDeck(res)))
);

export const deleteDeck = (deckId) => dispatch => (
    DeckUtil.deleteDeck(deckId)
        .then(() => dispatch(removeDeck(deckId)))
);
