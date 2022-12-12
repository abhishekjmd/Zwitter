import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const SwipeToggle = ({ text, onPress, type }) => {
    return (
        
        <TouchableOpacity style={[styles.container, styles[`container_${type}`]]} onPress={onPress}>
        <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </TouchableOpacity>
        
    )
}

export default SwipeToggle

const styles = StyleSheet.create({    
    container: {
        height:50,
        padding: 13,
        borderWidth: 1,
        backgroundColor: '#545659',
        borderRadius: 14,
        marginLeft: 10,
        width:80,
        // justifyContent:'center',
        // alignItems:'center',
    },
    container_Primary:{
        width:100,
        height:40,
        backgroundColor:'red',
    },
    text: {
        color: 'white',
        textTransform: 'capitalize',
        // backgroundColor:'blue'
    },
    text_Primary:{
        textTransform: 'capitalize',
        fontSize:17,
    },
    
})