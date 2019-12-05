import React from 'react';
import { render } from 'react-dom';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { withRouter } from "react-router-dom";

class ProgressBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      scores: this.props.scores
    }
  }

  componentDidMount(){
    // debugger
    this.props.fetchDeck(this.props.match.params.deckId).then(res => {
      // debugger
      this.setState({
        scores: res.payload.scores
      });
    });
  }

  // componentDidUpdate(oldProps){
  //   debugger
  //   if(oldProps.scores !== this.props.scores)
  //    this.props.fetchDeck(this.props.match.params.deckId).then(res => {
  //      // debugger
  //      this.setState({
  //        scores: res.payload.scores
  //      });
  //    });
  // }
  
    render(){
      let sum = 0;
      let total;

      if(!Object.keys(this.state.scores).length){
        total = 0;
      } else {
        let cardScores = Object.values(this.state.scores);
        for (let i = 0; i < cardScores.length; i++) {
          sum += cardScores[i].score;
        }
        total = (sum / (5 * cardScores.length)) * 100;
      }

      return (
        <div className="progress">
          <CircularProgressbar
            value={total}
            text={` ${Math.floor(total)}%`}
            styles={{
              path: {
                stroke: `rgba(62, 152, 199, ${total / 100})`,
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


