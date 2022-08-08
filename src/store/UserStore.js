import { createStore } from "redux";
import { GET_USERS } from "../actions/userAction";
import {userReducer} from "../reducer/userReducer"

export const UserStore = createStore(userReducer)

console.log(UserStore)
UserStore.dispatch(GET_USERS())
console.log(UserStore.getState())