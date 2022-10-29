import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/TabScreens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();
const Navigation = () => {
    const linking = {
        prefixes: ["http://192.168.0.106:4000"],
    };
    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator>
            <Stack.Screen name='Details' component={DetailsScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation