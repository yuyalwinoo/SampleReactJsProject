import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter :0,
    isShow : true
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increase(state){console.log(state.counter)
            state.counter ++
        },
        increase5(state,action){
            state.counter +=action.payload
        },
        decrease(state){
            state.counter --
        },
        toggle(state){
            state.isShow=!state.isShow
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer,
})
export const counterActions = counterSlice.actions;
export default store;