import * as TagUtil from '../util/tag.util';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS'
export const RECEIVE_TAG = 'RECEIVE_TAG'

const receiveAllTags = tags => ({
    type: RECEIVE_ALL_TAGS,
    tags
});

const receiveTag = tag => {
    // debugger
    return {
      type: RECEIVE_TAG,
      tag
    };
    
};

export const fetchTags = () => dispatch => (
    TagUtil.fetchTags()
        .then( res => dispatch(receiveAllTags(res)))
);

export const fetchTag = tagId => dispatch => (
    TagUtil.fetchTags(tagId)
        .then(res => dispatch(receiveTag(res)))
);

export const createTag = tag => dispatch => {
    // debugger
    return TagUtil.createTag(tag)
        .then( res => dispatch(receiveTag(res)))
               // dispatch(receiveTag(res)))
}; 