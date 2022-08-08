import { ADD_TASK_CONST, REMOVE_TASK_CONST } from "../constants/constants"

export const ADD_TASK = (task) => {
    return {
        type: ADD_TASK_CONST,
        task
    }
}

export const REMOVE_TASK = (task) => {
    return {
        type: REMOVE_TASK_CONST,
        task
    }
}