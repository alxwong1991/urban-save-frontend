import {
    ADD_TO_CART,
    UPDATE_ON_CART,
    REMOVE_FROM_CART
  } from '../constants/actionTypes'
  import axios from 'axios'

// get chair from api

  export const addChairsOrders = () => {
    return dispatch => {
        axios.post(`${process.env.REACT_APP_API_URL}api/orders/chair-order/`).then((data) => {
        // console.log(data)
        dispatch({ type: ADD_TO_CART, payload: data.data })
      })
    }
  }
