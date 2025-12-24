import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from './AuthSlice.js'
import themeSlice from "./themeSlice.js";
const Store = configureStore({
    reducer: {
        auth: AuthSlice,
        theme: themeSlice
    }
})

export default Store;