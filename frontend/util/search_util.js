export const search = (query) => {
    return $.ajax({
        url: `/api/decks_search?query=${query}`,
        method:`GET`,
        data: {query}
    })
};
