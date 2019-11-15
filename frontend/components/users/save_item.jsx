import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'

class SaveItem extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchDecks();
        this.props.fetchSave(this.props.save.id)
    }

    render(){
        // debugger
        

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
        // debugger
        if(display.length === 0){
            return null;
        }

        let displays = display.map( (display) => {
            return  display.name
        });

        return (
            <div>
                {displays}
            </div>
        )
    }
};


export default withRouter(SaveItem); 