import {
    ADD_TO_CART,
    UPDATE_ON_CART,
    REMOVE_FROM_CART
  } from '../constants/actionTypes'
  import axios from 'axios'

// get chair from api

  // export const addChairsOrders = () => {
  //   return dispatch => {
  //       axios.post(`${process.env.REACT_APP_API_URL}/api/orders/chair-order/`, {order_id, product_id}).then((data) => {
  //       // console.log(data)
  //       dispatch({ type: ADD_TO_CART, payload: data.data })
  //     })
  //   }
  // }

  // export const addChairsOrders = () => {
  //   return dispatch => {
  //       axios.get("http://localhost:5000/api/products/chairs").then((data) => {
  //       // console.log(data)
  //       dispatch({ type: GET_PRODUCT_CHAIRS, payload: data.data })
  //     })
  //   }
  // }