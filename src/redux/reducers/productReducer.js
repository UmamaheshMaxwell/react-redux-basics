import { GET_PRODUCTS, GET_PRODUCT_BY_ID, REMOVE_PRODUCT } from "../constants/product-types"

const initialState = {
    products: []
}

export const productReducer = (state=initialState, {type, products}) => {
    switch(type){
        case GET_PRODUCTS : 
            return {...state, products }
        default:
            return state
    }
}

export const productByIdReducer = (state = {}, {type, product}) => {
    switch(type) {
        case GET_PRODUCT_BY_ID : 
            return {...state, ...product}
        case REMOVE_PRODUCT: 
            return {}
        default:
            return state
    }
}