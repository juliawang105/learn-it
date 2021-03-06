import React from "react";
import UpdateCardContainer from "../cards/update_card";

class CardItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    // this.escFunction = this.escFunction.bind(this)
  }

  handleClick(cardId) {
    event.preventDefault();
    this.props.openModal("delete-card", cardId);
  }

  render() {
    let button;
    let editButton;

    if (this.props.deck.creator_id === parseInt(this.props.user)) {
      button = (
        <button
          className="card-delete"
          onClick={() => this.handleClick(this.props.card.id)}
        >
          Delete Card
        </button>
      );
      editButton = (
        <button
          className="edit-close"
          onClick={() => this.props.openModal("edit-card", this.props.card)}
        >
          Edit Card
        </button>
      );
    }

    return (
      <div className="cards">
        <div className="card-controls">
          {button}
          {editButton}
        </div>

        <label>
          Question
          <div className="questions"> {this.props.card.question} </div>
        </label>

        <label>
          Answer
          <div className="answers"> {this.props.card.answer} </div>
        </label>
      </div>
    );
  }
}

export default CardItem;
