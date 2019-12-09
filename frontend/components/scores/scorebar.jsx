import React from 'react';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import { withRouter } from 'react-router-dom';

class ScoreBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: "",
      scores: this.props.scores,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchDeck(this.props.match.params.deckId).then(res => {
      // debugger
      this.setState({
        scores: res.payload.scores
      });
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ score: e.target.value });
    // debugger
    let score = {
      learner_id: this.props.user,
      card_id: this.props.currCard.id,
      score: parseInt(e.target.value)
    };
    //debugger
    let scores = Object.values(this.props.scores).map(score => {
      return score.card_id;
    });
    // debugger
    if (Object.keys(this.props.scores).length === 0) {
      this.props.saveScore(score);
    }
    if (!scores.includes(score.card_id)) {
      this.props.saveScore(score);
    }

    if (scores.includes(score.card_id)) {
      this.props.updateScore(score);
    }
    
    // window.location.reload(true)
    
  }

  render() {
    //   debugger
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