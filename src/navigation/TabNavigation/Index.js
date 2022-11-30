import { StyleSheet, View, Text } from 'react-native';

// --------------- Tab navigation -----------------
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
const Tab = createBottomTabNavigator();


// --------------- IMPORTING SCREEN -----------------
import HomeStackNavigation from '../StackNavigation/HomeStackNavigation/HomeStackNavigation'
import SearchScreen from '../StackNavigation/SearchNavigation/Index';
import YourLibrary from '../StackNavigation/YourLibraryNavigation/Index';
import Premium from '../../screens/Premium/Premium';

// --------------- IMPORTING TABICONS -----------------
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

const config = {
    screens: {
        Home: "H",
        Search: "S",
        Library: "L",
    }
}

const Index = () => {


    return (
        <NavigationContainer
            linking={{
                prefixes: ["myapp://app"],
                config
            }}>
            <Tab.Navigator screenOptions={

                {
                    headerShown: false,
                    tabBarStyle: {
                        // backgroundColor: 'black',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 60,
                        opacity: 1,
                        backgroundColor: 'transparent',
                        // borderTopWidth: 0,
                        position: 'absolute',
                        elevation: 0.6,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    },
                    tabBarLabelStyle: {
                        color: 'white',
                        fontSize: 13,
                        justifyContent: 'center',
                        alignItems: 'center',
                    },

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
                        'tabBarHideOnKeyboard': true
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