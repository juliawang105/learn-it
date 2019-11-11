import React from 'react';
import { withRouter } from 'react-router-dom';

class DeckShow extends React.Component{
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        
    }

    componentDidMount(){
        this.props.fetchDeck(this.props.match.params.deckId)
    };

    handleClick(e) {
        e.preventDefault();
        // debugger
        // console.log(this.props.deck.id)
        // console.log(this.props.user)
        let save = {deck_id: this.props.deck.id, learner_id: this.props.user}
        console.log('before save')
        this.props.saveDeck(save);
        console.log('after save')
    }

    render(){
        // debugger
        let deck = this.props.deck;

        if(!deck){
            return null
        } else {
                return(
                <div className="deck_show">
                        <div>
                            {deck.name}
                            <button onClick={this.handleClick}>Save to Study!</button>
                            
                        </div>
                </div>
            )
        }
    };
};

export default withRouter(DeckShow);