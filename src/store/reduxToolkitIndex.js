import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./counterReducer";
import authReducer from "./authReducer";
import todoReducer from "./reducers/todo";

const store = configureStore({
    reducer: {
        counter : counterReducer,
        auth : authReducer,
        todos : todoReducer
    }
})

export default store;