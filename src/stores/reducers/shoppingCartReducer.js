import {
    ADD_TO_CART,
    UPDATE_ON_CART,
    REMOVE_FROM_CART
  } from '../constants/actionTypes'

const initState = {
    chairOrder: []
}

const shoppingCartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                chairOrder: [...action.payload]
            }
            default:
                return {
                    ...state
                }
    }
}

export default shoppingCartReducer