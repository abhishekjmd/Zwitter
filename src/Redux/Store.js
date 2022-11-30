import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/TokenReducer";

const store = configureStore({
    reducer: UserReducer
})

export default store;