import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todos'
export default configureStore({
    reducer: {
        todos: todosReducer,
    }
})