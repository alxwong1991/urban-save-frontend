import {
  ADD_TO_CART,
  UPDATE_ON_CART,
  REMOVE_FROM_CART
} from '../constants/actionTypes'
import axios from 'axios'

require('dotenv').config()

// chair orders
export const addChairsOrders = (order, product) => {
  console.log(order, product)
  return dispatch => {
    axios.post(`${process.env.REACT_APP_API_URL}api/orders/chair-order/`, product, order).then((data) => {
      dispatch({ type: ADD_TO_CART, payload: data.data })
    })
  }
}

export const updateChairsOrders = (order, order_id, product, product_id) => {
  return dispatch => {
    axios.put(`${process.env.REACT_APP_API_URL}api/orders/chair-order/${order_id},${product_id}`, order, product).then((data) => {
      dispatch({ type: UPDATE_ON_CART, payload: data.data })
    })
  }
}

export const deleteChairsOrders = (order_id, product_id) => {
  return dispatch => {
    axios.delete(`${process.env.REACT_APP_API_URL}api/orders/chair-order/${order_id},${product_id}`).then((data) => {
      dispatch({ type: REMOVE_FROM_CART, payload: data.data })
    })
  }
}

// // table orders
// export const addTablesOrders = (order, product) => {
//   console.log(order, product)
//   return dispatch => {
//     axios.post(`${process.env.REACT_APP_API_URL}api/orders/table-order/`, product, order).then((data) => {
//       dispatch({ type: ADD_TO_CART, payload: data.data })
//     })
//   }
// }

// export const updateTablesOrders = (order, order_id, product, product_id) => {
//   return dispatch => {
//     axios.put(`${process.env.REACT_APP_API_URL}api/orders/table-order/${order_id},${product_id}`, order, product).then((data) => {
//       dispatch({ type: UPDATE_ON_CART, payload: data.data })
//     })
//   }
// }

// export const deleteTablesOrders = (order_id, product_id) => {
//   return dispatch => {
//     axios.delete(`${process.env.REACT_APP_API_URL}api/orders/table-order/${order_id},${product_id}`).then((data) => {
//       dispatch({ type: REMOVE_FROM_CART, payload: data.data })
//     })
//   }
// }
