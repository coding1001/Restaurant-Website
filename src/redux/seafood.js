import * as ActionTypes from './ActionTypes';

export const Seafood = (state = { 
    isLoading: true,
    errMess: null,
    seafood:[]}, 
    action) => {

    switch (action.type) {
        case ActionTypes.ADD_SEAFOOD:
            return {...state, isLoading: false, errMess: null, seafood: action.payload};

        case ActionTypes.SEAFOOD_LOADING:
            return {...state, isLoading: true, errMess: null, seafood: []}

        case ActionTypes.SEAFOOD_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};