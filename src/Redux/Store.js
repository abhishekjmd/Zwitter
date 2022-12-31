import { configureStore } from "@reduxjs/toolkit";
import HomeScreenApiSlice from "./Reducers/HomeScreenSlice";
import UserReducer from "./Reducers/TokenReducer";

 const store = configureStore({
        reducer: {
                AccessToken: UserReducer,
                homeReducer: HomeScreenApiSlice
        },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
        }),
})

export default store;
