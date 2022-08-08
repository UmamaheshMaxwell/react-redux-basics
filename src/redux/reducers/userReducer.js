import { GET_USERS } from "../constants/user-types"

const intialState = {
    users: []
}

export const userReducer = (state= intialState, action) => {
    switch(action.type){
        case GET_USERS : 
            return {
                ...state,  users:action.payload
            }
        default :
        return {...state}
    }

}