import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const doneSlice = createSlice({
    name: 'done',
    initialState,
    reducers: {
        addDone: (state, actions) => {
            state.value.push(actions.payload)
        },
    }
})

export const { addDone } = doneSlice.actions
export default doneSlice.reducer