import * as ScoreUtil from '../util/score_util';

export const RECEIVE_SCORE = 'RECEIVE_SCORE';

const receiveScore = score => ({
    type: RECEIVE_SCORE,
    score
});

export const fetchScore = scoreId => dispatch => (
    ScoreUtil.fetchScore(scoreId)
        .then(res => dispatch(receiveScore(res)))
);

export const updateScore = score => dispatch => (
    ScoreUtil.updateScore(score)
        .then(res => dispatch(receiveScore(res)))
);