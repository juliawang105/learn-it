import React from 'react';
import { Link } from 'react-router-dom';

const DeckIndexItem = props => (
    <div className="deck_item">
        <i className="fa fa-sticky-note-o fa-4x" aria-hidden="true"></i>{props.deck.name}
        
    </div>
);

export default DeckIndexItem;


