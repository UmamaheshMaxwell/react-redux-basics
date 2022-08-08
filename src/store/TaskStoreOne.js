import {createStore} from "redux"
import { ADD_TASK, REMOVE_TASK } from "../actions/taskAction"
import { reducer } from "../reducer/taskReducer"


const TaskStore = createStore(reducer)

TaskStore.dispatch(ADD_TASK("TASK_ONE"))
TaskStore.dispatch(ADD_TASK("TASK_TWO"))
TaskStore.dispatch(REMOVE_TASK("TASK_ONE"))
console.log(TaskStore.getState())
