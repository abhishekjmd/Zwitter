import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// --------------- IMPORTED FILES ------------- 
import BrowseSearchScreen from '../../../screens/SearchScreen/BrowseSearchScreen/Index'
import MainSearchScreen from '../../../screens/SearchScreen/MainSearchScreen/MainSearchScreen'
const Index = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='BrowseSearch' component={BrowseSearchScreen} />
      <Stack.Screen name='MainSearch' component={MainSearchScreen} />
    </Stack.Navigator>
  )
}

export default Index