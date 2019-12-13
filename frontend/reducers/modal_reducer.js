import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';


export const modalReducer = (state = "", action) => {
    Object.freeze(state);

    let newState = state; 

    switch(action.type){
        case OPEN_MODAL:
            // debugger
            return Object.assign( {}, state, { modal: action.modal, data: action.data })
        case CLOSE_MODAL:
            newState = ""
            return newState; 
        default:
            return state;
    }
}; 
