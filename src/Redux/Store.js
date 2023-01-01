import { configureStore } from "@reduxjs/toolkit";
import HomeScreenApiSlice from "./Reducers/HomeScreenSlice";
import LibraryScreenReducer from "./Reducers/LibraryScreenReducer";
import SearchScreenSlice from "./Reducers/SearchScreenSlice";
import UserReducer from "./Reducers/TokenReducer";

 const store = configureStore({
        reducer: {
                AccessToken: UserReducer,
                homeReducer: HomeScreenApiSlice,
                libraryReducer:LibraryScreenReducer,
                SearchReducer:SearchScreenSlice
        },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
        }),
})

export default store;
