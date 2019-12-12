// export const selectAllDecks = state => Object.values(state.entities.decks);
export const selectDeckTags = (state, deck_id) => {
    let deckTags = [];
    let arr = Object.values(state);
    
    // debugger
    for (let i = 0; i < arr.length; i ++ ) {
        debugger
        if(arr[i].deck_id === deck_id){
            deckTags.push(arr[i])
        }
    }
    // debugger
    return deckTags;
};

export const selectDeckCards = (state, deck_id) => {
    let cards = [];
    //debugger
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
    
