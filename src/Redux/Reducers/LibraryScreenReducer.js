import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    MainLibrary: '',
    
    MusicList: ''
}

export const MainLibraryAsync = createAsyncThunk(
    'MainLibrary',
    async (AccessToken) => {
        try {
            const endpointUrl = "https://api.spotify.com/v1/me/playlists";
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + AccessToken },
                json: true
            })
            const result = await res.json();
            console.log(result);
           
            return result.items;
        } catch (error) {
            console.log(error)
        }
    }
)


export const MuslicListAsync = createAsyncThunk(
    'MusicList',
    async ({AccessToken, dataId}) => {
        try {
            const endpointUrl = `https://api.spotify.com/v1/playlists/${dataId}/tracks`;
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + AccessToken },
                json: true
            })
            const result = await res.json();
            console.log('musiclistapi',result.items)
            return result.items
        }
        catch (error) {
            console.log(error)
        }
    }
)

const LibraryScreenApiSlice = createSlice({
    name: 'LibraryScreen',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(MainLibraryAsync.fulfilled, (state, action) => {
            state.MainLibrary = action.payload;
        })
        builder.addCase(MuslicListAsync.fulfilled, (state, action) => {
            state.MusicList = action.payload
        })
    }
})

export default LibraryScreenApiSlice.reducer