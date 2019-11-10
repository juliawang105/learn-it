import React from 'react';
import { Link } from 'react-router-dom';

const DeckIndexItem = props => (
    <div className="deck_item">
        <i class="fa fa-sticky-note-o fa-4x" aria-hidden="true"></i>{props.deck.name}
        <p>props.deck</p>
    </div>
);

export default DeckIndexItem;


