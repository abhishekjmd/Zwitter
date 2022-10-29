import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'

const TopBar = () => {
    const { height, width } = Dimensions.get('window');
    return (
        <View style={styles.root}>
            <View style={styles.textContainer}>
                <Text style={styles.text}> Good afternoon </Text>
            </View>

            <View style={styles.subIconContainer}>
                <Octicons name='bell' size={20} style={styles.icon} />
                <Octicons name='clock' size={20} style={styles.icon} />
                <Feather name='settings' size={20} style={styles.icon} />
            </View>

        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    root: {
        // flex:1,
        backgroundColor: 'black',
        flexDirection: 'row',
        marginTop:20,
        alignItems:'center'

    },
    textContainer:{
        marginLeft:20,
    },
    text:{
        fontSize:20,
        color:'white'

    },
    subIconContainer: {
        marginLeft: 80,
        flexDirection: 'row',
        // backgroundColor: 'blue'
    },
    icon: {
        marginLeft: 20,
        color:'white'

    },
})