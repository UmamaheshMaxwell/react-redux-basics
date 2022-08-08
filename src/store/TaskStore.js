import {createStore} from "redux"

const intialState = {
    tasks : []
}

const reducer = (state = intialState, action) => {
    console.log(action.task)
    switch(action.type){
        case "ADD_TASK" :
            return {
                ...state,
                tasks: [...state.tasks, action.task]
            }
        case "REMOVE_TASK" :
            return {
                ...state,
                tasks: state.tasks.filter(task => task !== action.task)
            }
    }
}

const TaskStore = createStore(reducer)
console.log(TaskStore)
TaskStore.dispatch({type: "ADD_TASK",task: "TASK_ONE"})
TaskStore.dispatch({type: "ADD_TASK",task: "TASK_TWO"})
TaskStore.dispatch({type: "REMOVE_TASK",task: "TASK_ONE"})
console.log(TaskStore.getState())
