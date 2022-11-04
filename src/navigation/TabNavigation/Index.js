import { StyleSheet, View, Text } from 'react-native';

// --------------- Tab navigation -----------------
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
const Tab = createBottomTabNavigator();


// --------------- IMPORTING SCREEN -----------------
import HomeStackNavigation from '../StackNavigation/HomeStackNavigation/HomeStackNavigation'
import SearchScreen from '../../screens/SeaarchScreen/SearchScreen';
import YourLibrary from '../StackNavigation/YourLibraryNavigation/Index';
import Premium from '../../screens/Premium/Premium';

// --------------- IMPORTING TABICONS -----------------
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Index = () => {
    const linking = {
        prefixes: ["http://192.168.0.106:4000"],
    };
    return (
        <NavigationContainer linking={linking}>
            <Tab.Navigator screenOptions={
                {
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: 'black',
                        justifyContent:'center',
                        alignItems:'center',
                        height:60,
                        opacity:0.5  
                    },
                    tabBarLabelStyle:{
                        color:'white',
                        fontSize:13,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }
                }}>
                <Tab.Screen name='Home' component={HomeStackNavigation}
                    options=
                    {{
                        'tabBarIcon': (() => (
                            <Entypo name='home' size={33} color='#ffffff' />
                            
                        )),
                    }}
                />
                <Tab.Screen
                    name='Search'
                    component={SearchScreen}
                    options=
                    {{
                        'tabBarIcon': (() => (
                            <View>
                                <Ionicons name='search' size={33} color='#ffffff' />
                            </View>
                        )),
                    }}
                />
                <Tab.Screen
                    name='Library'
                    component={YourLibrary}
                    options=
                    {{
                        'tabBarIcon': (() => (
                            <View>
                                <Ionicons name='md-library' size={33} color='#ffffff' />
                            </View>
                        )),
                    }}
                />
                <Tab.Screen
                    name='Premium'
                    component={Premium}
                    options=
                    {{
                        'tabBarIcon': (() => (
                            <View>
                                <Entypo name='spotify' size={33} color='#ffffff' />
                            </View>
                        )),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Index 