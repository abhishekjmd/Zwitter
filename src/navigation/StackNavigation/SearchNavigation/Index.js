import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// --------------- IMPORTED FILES ------------- 
import BrowseSearchScreen from '../../../screens/SearchScreen/BrowseSearchScreen/Index'
import MainSearchScreen from '../../../screens/SearchScreen/MainSearchScreen/MainSearchScreen'
import AlbumSearchResultScreen from '../../../screens/SearchScreen/SearchResultScreen/AlbumSearchResultScreen';

const Index = ({ navigation, route }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='BrowseSearch' component={BrowseSearchScreen} />
      <Stack.Screen name='MainSearch' component={MainSearchScreen} />
      <Stack.Screen name='AlbumSearchResult' component={AlbumSearchResultScreen} />
    </Stack.Navigator>
  )
}

export default Index