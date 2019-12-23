import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import DeckIndexItem from '../decks/deck_index_item'

class SaveItem extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        //this.props.fetchDecks();
        this.props.fetchSave(this.props.save.id)
    }

    render(){
        let decks = Object.values(this.props.decks);
        
        if (!this.props.decks) {
            return null;
        };

        let display = [];
        
        for(let i = 0; i < decks.length; i ++ ){
                let deck = decks[i];
                if(deck.id === this.props.save.deck_id){
                    display.push(deck)
                } 
            };
        
        if(display.length === 0){
            return null;
        }

        let displays = display.map( (display) => {
            return  <DeckIndexItem 
                deck={display}
                decks={this.props.decks}
                session={this.props.session}
                deleteDeck={this.props.deleteDeck}
                session={this.props.session}
                openModal={this.props.openModal}
                closeModal={this.props.closeModal}/>
        });

        return (
            <div>
                {displays}
            </div>
        )
    }
};


export default withRouter(SaveItem); 