import React from 'react';
import { Link } from 'react-router-dom';

class DeckIndexItem extends React.Component {
    constructor(props){
        super(props)

        
    };

    render(){
        return(
        <div className="deck_item">
            <i className="fa fa-sticky-note-o fa-4x" aria-hidden="true"></i>{this.props.deck.name}
           
        </div>
        )
    };
};

export default DeckIndexItem;


