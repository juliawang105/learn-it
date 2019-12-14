export const search = (query) => (
    $.ajax({
        url: `/api/decks_search?query=${query}`,
        method:`GET`

    })
);
