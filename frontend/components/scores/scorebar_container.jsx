import { connect } from 'react-redux';
import { createScore, updateScore } from '../../actions/score_actions';

const mDTP = dispatch => ({
    createScore: score => dispatch(createScore(score)),
    updateScore: score => dispatch(updateScore(score)),
})

// export default connect(null, mDTP)(ScoreBar)