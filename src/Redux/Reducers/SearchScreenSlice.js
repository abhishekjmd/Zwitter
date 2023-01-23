import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    BrowseSearch: '',
    MainSearch: ''
}

export const BroswerAsyncThunk = createAsyncThunk(
    'BrowserSearch',
    async (AccessToken) => {
        try {
            const endpointUrl = 'https://api.spotify.com/v1/browse/categories?limit=50';
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + AccessToken },
                json: true
            })
            const result = await res.json();
            const finalResult = await result.categories.items
            console.log('searchresult', finalResult);
            return finalResult
        } catch (error) {
            console.log(error);
        }
    }
)


export const MainSearchAsyncThunk = createAsyncThunk(
    'MainSearch',
    async ({ AccessToken, value, type }) => {
        try {
            const endpointUrl = `https://api.spotify.com/v1/search?q=${value}&type=${type}&market=IN&limit=50`;
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + AccessToken },
                json: true
            })
            const result = await res.json();
            console.log('Mainsearchresult', result);
            return result
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
        builder.addCase(MainSearchAsyncThunk.fulfilled, (state, action) => {
            state.MainSearch = action.payload
        })
    }
})

export default SearchScreenSlice.reducer;