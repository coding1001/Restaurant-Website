import * as ActionTypes from './ActionTypes';

export const Mains = (state = { 
    isLoading: true,
    errMess: null,
    mains:[]}, 
    action) => {

    switch (action.type) {
        case ActionTypes.ADD_MAINS:
            return {...state, isLoading: false, errMess: null, mains: action.payload};

        case ActionTypes.MAINS_LOADING:
            return {...state, isLoading: true, errMess: null, mains: []}

        case ActionTypes.MAINS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};