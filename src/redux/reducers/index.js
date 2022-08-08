import { combineReducers } from "redux";
import { magazineReducer } from "./magazineAction";
import { productByIdReducer, productReducer, removeProductReducer } from "./productReducer";
import { teamReducer } from "./teamReducer";
import { userReducer } from "./userReducer";

export const reducer = combineReducers({
    userList : userReducer,
    productList: productReducer,
    product: productByIdReducer,
    magazineList: magazineReducer,
    teamList: teamReducer
})