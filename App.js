import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { authorize } from 'react-native-app-auth';
import HomeScreen from './src/screens/TabScreens/HomeScreen/HomeScreen';

import  Index  from './src/navigation/TabNavigation/Index'
import TopComponent from './src/components/TabScreenComp/YourLibraryComp/TopComponent';
const authConfig = {
  // clientId: 'facd2be1aa6c4a9c99089141bed15e30',
  clientId: 'e16476e0d6be41a1b90668c7176ffe36',

  // optional clien secret
  clientSecret: '34a18b7e534a43558e1b0cb071963b5b',
  redirectUrl: 'app://deeplink',
  // redirectUrl: 'http://192.168.161.237:5000',
  scopes: ['playlist-modify-public', 'playlist-modify-private'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};


const App = () => {
  const spotifyPress = async () => {
    try {
      const result = await authorize(authConfig);
      console.log(result.accessToken);
      dispatch({
        type: Types.Auth,
        payload: {
          token: result.accessToken,
        },
      });
      console.log(result.accessToken);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.root}>
      <TopComponent />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
})