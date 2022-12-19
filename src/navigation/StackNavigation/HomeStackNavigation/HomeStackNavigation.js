import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/HomeScreen/HomeScreen';
import SplashScreen from '../../../screens/HomeScreen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='splash' component={SplashScreen} />
                <Stack.Screen name='home' component={HomeScreen} />
            </Stack.Navigator>
        
    )
}

export default Navigation;