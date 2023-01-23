import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    BigHits: '',
    FavouriteArtist: '',
    RecentlyPlayed: '',
    NewReleases: '',
}


export const BigHitsPlaylistAsync = createAsyncThunk(
    'BigHits',
    async (AccessToken) => {
        try {
            const endPointUrl = `https://api.spotify.com/v1/browse/featured-playlists?country=IN&locale=en_IN`;
            const res = await fetch(endPointUrl, {
                'headers': {
                    'Authorization': 'Bearer ' + AccessToken
                },
                json: true
            })
            const response = await res.json();
            const finalResult = await response.playlists.items
            console.log('response', finalResult);
            return finalResult;
        } catch (error) {
            console.log(error);
        }
    }
)



export const FavouriteArtistAsync = createAsyncThunk(
    'FavouriteArtist',
    async (AccessToken) => {
        try {
            const endPointUrl = `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=5`;
            const res = await fetch(endPointUrl, {
                'headers': {
                    'Authorization': 'Bearer ' + AccessToken
                },
                json: true
            })
            const response = await res.json();
            // const finalresponse = response
            console.log(response);
            return response;
        } catch (error) {
            console.log(error)
        }
    }
)

export const RecentlyPlayedPlaylistAsync = createAsyncThunk(
    'RecentlyPlayed',
    async (AccessToken) => {
        try {
            const endPointUrl = `https://api.spotify.com/v1/me/player/recently-played?limit=20&efore=3600000`;
            const res = await fetch(endPointUrl, {
                'headers': {
                    'Authorization': 'Bearer ' + AccessToken
                },
                json: true
            })
            const response = await res.json();
            const finalresponse = await response.items
            console.log(finalresponse.slice(0, 6));
            return finalresponse.slice(0, 6);
        } catch (error) {
            console.log(error)
        }
    }
)

export const NewReleasesPlaylistAsync = createAsyncThunk(
    'NewReleases',
    async (AccessToken) => {
        try {
            const endPointUrl = `https://api.spotify.com/v1/browse/new-releases?country=IN&limit=20`;
            const res = await fetch(endPointUrl, {
                'headers': {
                    'Authorization': 'Bearer ' + AccessToken
                },
                json: true
            })
            const response = await res.json();
            const finalResult = await response.albums.items
            console.log('newRelease', finalResult);
            return finalResult;
        } catch (error) {
            console.log(error);
        }
    }
)




const HomeScreenApiSlice = createSlice({
    name: 'HomeScreen',
    initialState,
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
        builder.addCase(NewReleasesPlaylistAsync.fulfilled, (state, action) => {
            state.NewReleases = action.payload
        })
    },
})

export default HomeScreenApiSlice.reducer