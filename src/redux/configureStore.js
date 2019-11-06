import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import { Mains } from './mains';
import { Desserts } from './desserts';
import { Starters } from './starters';
import { Seafood } from './seafood.js';
import { Veg } from './veg.js';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            starters: Starters,
            mains: Mains,
            desserts: Desserts,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            seafood: Seafood,
            veg: Veg,

            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}
