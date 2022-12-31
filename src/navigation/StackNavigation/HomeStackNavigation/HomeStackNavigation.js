import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/HomeScreen/HomeScreen';
import SplashScreen from '../../../screens/HomeScreen/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const Navigation = () => {
    const [showSplashScreen, setShowSplashScreen] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setShowSplashScreen(false)
        }, 6000)
    }, [])
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {showSplashScreen
                ?
                <Stack.Screen name='splash' component={SplashScreen} />
                :
                null
            }
            <Stack.Screen name='home' component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default Navigation;