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