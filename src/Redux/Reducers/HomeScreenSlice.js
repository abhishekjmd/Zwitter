import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    BigHits: '',
    FavouriteArtist: '',
    RecentlyPlayed: '',
}



export const BigHitsPlaylistAsync = createAsyncThunk(
    'BigHits',
    async () => {
        try {
            const endPointUrl = `https://api.spotify.com/v1/browse/featured-playlists?country=IN&locale=en_IN`;
            const Apikey = await AsyncStorage.getItem('tokenValue')
            const res = await fetch(endPointUrl, {
                'headers': {
                    'Authorization': 'Bearer ' + Apikey
                },
                json: true
            })
            const response = await res.json();
            console.log(response.playlists);
            return response.playlists
        } catch (error) {
            console.log(error);
        }
    }
)



export const FavouriteArtistAsync = createAsyncThunk(
    'FavouriteArtist',
    async () => {
        try {
            const endPointUrl = `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=5`;
            const Apikey = await AsyncStorage.getItem('tokenValue')
            const res = await fetch(endPointUrl, {
                'headers': {
                    'Authorization': 'Bearer ' + Apikey
                },
                json: true
            })
            const response = await res.json();
            // setResponse(Data.playlists)
            console.log(response);
            return response
        } catch (error) {
            console.log(error)
        }
    }
)

export const RecentlyPlayedPlaylistAsync = createAsyncThunk(
    'RecentlyPlayed',
    async () => {
        try {
            const endPointUrl = `https://api.spotify.com/v1/me/player/recently-played?limit=20&efore=3600000`;
            const Apikey = await AsyncStorage.getItem('tokenValue')
            const res = await fetch(endPointUrl, {
                'headers': {
                    'Authorization': 'Bearer ' + Apikey
                },
                json: true
            })
            const response = await res.json();
            console.log(response);
            return response
        } catch (error) {
            console.log(error)
        }
    }
)




const HomeScreenApiSlice = createSlice({
    name: 'HomeScreen',
    initialState,
    // reducers: {},
    extraReducers: (builder) => {
        builder.addCase(BigHitsPlaylistAsync.fulfilled, (state, action) => {
            state.BigHits = action.payload
        })
        builder.addCase(FavouriteArtistAsync.fulfilled, (state, action) => {
            state.FavouriteArtist = action.payload
        })
        builder.addCase(RecentlyPlayedPlaylistAsync.fulfilled, (state, action) => {
            state.RecentlyPlayed = action.payload
        })
    },
})

export default HomeScreenApiSlice.reducer