import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// --------------- IMPORTING SCREEN -----------------
import MusicList from '../../../components/TabScreenComp/YourLibraryComp/MusicPlayerComponent/MusicList';
import MainLibraryScreen from '../../../screens/Your Library/MainLibraryScreen/Index'

const Navigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='MainLibrary' component={MainLibraryScreen} />
            <Stack.Screen name='MusicList' component={MusicList} />
        </Stack.Navigator>
    )
}

export default Navigation;