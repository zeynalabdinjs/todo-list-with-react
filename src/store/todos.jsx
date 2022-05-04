import { createSlice } from "@reduxjs/toolkit";
export const todos = createSlice({
    name: "todos",
    initialState: {
        data: []
    },
    reducers: {
        setData: (state, action) => {
            state.data.push({ "content": action.payload, "id": Math.floor(Math.random() * 98321) })
        },
        removeData: (state, action) => {
            for (var i = 0; i < state.data.length; i++) {
                if (state.data[i].id === action.payload) {
                    state.data.splice(i, 1)
                }
            }
        },
        editData: (state, action) => {
            for (var i = 0; i < state.data.length; i++) {
                if (state.data[i].id === action.payload.id) {
                    state.data[i].content = action.payload.content
                }
            }
        }
    }
})

export const { setData, removeData, editData, equalData } = todos.actions;
export default todos.reducer