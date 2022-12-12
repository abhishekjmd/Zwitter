import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// --------------- IMPORTING SCREEN -----------------
import MainLibraryScreen from '../../../screens/Your Library/MainLibraryScreen/Index';
import MusicList from '../../../components/YourLibraryComp/MusicListComponent/Index';
import ProfileScreen from '../../../screens/ProfileScreen/ProfileScreen';

const Navigation = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='MainLibrary' component={MainLibraryScreen} />
            <Stack.Screen name='MusicList' component={MusicList} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
        </Stack.Navigator>
    )
}

export default Navigation;