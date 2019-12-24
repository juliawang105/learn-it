import React from "react";
import { withRouter } from "react-router-dom";

class CardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.card;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.action(this.state).then(this.props.closeModal);
  }

  // componentDidMount(){
  //     this.props.fetchDeck(this.props.card.deck_id)
  // }

  handleClose() {
    // debugger
    event.preventDefault();
    this.props.closeModal();
    this.props.fetchDeck(this.props.card.deck_id);
  }

  render() {
    let button;
    // debugger
    if (this.props.formType === "Create Card") {
      button = <button>Create Card!</button>;
    } else if (this.props.formType === "Update Card") {
      button = <button>Update Card</button>;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card-create">
          <div onClick={this.handleClose} className="card-x">
            ×
          </div>
          <div tabIndex="0" onKeyDown={this.escFunction}></div>
          <div className="deck_form">
            <h2>{this.props.formType}</h2>
            <input
              onChange={this.update("question")}
              type="text"
              value={this.state.question}
              placeholder="Question"
            />
            <input
              onChange={this.update("answer")}
              type="text"
              value={this.state.answer}
              placeholder="Answer"
            />
            {button}
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(CardForm);
