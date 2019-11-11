import React from 'react';
import { withRouter } from 'react-router-dom';

class DeckShow extends React.Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.fetchDeck(this.props.match.params.deckId)
    };

    render(){
        // debugger
        let deck = this.props.deck;

        if(!deck){
            return null
        } else {
                return(
                <div>
                    {deck.name}
                </div>
            )
        }
    };
};

export default withRouter(DeckShow);