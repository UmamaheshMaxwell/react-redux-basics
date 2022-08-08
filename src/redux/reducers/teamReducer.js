import { GET_TEAMS } from "../constants/team-types"

const initialState = {
    teams : []
}

export const teamReducer = (state= initialState, {type, payload}) => {
    switch(type) {
        case GET_TEAMS : 
            return {...state, teams: payload}
        default :
            return {...state}
    }

}