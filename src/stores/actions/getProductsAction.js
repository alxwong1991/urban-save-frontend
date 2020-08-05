import {
  GET_PRODUCT_CHAIRS,
  GET_PRODUCT_TABLES,
  GET_PRODUCT_OTHER_EQUIPMENTS
} from '../constants/actionTypes'
import axios from 'axios'

// //get product chairs from api
// export const getProductChairs = () => {
//   console.log("getProductChairs")
//   return dispatch => {
//       axios.get("http://localhost:5000/api/products/chairs").then((data) => {
//       // console.log(data)
//       dispatch({ type: GET_PRODUCT_CHAIRS, payload: data.data })
//     })
//   }
// }

export const getProductChairs = () => {
  return dispatch => {
      axios.get(`${process.env.REACT_APP_API_URL}api/products/chairs`).then((data) => {
      dispatch({ type: GET_PRODUCT_CHAIRS, payload: data.data })
    })
  }
}

export const getProductTables = () => {
  return dispatch => {
      axios.get(`${process.env.REACT_APP_API_URL}api/products/tables`).then((data) => {
      dispatch({ type: GET_PRODUCT_TABLES, payload: data.data })
    })
  }
}

export const getProductOtherEquipments = () => {
  return dispatch => {
      axios.get(`${process.env.REACT_APP_API_URL}api/products/other-equipments`).then((data) => {
      // console.log(data)
      dispatch({ type: GET_PRODUCT_OTHER_EQUIPMENTS, payload: data.data })
    })
  }
}

