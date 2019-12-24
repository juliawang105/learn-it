import { connect } from "react-redux";
import React from "react";

class HomeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage">
        <div className="notes">
          <span>Personalized Notes</span>
          <br></br>
          <span>Effective Learning</span>
          <br></br>
          <span>Maximized Time</span>
        </div>
      </div>
    );
  }
}

// const mSTP = state => ({

// });

// const mDTP = dispatch => ({

// });

export default connect(null, null)(HomeForm);
