import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { authorize } from 'react-native-app-auth';
import TabNavigation from './src/navigation/TabNavigation/Index'
import MainSearchScreen from './src/screens/SearchScreen/MainSearchScreen/MainSearchScreen';
import SwipeComp from './src/components/SearchScreenComp/MainSearchScreenComp/SwipeComp';
import { AlbumsComps, PlaylistComp, ArtistComp } from './src/components/SearchScreenComp/MainSearchScreenComp/SubSearchComps';
import LinkingScreen from './src/screens/LinkingScreen';
import { Provider, useDispatch } from 'react-redux'
import store from './src/Redux/Store';
import { fetchToken } from './src/Redux/Reducers/TokenReducer';
import { useCallback } from 'react';

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




const App = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  // const spotifyPress = async () => {
  // try {
  // const result = await authorize(authConfig);
  // console.log(result);
  // const AccessToken = await result.accessToken;
  // console.log(AccessToken);
  // setToken(AccessToken);
  // } catch (error) {
  // console.log(error)/;
  // }
  // }


  // const GetToken = dispatch(fetchToken())

  useEffect(() => {
    dispatch(fetchToken())
  }, [dispatch])
  return (
    <View style={styles.root}>
      <TabNavigation />
    </View>
  )
}


export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
})