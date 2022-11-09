import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const SearchBarComp = () => {
    return (
        <View style={styles.MainContainer}>
            <View style={styles.SearchContainer}>
                <AntDesign name='arrowleft' size={30} style={styles.Icon} />
                <TextInput placeholder='What do you want to listen to?' style={styles.textInput} placeholderTextColor='#d5ded7'  />
                <Ionicons name='md-camera-outline' size={30} style={styles.Icon} />
            </View>
        </View>
    )
}

const MainSearchScreenComp = () => {
    return (
        <View style={styles.root}>
            <SearchBarComp />
        </View>
    )
}

export default MainSearchScreenComp

const styles = StyleSheet.create({
    root:{
        flex:1
    },
    MainContainer:{
        width:'100%',
        height:60,
        backgroundColor:'yellow',
    },
    SearchContainer:{
        width:'100%',
        height:'100%',
        backgroundColor:'#757575',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    textInput:{
        fontSize:20
    },
    Icon:{
        color:'white'
    }
})