import { StyleSheet, Text, View, Image, Modal } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const SmallPlayer = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal 
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.root}>
                    <View style={styles.MainContainer}>
                        <View style={styles.ImageContainer}>
                            <Image source={require('../../../../MusicPlayer.jpeg')} style={styles.Image} />
                        </View>
                        <View style={styles.TextContainer}>
                            <Text style={styles.FirstText}>Main Agar Kahoon</Text>
                            <Text style={styles.SecondText}>Sonu Nigam</Text>
                        </View>
                    </View>
                    <View style={styles.IconContainer}>
                        <MaterialCommunityIcons name='cast-audio' size={25} color='#e9ebf0' />
                        <AntDesign name='heart' size={25} color='green' />
                        <FontAwesome5 name='play' size={20} color='white' />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default SmallPlayer

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#87888a',
        flexDirection: 'row',
        borderRadius: 5,
        marginLeft: 7,
        width: '98%',
        height: 60,
    },
    MainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '80%',
        width: '60%',
        margin: 6,
    },
    ImageContainer: {
        height: '100%',
        width: '20%',
    },
    Image: {
        height: '100%',
        width: '100%',
    },
    TextContainer: {
        marginLeft: 8,
        height: '100%',
        justifyContent: 'center'
    },
    FirstText: {
        fontWeight: '600',
        color: 'white',
        fontSize: 16,
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
        margin: 6,
    },
})