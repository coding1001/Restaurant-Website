import * as ActionTypes from './ActionTypes';

export const Veg = (state = { 
    isLoading: true,
    errMess: null,
    veg:[]}, 
    action) => {

    switch (action.type) {
        case ActionTypes.ADD_VEG:
            return {...state, isLoading: false, errMess: null, veg: action.payload};

        case ActionTypes.VEG_LOADING:
            return {...state, isLoading: true, errMess: null, veg: []}

        case ActionTypes.VEG_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};