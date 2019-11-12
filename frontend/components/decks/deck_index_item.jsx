import React from 'react';
import { Link } from 'react-router-dom';

class DeckIndexItem extends React.Component {
    constructor(props){
        super(props)

        
    };

    render(){
        // let deck = this.props.match.params.deckId
    //    debugger
        return(
           
        <div className="deck_item">
            {/* <i className="fa fa-sticky-note-o fa-4x" aria-hidden="true"></i>{this.props.deck.name} */}
            
                <Link to={`/decks/${this.props.deck.id}`}>{this.props.deck.name}</Link>
        </div>
        )
    };
};

export default DeckIndexItem;


