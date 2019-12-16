// import { connect } from 'react-redux';
// import { createScore, updateScore } from '../../actions/score_actions';
// import ScoreBar from './scorebar'

// const mSTP = (state, ownProps) => {
//     //debugger
//    return{
//        deck: state.entities.decks,
//        cards: Object.values(state.entities.cards),
//        user: state.session.id
//    }
// }

// const mDTP = dispatch => ({
//     createScore: score => dispatch(createScore(score)),
//     updateScore: score => dispatch(updateScore(score)),
//     fetchScores: (deckId, learner_id) => dispatch(fetchScores(deckId, learner_id))
// })

// export default connect(mSTP, mDTP)(ScoreBar)