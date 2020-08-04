import { GET_PRODUCT_CHAIRS,
GET_PRODUCT_TABLES,
GET_PRODUCT_OTHER_EQUIPMENTS } from '../constants/actionTypes';

const initState = {

    chairData: [],
    tableData: [],
    otherEquipmentData: []

    // chairData: getData().then((data) => {
    //     return data
    // }),
    // chairImage: []
}

const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PRODUCT_CHAIRS:
            return {
                ...state,
                chairData: [...action.payload]
            }
        case GET_PRODUCT_TABLES: 
            return {
                ...state,
                tableData: [...action.payload]
            }
        case GET_PRODUCT_OTHER_EQUIPMENTS:
            return {
                ...state,
                otherEquipmentData: [...action.payload]
            }
        default:
            return {
                ...state
            }
    }
}

export default productsReducer