import {
    ADD_TO_CART,
    UPDATE_ON_CART,
    REMOVE_FROM_CART
  } from '../constants/actionTypes'

const initCartState = {
    addChair: [],
    updateChair: [],
    removeChair: []

}

const shoppingCartReducer = (state = initCartState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                addChair: [...action.payload]
            }
        case UPDATE_ON_CART:
            return {
                ...state,
                updateChair: [...action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                removeChair: [...action.payload]
            }
            default:
                return {
                    ...state
                }
    }
}

export default shoppingCartReducer