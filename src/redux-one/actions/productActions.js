import { ActionsTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionsTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionsTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removedProduct = () => {
    return {
        type: ActionsTypes.REMOVE_SELECTED_PRODUCT,
        payload: "REMOVED"
    }
}