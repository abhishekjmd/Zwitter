import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../screens/HomeScreen/HomeScreen';
import SplashScreen from '../../../screens/HomeScreen/SplashScreen';
const Stack = createStackNavigator();
const Navigation = () => {
    
    return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
<Stack.Screen name='splash' component={SplashScreen} />
            <Stack.Screen name='home' component={HomeScreen} />
            </Stack.Navigator>
    )
}

export default Navigation;