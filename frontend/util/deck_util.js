export const fetchDecks = () => (
    $.ajax({
        url: `/api/decks`,
        method: `GET`,
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
