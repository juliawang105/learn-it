import React from 'react';
import { render } from 'react-dom';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { withRouter } from "react-router-dom";

class ProgressBar extends React.Component {
    render(){
      // const percentage = 10;
      let sum = 0;
      debugger
      let cardScores = Object.values(this.props.scores)
        for(let i = 0; i < cardScores.length; i ++ ){
            sum += cardScores[i].score;
          }

      let total = ((sum) / (5 * cardScores.length)) * 100
      console.log(total);
      debugger;
      return (
        <div className="progress">
          <CircularProgressbar
            value={total}
            text={`${total}%`}
            styles={{
              // Customize the root svg element
              root: {},
              // Customize the path, i.e. the "completed progress"
              path: {
                // Path color
                stroke: `rgba(62, 152, 199, ${total / 100})`,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Customize transition animation
                transition: "stroke-dashoffset 0.5s ease 0s",
                // Rotate the path
                transform: "rotate(0.25turn)",
                transformOrigin: "center center"
              },
              // Customize the circle behind the path, i.e. the "total progress"
              trail: {
                // Trail color
                stroke: "#d6d6d6",
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Rotate the trail
                transform: "rotate(0.25turn)",
                transformOrigin: "center center"
              },
              // Customize the text
              text: {
                // Text color
                fill: "#f88",
                // Text size
                fontSize: "10px"
              },
              // Customize background - only used when the `background` prop is true
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


