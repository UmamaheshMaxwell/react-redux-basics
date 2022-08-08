import { GET_MAGAZINES } from "../constants/magazine-types"

const intialState = {
    magazines: []
}

export const magazineReducer = (state = intialState, {type, payload}) => {
    switch(type) {
        case GET_MAGAZINES : 
            return {...state, magazines:payload}
        default :
            return {...state}
    }
}