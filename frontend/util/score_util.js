export const saveScore = (score) => (
   $.ajax({
       url: `api/scores`,
       method: 'POST',
       data: { score }
   }) 
);

export const fetchScore = (scoreId) => (
    $.ajax({
        url:  `/api/scores/${scoreId}`,
        method: `GET`
    })
);

export const updateScore = (score) => (
   $.ajax({
       url: `api/scores/${score.card_id}`,
       method: 'PATCH',
       data: { score }
   }) 
);

export const fetchScores = (deck_id, learner_id) => (
    $.ajax({
      url: `/api/scores/?deck_id=${deck_id}learner_id=${learner_id}`,
      method: `GET`
    })
);