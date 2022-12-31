import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'

const SplashScreen = () => {
    return (
        <View style={styles.root}>
            <Fontisto name='spotify' size={190} color='#2bed5f' />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
})