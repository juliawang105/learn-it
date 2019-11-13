import React from 'react';
import { NavLink } from 'react-router-dom';

class DeckIndexItem extends React.Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(){
        event.preventDefault();
        this.props.deleteDeck(this.props.deck.id)
    }

    render(){
        return(
            <div className="deck_item">
                <span> <NavLink to={`/decks/${this.props.deck.id}`}>{this.props.deck.name}</NavLink> </span>
                <div>
                    <button onClick={() => this.handleClick()}>>Delete Deck</button>
                </div>
            </div>
        )
    };
};

export default DeckIndexItem;


