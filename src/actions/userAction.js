import { GET_USERS_CONST } from "../constants/constants"

export const GET_USERS = (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => ({type: GET_USERS_CONST, users: data}))
}