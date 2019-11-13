import React from 'react';
import { NavLink } from 'react-router-dom';

class DeckIndexItem extends React.Component {
    constructor(props){
        super(props)

        
    };

    render(){
        return(
            <div className="deck_item">
                <span> <NavLink to={`/decks/${this.props.deck.id}`}>{this.props.deck.name}</NavLink> </span>
            </div>
        )
    };
};

export default DeckIndexItem;


