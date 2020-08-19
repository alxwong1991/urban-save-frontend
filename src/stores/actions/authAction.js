import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../constants/actionTypes'
import authHelper from '../helpers/authHelper'
import axios from 'axios'
var jwtDecode = require('jwt-decode')


require('dotenv').config()

export const login = (email, password) => {
    return dispatch => {
        axios.post(`${process.env.REACT_APP_API_URL}api/login/`, email, password).then((data) => {
            dispatch({ type: LOGIN_ATTEMPT, payload: data.data})
        })
    }
}

export const logout = () => {
    localStorage.removeItem('user');
    return {type: LOGOUT};
}

// export const addChairsOrders = (order, product) => {
//     console.log(order, product)
//     return dispatch => {
//         axios.post(`${process.env.REACT_APP_API_URL}api/orders/chair-order/`, product, order).then((data) => {
//         dispatch({ type: ADD_TO_CART, payload: data.data})
//       })
//     }
//   }