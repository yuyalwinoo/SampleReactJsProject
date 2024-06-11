import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const todoInitialState = {
    isLoading : false,
    data : [],
    isError : false
}
export const getTodos = createAsyncThunk('getTodos',async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json();
})
const todoSlice = createSlice({
    name : 'todo',
    initialState : todoInitialState,
    extraReducers : (builder)=>{
        builder.addCase(getTodos.pending,(state)=>{
            state.isLoading = true;
        }),
        builder.addCase(getTodos.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        }),
        builder.addCase(getTodos.rejected,(state)=>{
            state.isLoading = false;
            state.isError = true
        })
    }

})

export default todoSlice.reducer;