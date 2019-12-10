export const createDeckTag = deckTag => (
     $.ajax({
           url: `/api/deck_tags`,
           method: `POST`,
           data: { deckTag }
         })
);

export const deleteDeckTag = deckTagId => (
    $.ajax({
        url: `/api/deck_tags/${deckTagId}`,
        method: `DELETE`
    })
)
        