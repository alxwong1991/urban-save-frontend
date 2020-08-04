import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import getProductsReducer from './reducers/getProductsReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
    getProductsReducer: getProductsReducer,
    shoppingCartReducer: shoppingCartReducer
})

const store =  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;