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
        padding: 13,
        borderWidth: 1,
        backgroundColor: '#545659',
        borderRadius: 14,
        marginLeft: 10,
        // justifyContent:'center',
        // alignItems:'center',
    },
    text: {
        color: 'white',
        textTransform: 'capitalize',
        // backgroundColor:'blue'
    },
    
})