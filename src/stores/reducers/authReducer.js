import { LOGIN,
    LOGOUT } from '../constants/actionTypes';
require('dotenv').config();

const initAuthState = {
    isLoggedIn: localStorage.getItem('token') !== null,
    token: localStorage.getItem('token') || null,
    // is_seller: JSON.parse(localStorage.getItem('is_seller')) || false
}

const loginReducer = (state, action) => {
    console.log(action)


    return {
        ...state,
        isLoggedIn: true,
        token: action.token,
        // is_seller: action.is_seller
    }
}

const logoutReducer = state => {
    return {
        ...state,
        isLoggedIn: false,
        token: null
    }
}

const authReducer = (state = initAuthState, action) => {
    switch (action.type) {
        case LOGIN:
            return loginReducer(state.action)
        case LOGOUT:
            return logoutReducer(state)
        default:
            return state
    }
}

export default authReducer