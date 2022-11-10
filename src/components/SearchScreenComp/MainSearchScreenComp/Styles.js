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
    ResultContainer: {
        backgroundColor: 'black',
        justifyContent:'center',
        width: '100%',
        // marginTop: 5,
        height: 80,
    },
    ResultSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 70,
    },
    ImageContainer: {
        borderRadius: 10,
        height: '80%',
        width: '15%',
        marginLeft:'2%',

    },
    image: {
        borderRadius: 5,
        height: '100%',
        width: '100%',

    },
    TextContainer: {
        marginLeft: '2%',
        height: '80%',
        width: '74%',
        // backgroundColor:'red'
    },
    SearchText: {
        fontWeight: '500',
        color: 'white',
        fontSize: 18,
    },
    SearchTexttTwo: {
        color: '#cacfcc',
        fontSize: 15
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
