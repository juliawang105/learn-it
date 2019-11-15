import * as UserUtil from '../util/card_util';

export const RECEIVE_USER = 'RECEIVE_USER'

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchUser = userId => dispatch => (
    UserUtil.fetchUser(userId)
        .then( res => dispatch(receiveUser(res)))
);