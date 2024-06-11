import { createSlice } from "@reduxjs/toolkit"

const initialCounterState = {
    counter :0,
    isShow : true
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increase(state){
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

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;