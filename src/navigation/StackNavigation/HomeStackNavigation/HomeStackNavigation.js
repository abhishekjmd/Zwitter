import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();
const Navigation = () => {
    
    return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='home' component={HomeScreen} />
            </Stack.Navigator>
    )
}

export default Navigation;