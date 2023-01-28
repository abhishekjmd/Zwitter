import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'


// -------------------IMPORTING ICONS----------
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'


// --------------- TOP MOST COMPONENT--------- 
const TopMainComponent = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.TopMainComponentRoot}>
            <View style={styles.TopMainComponentFstcontainer}>
                <TouchableOpacity style={styles.TopMainComponentTextcontainer} onPress={() => { navigation.navigate('Profile') }}>
                    <Text style={styles.TopMainComponentText}>A</Text>
                </TouchableOpacity>
                <Text style={styles.TopMainComponentTextTwo}>Your Library</Text>
            </View>
            <View style={styles.TopMainComponentSndcontainer}>
                <Ionicons name='search' size={30} style={styles.TopMainComponentIcon} />
                <Entypo name='plus' size={36} style={styles.TopMainComponentIcon} />
            </View>
        </View>
    )
}


export const SwipableComponent = ({ text, onPress }) => {
    return (
        <View style={styles.root}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.swipeText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}
export const SwipableRenderComponent = () => {
    return (
        <View style={styles.SwipableRootView}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <SwipableComponent text='Playlist' onPress={() => { console.warn('Playlist pressed') }} />
                <SwipableComponent text='Albums' onPress={() => { console.warn('Album pressed') }} />
                <SwipableComponent text='Artists' onPress={() => { console.warn('Artist pressed') }} />
                <SwipableComponent text='Podcasts' type='Primary' onPress={() => { console.warn('Podcast pressed') }} />
            </ScrollView>
        </View>
    )
}

const TopComponent = () => {
    return (
        <View>
            <TopMainComponent />
            <SwipableRenderComponent />
        </View>
    )
}

export default TopComponent
const styles = StyleSheet.create({
    TopMainComponentRoot: {
        justifyContent: 'space-around',
        backgroundColor: 'black',
        flexDirection: 'row',
        width: '100%',
        height: 60
    },
    TopMainComponentFstcontainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
        right: 10,
    },
    TopMainComponentTextcontainer: {
        backgroundColor: '#f2bc3d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 38,
        height: 38,
        right: 8,
    },
    TopMainComponentText: {
        fontWeight: '700',
        fontSize: 25,
    },
    TopMainComponentTextTwo: {
        fontWeight: '700',
        color: 'white',
        fontSize: 30,
        bottom: 2,
    },
    TopMainComponentSndcontainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '20%',
        left: 10,
    },
    TopMainComponentIcon: {
        color: 'white',
        marginRight: 10,
    },
    root: {
        height: 75,
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderRadius: 20,
        marginLeft: 10,
        marginRight: 5,
        borderWidth: 1.5,
        width: 120,
        height: 40,

    },
    container_Primary: {
        width: 190,

    },
    swipeText: {
        fontSize: 16,
        color: 'white'
    },
    SwipableRootView: {
        flexDirection: 'row',
        width: '100%',
    },
})

