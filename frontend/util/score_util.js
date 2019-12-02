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
       url: `api/scores/${score.id}`,
       method: 'PATCH',
       data: { score }
   }) 
);