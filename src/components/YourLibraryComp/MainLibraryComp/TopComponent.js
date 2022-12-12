import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import styles from './Styles'


// -------------------IMPORTING ICONS----------
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'


// --------------- TOP MOST COMPONENT--------- 
const FirstTopComponent = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.root}>
            <View style={styles.fstcontainer}>
                <TouchableOpacity style={styles.textcontainer} onPress={() => { navigation.navigate('Profile') }}>
                    <Text style={styles.text}>A</Text>
                </TouchableOpacity>
                <Text style={styles.text2}>Your Library</Text>
            </View>
            <View style={styles.sndcontainer}>
                <Ionicons name='search' size={30} style={styles.icon} />
                <Entypo name='plus' size={36} style={styles.icon} />
            </View>
        </View>
    )
}

// --------------- TOP SECOND MOST COMPONENT--------- 

export const SwipableComponent = ({ text, type, onPress }) => {
    return (
        <View style={Styles.root}>
            <TouchableOpacity style={[Styles.container, Styles[`container_${type}`]]} onPress={onPress}>
                <Text style={[Styles.swipeText, Styles[`swipeText_${type}`]]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}
export const SwipableRenderComponent = () => {
    return (
        <View>
            <FlatList
                data={SwipableComponent}
                horizontal={true}
                renderItem={() => {
                    return (
                        <View style={{ flexDirection: 'row' }}>
                            <SwipableComponent text='Playlist' onPress={() => { console.warn('Playlist pressed') }} />
                            <SwipableComponent text='Podcasts & Shows' type='Primary' onPress={() => { console.warn('Podcast pressed') }} />
                            <SwipableComponent text='Albums' onPress={() => { console.warn('Album pressed') }} />
                            <SwipableComponent text='Artists' onPress={() => { console.warn('Artist pressed') }} />
                        </View>

                    )
                }}
            />
        </View>
    )
}

const TopComponent = () => {
    return (
        <View>
            <FirstTopComponent />
            <SwipableRenderComponent />
        </View>
    )
}

export default TopComponent
const Styles = StyleSheet.create({

    root: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
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
        fontSize: 20,
        color: 'white'
    },

})

