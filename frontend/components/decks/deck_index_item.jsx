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
        let user_id;
        if (this.props.deck.creator_id) {
            user_id = this.props.deck.creator_id; 
        } else if (this.props.deck.creator.id) {
            user_id = this.props.deck.creator.id
        }
        if (user_id=== parseInt(this.props.session)) {
            return (
                <div className="decks">
                    <div className="deck_item">
                        <span> <NavLink to={`/decks/${this.props.deck.id}`}>{this.props.deck.name}</NavLink> </span>
                    </div>
                    <p className="delete-deck" onClick={() => this.handleClick()}>Delete Deck</p>
                </div>
            )
        } else {
            return (
                <div className="decks">
                    <div className="deck_item">
                        <span> <NavLink to={`/decks/${this.props.deck.id}`}>{this.props.deck.name}</NavLink> </span>
                    </div>
                    {/* <button className="delete-deck" onClick={() => this.handleClick()}>Delete Deck</button> */}
                </div>
            )
        }
        
    };
};

export default DeckIndexItem;


