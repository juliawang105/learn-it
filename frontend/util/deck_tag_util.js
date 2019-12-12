export const fetchDeckTags = (deck_id) => (
    $.ajax({
        url: `/api/deck_tags?deck_id=${deck_id}`,
        method: `GET`
    })
)

export const createDeckTag = deck_tag => (
     $.ajax({
           url: `/api/deck_tags`,
           method: `POST`,
           data: { deck_tag }
         })
);

export const deleteDeckTag = deck_tagId => (
    $.ajax({
        url: `/api/deck_tags/${deck_tagId}`,
        method: `DELETE`
    })
)
        