import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import getProductsReducer from './reducers/getProductsReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store =  createStore(combineReducers({
    product: getProductsReducer,
    cart: shoppingCartReducer
}), 
    composeEnhancers(applyMiddleware(thunk, logger)));

// const store =  createStore(getProductsReducer, composeEnhancers(applyMiddleware(thunk, logger)));

export default store;