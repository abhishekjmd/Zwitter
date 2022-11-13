import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export const AlbumsComps = ({ image, albumName, singerThree, singerTwo, singerOne }) => {
    return (
        <View style={styles.root}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.firstText}> {albumName} </Text>
                <Text style={styles.secondText}> {singerOne}. {singerTwo}.{singerThree} </Text>
            </View>
        </View>
    )
}

export const ArtistComp = ({ image, artistName }) => {
    return (
        <View style={styles.MainAlbumContainer}>
            <View style={styles.AlbumImageContainer}>
                <Image source={{ uri: image }} style={styles.AlbumImage} />
            </View>
            <View style={styles.AlbumTextContainer}>
                <Text style={styles.AlbumText}> {artistName} </Text>
                <MaterialIcons name='verified' size={20} color='#00acee' />
            </View>
        </View>
    )
}

export const PlaylistComp = ({playlistName,image}) => {
    return (
        <View style={styles.PlaylistMainContainer}>
            <View style={styles.PlaylistImageContainer}>
                <Image source={{ uri: image }} style={styles.PlaylistImage}  />
            </View>
            <View style={styles.PlaylistTextContainer}>
                <Text style={styles.PlaylistText}> {playlistName.length > 25 ? playlistName.slice(0,25) + '...' : playlistName } </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '45%',
        height: 250,
        backgroundColor: 'green',
        marginLeft: '2%'
    },
    imageContainer: {
        width: '100%',
        height: '70%'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        width: '100%',
        marginTop: '4%'
    },
    firstText: {
        color: 'white',
        fontWeight: '500'
    },
    secondText: {
        color: '#d7d8db'
    },
    MainAlbumContainer: {
        width: '100%',
        height: 80,
        backgroundColor: 'green',
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center'
    },
    AlbumImageContainer: {
        width: '15%',
        height: '70%',
        // backgroundColor: 'red',
        marginLeft: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    AlbumImage: {
        width: '90%',
        height: '90%',
        borderRadius: 20,
    },
    AlbumTextContainer: {
        width: '65%',
        height: '70%',
        // backgroundColor:'yellow',
        marginLeft: '2%',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
    },
    AlbumText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500'
    },
    PlaylistMainContainer: {
        justifyContent: 'center',
        alignItems:'center',      
        width: '48%',
        margin: '1%',
        height: 200,
    },
    PlaylistImageContainer: {
        height: '75%',
        width: '80%',
    },
    PlaylistImage: {
        height: '100%',
        width: '100%',
    },
    PlaylistTextContainer: {
        justifyContent:'center',
        height: '20%',
        width: '85%',
        alignItems:'flex-start'
    },
    PlaylistText: {
        fontWeight: '500',
        color: 'white',
        fontSize: 14,
    },
})