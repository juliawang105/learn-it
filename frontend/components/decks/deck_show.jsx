import React from 'react';
import { withRouter } from 'react-router-dom';
import CardItem from './card_item'

class DeckShow extends React.Component{
    constructor(props){
        super(props);
        // this.state = this.props;

        this.handleClick = this.handleClick.bind(this);
        this.fetchDeck = this.props.fetchDeck.bind(this)
        
    }

    componentDidMount(){
        this.props.fetchDeck(this.props.match.params.deckId)
        console.log("deck mount")
            // .then(this.props.selectDeckCards(this.props.cards, this.props.match.params.deckId));
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

        if(!deck) return null;
        
        let cards = this.props.cards;
        if (!cards) return null
        console.log(cards);
        let deck_cards = cards.map( (card) => {
            return < CardItem 
                key={card.id}
                card={card}
                fetchCard={this.props.fetchCard } />
        });
    
        return(
            <div className="deck_show">
                <div>
                    <div className="deck_title">{deck.name}</div>
                        {deck_cards}
                        <button onClick={this.handleClick}>Save to Study!</button>
                    </div>
            </div>
            )
        }
    };


export default withRouter(DeckShow);