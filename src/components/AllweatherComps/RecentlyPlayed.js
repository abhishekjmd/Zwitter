import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import data from '../../assets/data'

const RecentlyPlayedComponent = ({ textField, imageField }) => {
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                <Image source={imageField} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}> {textField} </Text>
                </View>
            </View>
        </View>
    )
}

const RecentlyPlayed = () => {
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <RecentlyPlayedComponent textField={item.text} imageField={item.image} />
                    )
                }}

            />
        </View>

    )
}



export default RecentlyPlayed

const styles = StyleSheet.create({
    root: {
        width: 180,
        height: 60,
        marginLeft:10,
        marginBottom:5,
        alignItems:'center'
    },
    container: {
        width:'99%',
        height:'100%',
        flexDirection: 'row',
        borderRadius:10,
        backgroundColor: '#545659',
    },
    imageContainer: {
        width: 60,
        height: '100%',
        justifyContent:'center',
        alignItems:'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode:'cover',
        borderRadius: 5

    },
    textContainer: {
        width: '65%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight:'600'
    },
})