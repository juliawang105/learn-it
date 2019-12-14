export const search = (query) => {
    
    console.log(query)
    return $.ajax({
        url: `/api/decks_search?query=${query}`,
        method:`GET`,
        data: {query}
    })
};
