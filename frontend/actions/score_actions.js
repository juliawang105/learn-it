import * as ScoreUtil from "../util/score_util";

export const RECEIVE_SCORE = "RECEIVE_SCORE";
export const RECEIVE_SCORES = "RECEIVE_SCORES ";

const receiveScore = score => ({
  type: RECEIVE_SCORE,
  score
});

const receiveScores = scores => ({
  type: RECEIVE_SCORES,
  scores
});

export const fetchScore = scoreId => dispatch =>
  ScoreUtil.fetchScore(scoreId)
    .then(res => dispatch(receiveScore(res)));

export const saveScore = score => dispatch =>
  ScoreUtil.saveScore(score)
    .then(res => dispatch(receiveScore(res)));

export const updateScore = score => dispatch =>
  ScoreUtil.updateScore(score)
    .then(res => dispatch(receiveScore(res)));

export const fetchScores = (deck_id, learner_id) => dispatch =>
  ScoreUtil.fetchScores(deck_id, learner_id)
    .then(res =>
    dispatch(receiveScores(res))
  );
