import { ActionsTypes } from "../constants/action-types"

const initialState = {
    products : [
        {
            id: 1,
            title: "Umamaheswararao Meka",
            category: "JS Developer"
        }
    ]
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionsTypes.SET_PRODUCTS :
            return state
        default:
            return state
    }

}