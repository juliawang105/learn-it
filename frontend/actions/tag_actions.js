import * as TagUtil from '../util/tag.util';

export const RECEIVE_ALL_TAGS = 'RECEIVE_ALL_TAGS'
export const RECEIVE_TAG = 'RECEIVE_TAG'

const receiveAllTags = tags => ({
    type: RECEIVE_ALL_TAGS,
    tags
});

const receiveTag = tag => ({
    type: RECEIVE_TAG,
    tag
});

export const fetchTags = () => (
    TagUtil.fetchTags()
        .then( res => dispatch(receiveAllTags(res)))
);

export const fetchTag = tagId => (
    TagUtil.fetchTags(tagId)
        .then(res => dispatch(receiveTag(res)))
);

export const createTag = tag => (
    TagUtil.createTag(tag)
        .then(dispatch(receiveTag(res)))
); 