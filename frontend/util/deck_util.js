export const fetchDecks = (creator_id) => (
    $.ajax({
        url: `/api/decks`,
        method: `GET`,
        data: {
            check_id: creator_id
        }
    })
);

export const fetchDeck = (deckId) => (
    $.ajax({
        url: `/api/decks/${deckId}`,
        method: `GET`
    })
);

export const createDeck = (deck) => (
    $.ajax({
        url: `/api/decks`,
        method: `POST`,
        data: { deck }
    })
);

export const updateDeck = (deck) => (
    $.ajax({
        url: `/api/decks/${deck.id}`,
        method: `PATCH`,
        data: { deck }
    })
);

export const deleteDeck = (deckId) => (
    $.ajax({
        url: `/api/decks/${deckId}`,
        method: `DELETE`
    })
);
