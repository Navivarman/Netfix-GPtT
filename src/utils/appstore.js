import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlices"

const appStore = configureStore({
    reducer:{
        movies:moviesReducer
    }
})

export default appStore;