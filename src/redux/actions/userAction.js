import { GET_USERS } from "../constants/user-types"

export const getUsers = (users) => {
    console.log(users)
    return {
        type: GET_USERS,
        payload: users
    }
}