import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// --------------- IMPORTED FILES ------------- 
import BrowseSearchScreen from '../../../screens/SearchScreen/BrowseSearchScreen/Index'
import MainSearchScreen from '../../../screens/SearchScreen/MainSearchScreen/MainSearchScreen'
const Index = ({ navigation, route }) => {
  // React.useLayoutEffect(() => {
  // const routeName = getFocusedRouteNameFromRoute(route);
  // if (routeName === 'MainSearch') {
  // navigation.setOptions({ tabBarStyle: { display: 'none' } });
  // } else {
  // navigation.setOptions({ tabBarStyle: { display: 'flex' } });
  // }
  // })
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='BrowseSearch' component={BrowseSearchScreen} />
      <Stack.Screen name='MainSearch' component={MainSearchScreen} />
    </Stack.Navigator>
  )
}

export default Index