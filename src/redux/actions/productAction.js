import { GET_PRODUCTS, GET_PRODUCT_BY_ID, REMOVE_PRODUCT } from "../constants/product-types"

export const getProducts = (products) => {
    return {
        type: GET_PRODUCTS,
        products
    }
}

export const getProductbyId = (product) => {
    return {
        type: GET_PRODUCT_BY_ID,
        product
    }
}

export const removeProduct =() => {
    return {
        type: REMOVE_PRODUCT
    }
}