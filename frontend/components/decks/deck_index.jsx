import React from 'react';
// import DeckIndexContainer from './deck_index_container';
import DeckIndexItem from './deck_index_item';

class DeckIndex extends React.Component{
    constructor(props){
        super(props)
    };

    componentDidMount(){
        this.props.fetchDecks();
    }

    render(){
        // debugger
        let decks = this.props.decks.map((deck) => (
            <DeckIndexItem 
            key={deck.name} 
            deck={deck} 
            saveDeck={this.props.saveDeck} 
            unSaveDeck={this.props.unSaveDeck} />
        ))

        return (
            <div className="deck_index">
                <div className="browse" >
                    <h2>Browse the flashcards created by top learners and educators! </h2>
                    <div className="decks_list">
                        {decks}
                    </div> 
                </div>
                   
                     
            </div>
        )};
};

export default DeckIndex; 