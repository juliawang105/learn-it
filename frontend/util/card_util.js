export const fetchCard = cardId => (
    $.ajax({
        url:`/api/cards/${cardId}`,
        method: `GET`
    })
);

export const createCard = (deckId, card) => (
    $.ajax({
        url: `/api/decks/${deckId}/cards`,
        method: `POST`,
        data: { card }
    })
); 

export const updateCard = card => (
    $.ajax({
        url:`/api/cards/${card.id}`,
        method: `PATCH`,
        data: { card }
    })
);

export const deleteCard = cardId => (
    $.ajax({
        url: `/api/cards/${cardId}`,
        method: `DELETE`,
    })
); 