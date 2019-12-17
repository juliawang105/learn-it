export const fetchCard = cardId => (
    $.ajax({
        url:`/api/cards/${cardId}`,
        method: `GET`
    })
);

export const createCard = (card) => (
    $.ajax({
        url: `/api/decks/${card.deck_id}/cards`,
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

export const fetchCards = (deck_id) =>
  $.ajax({
    url: `/api/cards/?deck_id=${deck_id}`,
    method: `GET`
  });