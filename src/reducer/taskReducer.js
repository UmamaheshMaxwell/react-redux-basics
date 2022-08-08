import { ADD_TASK_CONST, REMOVE_TASK_CONST } from "../constants/constants"

const intialState = {
    tasks : []
}

export const reducer = (state = intialState, action) => {
    console.log(action.task)
    switch(action.type){
        case ADD_TASK_CONST :
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            }
        case REMOVE_TASK_CONST :
            return {
                ...state,
                tasks: state.tasks.filter(task => task !== action.task)
            }
    }
}