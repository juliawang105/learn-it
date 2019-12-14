export const fetchTags = () => (
    $.ajax({
        url: `/api/tags`,
        method: `GET`
    })
);

export const fetchTag = (tagId) => {
    $.ajax({
      url: `/api/tags/${tagId}`,
      method: `GET`
    })
};

export const createTag = (tag) => {
  // console.log(tag.name)
  return $.ajax({
    url: `/api/tags`,
    method: `POST`,
    data: { tag } 
  })
};