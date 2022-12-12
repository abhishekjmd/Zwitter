import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation();
    setTimeout(() => {
        navigation.navigate('home')
    }, 6500)
    return (
        <View style={styles.root}>
            <Fontisto name='spotify' size={65} color='#2bed5f' />
            <Text>SplashScreen</Text>
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