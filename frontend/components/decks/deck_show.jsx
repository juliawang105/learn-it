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
    this.state = {
      tags: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.fetchDeck = this.props.fetchDeck.bind(this);
    //this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }

  componentDidMount() {
    //debugger
    this.props.fetchDeck(this.props.match.params.deckId);
    // .then( res => {
    //     // debugger
    //     this.setState({tags: res.payload.tags})

    // });
  };

  componentDidUpdate(oldProps) {
    //debugger;
    if (oldProps.match.params.deckId !== this.props.match.params.deckId) {
      this.props.fetchDeck(this.props.match.params.deckId);
      // .then(res => {
      //     //debugger
      //     this.setState({ tags: res.payload.tags })

      // });
    };
    // debugger
    // if(Object.keys(oldProps.tags).length !== Object.keys(this.props.tags).length){
    //     this.props.fetchDeck(this.props.match.params.deckId)
    //         .then(res => {
    //             //debugger
    //             this.setState({ tags: res.payload.tags })

    //         });
    //     }
  };

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
        // .then(() => this.setState({ following: false }))
        return;
      };
    };
    this.props.saveDeck(save).then(() => this.setState({ following: true }));
  };

  render() {
    let deck = this.props.deck;
    if (!deck) return null;

    let cards = this.props.cards;
    let deck_cards;
    let study_link;
    
    if (cards.length === 0) {
      deck_cards = <div className="empty-deck">Get Started and Create Some Cards!</div>
    } else {deck_cards = cards.map(card => {
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
      study_link = <Link id="study" to={`/decks/${this.props.deck.id}/study`}>
        Study this Deck!
            </Link>
  };

    let tags = this.state.tags;
    if (!tags) return null;

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

    //debugger
    return (
      <div className="deck_show">
        <div className="show">
          {/* <div className="deck_title">{deck.name} <Link id="study" to={`/decks/${this.props.deck.id}/study`}>Study this Deck!</Link>
                    </div> */}
          {/* 
                    {saveButton} 
                    <br />
                    {createButton}
                    <br/>
                    {deleteButton}
                    {deck_cards} */}
          <div className="show-nav">
            <div className="deck_title">{deck.name}</div>
            {/* <Link id="study" to={`/decks/${this.props.deck.id}/study`}>
              Study this Deck!
            </Link> */}
            {study_link}
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
