import React from "react";
import { Link, withRouter } from "react-router-dom";
import CardItem from "../cards/card_item";
import CreateCardContainer from "../cards/create_card_container";
import StudyCards from "../study/study_cards";
import TagForm from "../tags/create_tags_container";
//import TagList from '../tags/tag_list';

class DeckShow extends React.Component {
  constructor(props) {
    super(props);
   
    this.handleClick = this.handleClick.bind(this);
    this.fetchDeck = this.props.fetchDeck.bind(this);
    this.goStudy = this.goStudy.bind(this);
   
  }

  componentDidMount() {
    this.props.fetchDeck(this.props.match.params.deckId);
  };

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.deckId !== this.props.match.params.deckId) {
      this.props.fetchDeck(this.props.match.params.deckId);
      
    };
    
  };

  goStudy(e){
    e.preventDefault();
    this.props.history.push(`/decks/${this.props.deck.id}/study`)
  }

  handleClick(e) {
    e.preventDefault();
    let save = { deck_id: this.props.deck.id, learner_id: this.props.user };
    let saves = Object.values(this.props.saves);

    if (saves.length === 0) {
      this.props.saveDeck(save);
      return;
    };

    for (let i = 0; i < saves.length; i++) {
      let saved = saves[i]; //saved = pojo
      if (saved.deck_id === this.props.deck.id) {
        this.props.unsaveDeck(saved.id);
        return;
      };
    };
    this.props.saveDeck(save)
  };

  render() {
    let deck = this.props.deck;
    if (!deck) return null;

    //let cards = this.props.cards;
    let deck_cards;
    let no_cards;
   
    if (this.props.cards.length === 0 && deck.creator_id === parseInt(this.props.user)) {
      no_cards= <p className="empty-deck">Get Started and Create Some Cards!</p>
    } else if (this.props.cards.length === 0 && deck.creator_id !== parseInt(this.props.user)) {
      no_cards = <p className="empty-deck">This deck has no cards.
        </p>
    } 
    
    if (this.props.cards.length > 0) {
      {
        deck_cards = this.props.cards.map(card => {
      return (
        <CardItem
          key={card.id}
          card={card}
          fetchCard={this.props.fetchCard}
          deleteCard={this.props.deleteCard}
          user={this.props.user}
          deck={deck}
          openModal={this.props.openModal}
          fetchDeck={this.props.fetchDeck}
        />
        );
      })
        no_cards = (
          <button className="card-button" onClick={this.goStudy}>
           
              Study this Deck!
            
        </button>
        )
    }
  };

    let save_array = Object.values(this.props.saves);
    save_array = save_array.map(save => {
      return save.deck_id;
    });
    let createButton;
    let deleteButton;

    if (deck.creator_id === parseInt(this.props.user)) {
      createButton = (
        <button
          className="card-button"
          onClick={() => this.props.openModal("card", deck.id)}
        >
          <i className="fas fa-plus-circle"></i>Add New Card
        </button>
      );
      deleteButton = (
        <button
          className="card-button"
          onClick={() => this.props.openModal("delete-deck", deck.id)}
        >
          Delete Deck
        </button>
      );
    };

    let saveButton;
    if (!save_array.includes(this.props.deck.id)) {
      saveButton = (
        <button className="card-button" onClick={this.handleClick}>
          Save Deck
        </button>
      );
    } else if (save_array.includes(this.props.deck.id)) {
      saveButton = (
        <button className="card-button" onClick={this.handleClick}>
          Unsave Deck
        </button>
      );
    };

    return (
      <div className="deck_show">
        <div className="show">
          <div className="show-nav">
            <div className="deck_title">{deck.name}</div>
            {no_cards}
            {saveButton}
            {createButton}
            {deleteButton}
           
          </div>


          <div className="show-cards">{deck_cards}</div>
        </div>
      </div>
    );
  };
}

export default withRouter(DeckShow);
