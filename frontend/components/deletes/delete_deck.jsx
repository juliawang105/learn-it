import React from "react";
import { withRouter } from "react-router-dom";

class DeleteDeck extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction);
  }

  escFunction(e) {
    // e.preventDefault();
    if (e.keyCode === 27) {
      this.props.closeModal();
    }
  }

  handleDelete() {
    event.preventDefault();
    this.props.deleteDeck(this.props.data).then(() => {
      this.props.closeModal();
      this.props.history.push(`/users/${this.props.session}`);
    });
    // .then( () => {
    //     this.props.history.push(``)
    // })
  }

  render() {
    // debugger
    return (
      <div className="delete">
        <div tabIndex="0" onKeyDown={this.escFunction}></div>
        Are you sure you want to delete this deck?
        <div onClick={this.props.closeModal} className="close-x-login">
          ×
        </div>
        <div className="double-check">
          <button onClick={this.handleDelete}>Yes, Please Delete</button>
          <button onClick={() => this.props.closeModal()}>
            No, Let's Keep It
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(DeleteDeck);
