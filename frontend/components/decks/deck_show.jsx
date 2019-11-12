import React from 'react';
import { withRouter } from 'react-router-dom';
import CardItem from './card_item'

class DeckShow extends React.Component{
    constructor(props){
        super(props);
        // this.state = this.props;

        this.handleClick = this.handleClick.bind(this);
        // this.fetchDeck = this.props.fetchDeck.bind(this)
        
    }

    componentDidMount(){
        this.props.fetchDeck(this.props.match.params.deckId);
        // this.props.fetchCard();
        
    };

    componentDidUpdate(oldProps) {
        // this.handleClick
        // debugger
        if (oldProps.match.params.deckId !== this.props.match.params.deckId) {
            this.props.fetchDeck(this.props.match.params.deckId)
        }
    };

    handleClick(e) {
        e.preventDefault();
        let save = {deck_id: this.props.deck.id, learner_id: this.props.user}
        this.props.saveDeck(save); 
    }

    render(){
        
        let deck = this.props.deck;
        // debugger;
        let cards = this.props.cards.map( (card) => {
            return < CardItem 
                key={card.id}
                card={card}
                fetchCard={this.props.fetchCard } />
        });
        if(!deck){
            return null
        } else {
                return(
                <div className="deck_show">
                        <div>
                            {deck.name}
                            {cards}
                            <button onClick={this.handleClick}>Save to Study!</button>
                        </div>
                </div>
            )
        }
    };
};

export default withRouter(DeckShow);