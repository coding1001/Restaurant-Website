import * as ActionTypes from './ActionTypes';

export const Desserts = (state = { 
    isLoading: true,
    errMess: null,
    desserts:[]}, 
    action) => {

    switch (action.type) {
        case ActionTypes.ADD_DESSERTS:
            return {...state, isLoading: false, errMess: null, desserts: action.payload};

        case ActionTypes.DESSERTS_LOADING:
            return {...state, isLoading: true, errMess: null, desserts: []}

        case ActionTypes.DESSERTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};