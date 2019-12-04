// export const selectAllDecks = state => Object.values(state.entities.decks);

export const selectDeckCards = (state, deck_id) => {
    let cards = [];

    let arr = Object.values(state);
    for(let i = 0; i < arr.length; i ++ ){
        if(arr[i].deck_id === parseInt(deck_id)){
            cards.push(arr[i])
        };
    };


    return cards; 
}

export const selectScores = (state, deck_id) => {
    let deckScores = [];

    let arr = Object.values(state);
    console.log(arr)

    for(let i = 0; i < arr.length ; i ++ ){
        //debugger
        if(arr[i].deck.id === parseInt(deck_id)){
            console.log("here")
            console.log(i);
            deckScores.push(arr[i])
        }
    };

    return deckScores 
};
    
