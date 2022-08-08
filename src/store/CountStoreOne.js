import {createStore} from "redux"

const incrementCounter = (value) => {
    return {
        type: "INCREMENT",
        value
    }
}

const decrementCounter = (value) => {
    return {
        type: "DECREMENT",
        value
    }
}

const intialState = {
    value : 0
}

const reducer = (state = intialState, action) => {
    console.log(`Action ${action.type} triggered`)
    switch(action.type){
        case "INCREMENT" :
            return {
                value: state.value + action.value
            }
        
        case "DECREMENT" :
            return {
                value: state.value - action.value
            }

        default:
            return state
    }
}

export const StoreOne = createStore(reducer)
console.log(StoreOne)

StoreOne.dispatch(incrementCounter(1))
StoreOne.dispatch(incrementCounter(2))
StoreOne.dispatch(decrementCounter(3))
console.log(StoreOne.getState())
