import { StyleSheet} from 'react-native'
import React from 'react'


const Styles = StyleSheet.create({

    MainContainer: {
        backgroundColor: 'yellow',
        width: '100%',
        height: 60,
    },
    SearchContainer: {
        justifyContent: 'space-around',
        backgroundColor: '#757575',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    textInput: {
        fontSize: 20
    },
    Icon: {
        color: 'white'
    },
    MainSwipeComp: {
        backgroundColor: 'green',
        width: '100%',
        height: 80,

    },
    sub: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
    },
})

export default Styles;
