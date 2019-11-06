import * as ActionTypes from './ActionTypes';

export const Starters = (state = { 
    isLoading: true,
    errMess: null,
    starters:[]}, 
    action) => {

    switch (action.type) {
        case ActionTypes.ADD_STARTERS:
            return {...state, isLoading: false, errMess: null, starters: action.payload};

        case ActionTypes.STARTERS_LOADING:
            return {...state, isLoading: true, errMess: null, starters: []}

        case ActionTypes.STARTERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};