import {
    ADD_TO_CART,
    UPDATE_ON_CART,
    REMOVE_FROM_CART
  } from '../constants/actionTypes'
  import axios from 'axios'

  export const addChairsOrders = () => {
    return dispatch => {
        axios.post("http://localhost:5000/api/orders/chair-order/").then((data) => {
        // console.log(data)
        dispatch({ type: ADD_TO_CART, payload: data.data })
      })
    }
  }

  // export const addChairsOrders = () => {
  //   return dispatch => {
  //       axios.get("http://localhost:5000/api/products/chairs").then((data) => {
  //       // console.log(data)
  //       dispatch({ type: GET_PRODUCT_CHAIRS, payload: data.data })
  //     })
  //   }
  // }