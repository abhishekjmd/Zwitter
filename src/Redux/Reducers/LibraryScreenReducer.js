import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    MainLibrary: '',
    DataId:'',
    MusicList: ''
}

export const MainLibraryAsync = createAsyncThunk(
    'MainLibrary',
    async () => {
        try {
            const ApiKey = await AsyncStorage.getItem('tokenValue')
            const endpointUrl = "https://api.spotify.com/v1/me/playlists";
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + ApiKey },
                json: true
            })
            const result = await res.json();
            console.log(result);
           
            return result
        } catch (error) {
            console.log(error)
        }
    }
)


export const MuslicListAsync = createAsyncThunk(
    'MusicList',
    async () => {
        try {
            const APIKey = await AsyncStorage.getItem('tokenValue')
            const dataId = await AsyncStorage.getItem('dataId')
            const endpointUrl = `https://api.spotify.com/v1/playlists/${dataId}/tracks`;
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + APIKey },
                json: true
            })
            const result = await res.json();
            // console.log(result);
            console.log('id')
            return result
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
            state.DataId = action.payload.items;
        })
        builder.addCase(MuslicListAsync.fulfilled, (state, action) => {
            state.MusicList = action.payload
        })
    }
})

export default LibraryScreenApiSlice.reducer