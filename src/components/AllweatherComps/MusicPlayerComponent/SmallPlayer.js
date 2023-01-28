import { StyleSheet, Text, View, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export const SmallPlayer = ({ pause, OnPlay, OnPause, MusicImg, MusicName, SingerName }) => {
    return (
        <View style={styles.root}>
            <View style={styles.MainContainer}>
                <View style={styles.ImageContainer}>
                    <Image source={{ uri: MusicImg }} style={styles.Image} resizeMode='center' />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.FirstText}> {MusicName} </Text>
                    <Text style={styles.SecondText}> {SingerName} </Text>
                </View>
            </View>
            <View style={styles.IconContainer}>
                <MaterialCommunityIcons name='cast-audio' size={25} color='#e9ebf0' />
                <AntDesign name='heart' size={25} color='green' />
                {pause ?
                    <FontAwesome5 name='play' size={20} color='white' onPress={OnPlay} />
                    :
                    <Fontisto name='pause' size={20} color='white' onPress={OnPause} />
                }
            </View>
        </View>


    )
}

export default SmallPlayer

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#87888a',
        flexDirection: 'row',
        borderRadius: 5,
        width: '95%',
        height: 80,
        alignItems: 'center',
        marginLeft: 10,
        position: 'absolute',
        top: '85%',
        left: 0,
        right: 0,
        bottom: 0
        // bottom:10
        // b:'50%'
    },
    MainContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        margin: '1.5%',
        height: '80%',
        width: '60%',
    },
    ImageContainer: {
        height: '70%',
        width: '25%',
    },
    Image: {
        height: '100%',
        width: '100%',
    },
    TextContainer: {
        justifyContent: 'center',
        marginLeft: '3%',
        height: '100%',
        width: '80%',
        justifyContent: 'center'

    },
    FirstText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 15,
    },
    SecondText: {
        color: 'white'
    },
    IconContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        height: '80%',
        width: '34%',
        margin: '1%',
    },
})