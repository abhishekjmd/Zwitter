import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    BrowseSearch: ''
}

export const BroswerAsyncThunk = createAsyncThunk(
    'BrowserSearch',
    async () => {
        try {
            const ApiKey = await AsyncStorage.getItem('tokenValue')
            const endpointUrl = 'https://api.spotify.com/v1/browse/categories?limit=50';
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + ApiKey },
                json: true
            })
            const result = await res.json();
            console.log(result.categories);
            return result.categories
        } catch (error) {
            console.log(error);
        }
    }
)

const SearchScreenSlice = createSlice({
    initialState,
    name: 'BrowseSearchScreen',
    extraReducers: (builder) => {
        builder.addCase(BroswerAsyncThunk.fulfilled, (state, action) => {
            state.BrowseSearch = action.payload
        })
    }
})

export default SearchScreenSlice.reducer;