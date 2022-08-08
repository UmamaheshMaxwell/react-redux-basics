import { fakeMagazineApi } from "../../fakeUserApi/fakeMagazineApi"
import { GET_MAGAZINES } from "../constants/magazine-types"

export const getMagazines = () => async (dispatch) => {
    const response = await fakeMagazineApi.get("/magazines")
    dispatch({type: GET_MAGAZINES, payload: response.data.data})
}
 

