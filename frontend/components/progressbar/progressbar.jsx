import React from 'react';
import { render } from 'react-dom';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { withRouter } from "react-router-dom";
import ScoreBar from '../scores/scorebar';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: this.props.scores,
      total: 0,
      update: false
    };

    // this.rerenderParent = this.rerenderParent.bind(this);
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

  //  rerenderParent(){
  //   //   debugger
  //     let boolean = !(this.state.update)
  //     this.setState({update: boolean})
  //   //   this.props.fetchDeck(this.props.match.params.deckId).then(res => {
  //   //    this.setState({
  //   //      scores: res.payload.scores
  //   //    });
  //   //  });
  // }

  componentDidUpdate(oldProps) {
    if(oldProps.currCard.id !== this.props.currCard.id){
      this.props.fetchDeck(this.props.match.params.deckId).then(res => {
        this.setState({
        scores: res.payload.scores
        });
 
      });
    }
  }

  render() {
    let sum = 0;
    let total;
    // debugger
    if (!Object.keys(this.state.scores).length) {
      total = 0;
    } else {
      let cardScores = Object.values(this.state.scores);
      for (let i = 0; i < cardScores.length; i++) {
        sum += cardScores[i].score;
      }
      total = (sum / (5 * cardScores.length)) * 100;
    
    }
    // debugger
    return (
      <div className="progress">
         {/* <ScoreBar
            deck={this.props.deck}
            cards={this.props.cards}
            currCard={this.props.currCard.id}
            saveScore={this.props.saveScore}
            updateScore={this.props.updateScore}
            fetchScore={this.props.fetchScore}
            user={this.props.user}
            scores={this.props.scores}
            fetchDeck={this.props.fetchDeck}
            update={this.state.update}
            rerenderParent={this.rerenderParent}
          /> */}
        
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
      </div>
    );
  }
}

export default withRouter(ProgressBar)


