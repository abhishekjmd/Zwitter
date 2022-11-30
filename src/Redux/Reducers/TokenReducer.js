import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authorize } from 'react-native-app-auth'
const initialState = {
    token: '',
}

export const fetchToken = createAsyncThunk(
    'AccessToken',
    async () => {
        try {
            const authConfig = {
                // clientId: 'facd2be1aa6c4a9c99089141bed15e30',
                clientId: 'e16476e0d6be41a1b90668c7176ffe36',
                // optional clien secret
                clientSecret: '34a18b7e534a43558e1b0cb071963b5b',
                redirectUrl: 'com.app.auth://deeplinking',
                scopes: ['playlist-modify-public', 'playlist-modify-private', 'user-read-playback-position', 'user-top-read', 'user-read-recently-played', 'user-library-read', 'user-library-modify'],
                serviceConfiguration: {
                    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
                    tokenEndpoint: 'https://accounts.spotify.com/api/token',
                },
            };
            const result = await authorize(authConfig);
            console.log(result);
            const AccessToken = await result.accessToken;
            console.log(AccessToken);
            return AccessToken;
        } catch (error) {
            console.log(error);
        }
    }
)

const UserReducer = createSlice({
    name: 'AccessToken',
    initialState,
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchToken.fulfilled, (state, action) => {
            // Add user to the state array
            state.token = action.payload
        })
    },
})

export default UserReducer.reducer