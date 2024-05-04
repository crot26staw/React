import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id: 1,
            name: 'Покупки',
            color: "blue",
            lists: [
                {
                    id: 1,
                    value: 'Купить хлеб'
                },
                {
                    id: 2,
                    value: 'Купить картофель'
                }
            ],
        }
    ],
    activeItem: 0
}

export const toodoSlice = createSlice({
    name: 'toodo',
    initialState,
    reducers:{
        addToodo: (state, actions) => {
            state.value.push(actions.payload);
        },
        removeToodo: (state, actions) => {
            state.value = state.value.filter(item => item.id !== actions.payload )
        },

        addList: (state, actions) =>{
            state.value[actions.payload.idx].lists.push({
                id: actions.payload.id,
                value: actions.payload.value,
            })
        },

        removeList: (state, actions) =>{
            state.value[state.activeItem].lists = state.value[state.activeItem].lists.filter(item => item.id !== actions.payload)
        },

        activeCat: (state, actions) =>{
            state.activeItem = actions.payload
        }
    }
})

export const {addToodo, removeToodo, addList, removeList, activeCat} = toodoSlice.actions
export default toodoSlice.reducer