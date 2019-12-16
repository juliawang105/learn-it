import React from 'react';
import { render } from 'react-dom';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { NavLink, withRouter } from "react-router-dom";
import ScoreBar from '../scores/scorebar';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: this.props.scores,
      total: 0,
      update: false
    };
  }

  componentDidMount() {
   
    this.props.fetchScores(this.props.match.params.deckId, this.props.user)
      .then(res => {
        this.setState({ scores: res.scores })
      })
  }

  // componentDidUpdate(oldProps) {
    
  //   if ( oldProps.currCard.id !== this.props.currCard.id ) {
  //     this.props.fetchScores(this.props.match.params.deckId, this.props.user)
  //       .then(res => {
  //         this.setState({ scores: res.scores })
  //     });

  //     if (this.props.currCard.id === this.props.cards[this.props.cards.length-1].id) {
  //       // debugger;
  //       this.props.fetchScores(this.props.match.params.deckId, this.props.user)
  //         .then(res => {
  //           this.setState({ scores: res.scores })
  //         })
  //     }

  //     if(this.props.currCard === ""){
  //       this.props.fetchScores(this.props.match.params.deckId, this.props.user)
  //         .then(res => {
  //           this.setState({ scores: res.scores })
  //         })
  //     }
  //   }
    
  // }

  render() {
    //if(!this.props.scores) return null;
    //debugger
    let sum = 0;
    let total;
    let cards = this.props.cards;
    // debugger
    if (!Object.keys(this.props.scores).length) {
      total = sum;
    } else {
      let cardScores = Object.values(this.props.scores);
      for (let i = 0; i < cardScores.length; i++) {
        sum += cardScores[i].score;
      }
      total = (sum / (5 * cards.length)) * 100;
    
    }
    
    return (
      <div className="progress">
        <div className="mastery-title">
          Mastery Score
          </div>
        <CircularProgressbar
          value={total}
          text={` ${Math.floor(total)}%`}
          styles={{
            path: {
              stroke: `rgba(62, 152, 199, ${total/ 100})`,
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 0.5s ease 0s",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center"
            },
            trail: {
              stroke: "#d6d6d6",
              strokeLinecap: "butt",
              transform: "rotate(0.25turn)",
              transformOrigin: "center center"
            },
            text: {
              fontSize: "16px",
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif"
            },
            background: {
              fill: "#3e98c7"
            }
          }}
        />
        <NavLink id="see-deck" to={`/decks/${this.props.deck.id}`}>See All Cards</NavLink>
      </div>
    );
  }
}

export default withRouter(ProgressBar)


