import { fakeTeamsApi } from "../../fakeUserApi/fakeTeamApi"
import { GET_TEAMS } from "../constants/team-types"

export const getTeams = () => {
    return async function (dispatch) {
        const response = await fakeTeamsApi.get("/comments")
        dispatch({type: GET_TEAMS, payload: response.data})
    }
}