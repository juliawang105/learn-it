import React from 'react';
// import DeckIndexContainer from './deck_index_container';
import DeckIndexItem from './deck_index_item';

class DeckIndex extends React.Component{
    constructor(props){
        super(props)

        this.escFunction = this.escFunction.bind(this)
      
    };

    componentDidMount(){
        this.props.fetchDecks();
        document.addEventListener('keydown', this.escFunction)
    };

    componentWillUnmount() {
        document.removeEventListener("keydown", this.escFunction);
    }

    componentDidUpdate(oldProps){
        if (oldProps.match.params.deckId !== this.props.match.params.deckId) {
            this.props.fetchDecks(this.props.match.params.deckId)
        };
    };

    escFunction(e) {
        // e.preventDefault();
        if (e.keyCode === 27) {
            this.props.closeModal()
        };
    };

    render(){
        // debugger
        let decks = this.props.decks.map((deck) => (
            <DeckIndexItem 
            key={deck.id} 
            deck={deck} 
            saveDeck={this.props.saveDeck} 
            unSaveDeck={this.props.unSaveDeck} 
            deleteDeck={this.props.deleteDeck}
            session={this.props.session}
            />
        ))

        return (
            <div className="deck_index">
               
                    <div className="deck-browse">Browse the flashcards created by top learners and educators! </div>
                    <div className="decks_list">
                        {decks}
                    </div> 
                       
            </div>
        )};
};

export default DeckIndex; 