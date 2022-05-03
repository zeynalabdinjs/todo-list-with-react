import { createSlice } from "@reduxjs/toolkit";
export const todos = createSlice({
    name: "todos",
    initialState: {
        data: []
    },
    reducers: {
        setData: (state, action) => {
            state.data.push(action.payload)
            state.data = [...new Set(state.data)]
        },
        removeData: (state, action) => {
            for (var i = 0; i < state.data.length; i++) {
                if (state.data.indexOf(state.data[i]) === action.payload) {
                    state.data.splice(i, 1);
                }
            }
        },
        editData: (state, action) => {
            for (var i = 0; i < state.data.length; i++) {
                if (state.data.indexOf(state.data[i]) === action.payload.id) {
                    state.data[i] = action.payload.content
                }
            }
        }
    }
})

export const { setData, removeData, editData } = todos.actions;
export default todos.reducer