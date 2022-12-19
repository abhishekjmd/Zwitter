import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// --------------- IMPORTED FILES ------------- 
import BrowseSearchScreen from '../../../screens/SearchScreen/BrowseSearchScreen/Index'
import MainSearchScreen from '../../../screens/SearchScreen/MainSearchScreen/MainSearchScreen'
import AlbumSearchResultScreen from '../../../screens/SearchScreen/SearchResultScreen/AlbumSearchResultScreen';
import PlaylistSearchResultScreen from '../../../screens/SearchScreen/SearchResultScreen/PlaylistSearchResultScreen';

const Index = ({ navigation, route }) => {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='BrowseSearch' component={BrowseSearchScreen} />
        <Stack.Screen name='MainSearch' component={MainSearchScreen} />
        <Stack.Screen name='AlbumSearchResult' component={AlbumSearchResultScreen} />
        <Stack.Screen name='PlaylistSearchResult' component={PlaylistSearchResultScreen} />
      </Stack.Navigator>
    
  )
}

export default Index