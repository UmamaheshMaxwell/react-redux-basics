import {createStore} from "redux"

const intialState = {
    value : 0
}

const reducer = (state = intialState, action) => {
    console.log(`Action ${action.type} triggered`)
    switch(action.type){
        case "INCREMENT" :
            return {
                value: state.value + 1
            }
        
        case "DECREMENT" :
            return {
                value: state.value - 1
            }

        default:
            return state
    }
}

export const Store = createStore(reducer)
console.log(Store)


Store.dispatch({type: "INCREMENT"})
Store.dispatch({type: "INCREMENT"})
Store.dispatch({type: "INCREMENT"})
Store.dispatch({type: "DECREMENT"})
Store.dispatch({type: "DECREMENT"})
Store.dispatch({type: "DECREMENT"})
//Store.subscribe(() => console.log(`This is called`))


console.log(Store.getState())
