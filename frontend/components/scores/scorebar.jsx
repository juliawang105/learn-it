import React from 'react';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import { withRouter } from 'react-router-dom';
import ProgressBar from '../progressbar/progressbar'

class ScoreBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: "",
      scores: this.props.scores
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
   
    this.props.fetchScores(this.props.match.params.deckId, this.props.user)
      .then(res => {
        this.setState({scores: res.scores})
      })
  }

  // componentDidUpdate(oldProps) {
  //   // debugger;
  //   if (oldProps.currCard.id !== this.props.currCard.id) {
  //     this.props.fetchScores(this.props.match.params.deckId, this.props.user)
  //       .then(res => {
  //         this.setState({ scores: res.scores })
  //       });

  //     if (this.props.currCard.id === this.props.cards[this.props.cards.length - 1].id) {
  //       // debugger;
  //       this.props.fetchScores(this.props.match.params.deckId, this.props.user)
  //         .then(res => {
  //           this.setState({ scores: res.scores })
  //         })
  //     }
  //   }
  // }

  handleClick(e) {
    e.preventDefault();
    this.setState({ score: e.target.value });
    // debugger
    let score = {
      deck_id: this.props.deck.id,
      learner_id: this.props.user,
      card_id: this.props.currCard.id,
      score: parseInt(e.target.value)
    };
    // debugger
    let scores = Object.values(this.state.scores).map(score => {
      return score.card_id;
    });
    // debugger
    if (Object.keys(this.state.scores).length === 0) {
      this.props.saveScore(score);
      return
    }
    if (!scores.includes(score.card_id) && Object.keys(this.state.scores).length > 0) {
      this.props.saveScore(score);
      return
    }

    if (scores.includes(score.card_id)) {
      this.props.updateScore(score);
      return
    } else if (!scores.includes(score.card_id)) {
      this.props.saveScore(score);
      return
    }
  }

  render() {
    if(!this.state.scores) return null;
    debugger
    return (
      <div className="scorebar">
        <button onClick={this.handleClick} className="score" value="1">
          1
          <br/>
          Not At All
        </button>
        <button onClick={this.handleClick} className="score" value="2">
          2
        </button>
        <button onClick={this.handleClick} className="score" value="3">
          3
        </button>
        <button onClick={this.handleClick} className="score" value="4">
          4
        </button>
        <button onClick={this.handleClick} className="score" value="5">
          5
          <br />
          Perfectly
        </button>
      </div>
    );
  }
}

export default withRouter(ScoreBar)