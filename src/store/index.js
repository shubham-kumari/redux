import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'


// const counterReducer = (state = initialState, action ) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter

//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter

//         }
//     }
//     if(action.type === 'toggle'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state;
// }
// const store = createStore(counterReducer); // createStore wants a ponter to reducer function as a parameter



const store = configureStore({
    reducer: {
        counterState: counterReducer,
        authState: authReducer
    }
});
export default store;