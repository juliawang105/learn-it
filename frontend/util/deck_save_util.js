export const saveDeck = (save) => (
    $.ajax({
        url: `/api/saves`,
        method: 'POST',
        data: { save }
    })
);

export const unsaveDeck = saveId => (
    $.ajax({
        url: `/api/saves/${saveId}`,
        method: `DELETE`
    })
);

export const fetchSave = (saveId) => (
    $.ajax({
        url: `api/saves/${saveId}`,
        method: `GET`
    })
);

export const fetchSaves = (learner_id) =>
  $.ajax({
    url: `/api/saves/?learner_id=${learner_id}`,
    method: `GET`
  });