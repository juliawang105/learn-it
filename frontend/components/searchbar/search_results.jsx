import React from "react";
import { withRouter } from "react-router-dom";
import DeckItem from "../decks/deck_index_item";
class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      decks: []
    };
  }

  componentDidMount() {
    let ids = this.props.history.location.search.slice(5);
    let idArr = ids.split(",").map(id => {
      return parseInt(id);
    });

    let result = [];

    for (let i = 0; i < idArr.length; i++) {
      this.props.fetchDeck(idArr[i]).then(res => {
        result.push(res.payload.deck);
        this.setState({ decks: result });
      });
    }
  }

  componentDidUpdate(oldProps) {
    if (this.props.location.search === "?ids=") {
      return;
    }

    if (oldProps.location.search !== this.props.location.search) {
      let ids = this.props.history.location.search.slice(5);
      let idArr = ids.split(",").map(id => {
        return parseInt(id);
      });

      let result = [];

      for (let i = 0; i < idArr.length; i++) {
        this.props.fetchDeck(idArr[i]).then(res => {
          result.push(res.payload.deck);
          this.setState({ decks: result });
        });
      }
    }
  }

  render() {
    if (!this.state.decks) return null;
    let text;
    let matches;
    //console.log(this.props.location.search)
    if (this.props.location.search === "?ids=") {
      text = "Sorry, there are no matches.";
    } else {
      text = "Your Search Results";
      matches = this.state.decks.map(deck => {
        return (
          <DeckItem
            key={deck.id}
            deck={deck}
            session={this.props.session}
            openModal={this.props.openModal}
            closeModal={this.props.closeModal}
            deleteDeck={this.props.deleteDeck}
          />
        );
      });
    }

    return (
      <div className="search_index">
        <div className="results">{text}</div>
        <div className="card-results">{matches}</div>
      </div>
    );
  }
}

export default withRouter(SearchResults);
