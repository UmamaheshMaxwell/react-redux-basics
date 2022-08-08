import { GET_USERS_CONST } from "../constants/constants"

const  intialState = {
    users : []
}

export const userReducer = (state = intialState, action) => {
    switch(action.type){
        case GET_USERS_CONST : 
            return {
                ...state,
                users: action.users
            }
    }
}