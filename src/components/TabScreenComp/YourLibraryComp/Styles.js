import { StyleSheet } from 'react-native'
const Styles = StyleSheet.create({
    root: {
        justifyContent: 'space-around',
        backgroundColor: 'black',
        flexDirection: 'row',
        width: '100%',
        height: 60
    },
    fstcontainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
        right: 10,
    },
    textcontainer: {
        backgroundColor: '#f2bc3d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 38,
        height: 38,
        right: 8,
    },
    text: {
        fontWeight: '700',
        fontSize: 25,
    },
    text2: {
        fontWeight: '700',
        color: 'white',
        fontSize: 30,
        bottom: 2,
    },
    sndcontainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '20%',
        left: 10,
    },
    icon: {
        color: 'white',
        marginRight: 10,
    },
})
export default Styles;
