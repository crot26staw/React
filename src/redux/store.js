import { configureStore } from "@reduxjs/toolkit";
import toodoSlice from "./slices/toodoSlice";
import doneSlice from "./slices/doneSlice";

export const store = configureStore({
    reducer: {
        toodo: toodoSlice,
        done: doneSlice
    },
})