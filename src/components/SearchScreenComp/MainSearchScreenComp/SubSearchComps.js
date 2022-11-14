import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export const AlbumsComps = ({ image, albumName, singerThree, singerTwo, singerOne, albumType, releaseYear }) => {
    return (
        <View style={styles.root}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.firstText}> {albumName.length > 20 ? albumName.slice(0, 20) + '...' : albumName} </Text>
                <Text style={styles.secondText}> {singerOne}. {singerTwo}.{singerThree} </Text>
                <Text style={styles.thirdText}> {albumType} . {releaseYear.length > 4 ? releaseYear.slice(0, 4) : releaseYear} </Text>

            </View>
        </View>
    )
}

export const ArtistComp = ({ image, artistName }) => {
    return (
        <View style={styles.MainArtistContainer}>
            <View style={styles.ArtistImageContainer}>
                <Image source={{ uri: image }} style={styles.ArtistImage} />
            </View>
            <View style={styles.ArtistTextContainer}>
                <Text style={styles.ArtistText}> {artistName} </Text>
                <MaterialIcons name='verified' size={20} color='#00acee' />
            </View>
        </View>
    )
}

export const PlaylistComp = ({ playlistName, image }) => {
    return (
        <View style={styles.PlaylistMainContainer}>
            <View style={styles.PlaylistImageContainer}>
                <Image source={{ uri: image }} style={styles.PlaylistImage} />
            </View>
            <View style={styles.PlaylistTextContainer}>
                <Text style={styles.PlaylistText}> {playlistName.length > 25 ? playlistName.slice(0, 25) + '...' : playlistName} </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '48%',
        height: 250,
        // backgroundColor: 'green',
        margin: '1.5%'
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
        marginTop: '4%',
        height: '26%',
        justifyContent: 'center'
    },
    firstText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 17,
    },
    secondText: {
        color: '#d7d8db',
        fontWeight: '500',
        fontSize: 16,


    },
    thirdText: {
        color: '#d7d8db',
        fontWeight: '500',
        fontSize: 16,

    },
    MainArtistContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 70,
    },
    ArtistImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '2%',
        height: '70%',
        width: '12%',
    },
    ArtistImage: {
        borderRadius: 20,
        height: '90%',
        width: '90%',
    },
    ArtistTextContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '2%',
        height: '70%',
        width: '65%',
    },
    ArtistText: {
        fontWeight: '500',
        color: 'white',
        fontSize: 22,
    },
    PlaylistMainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
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
        justifyContent: 'center',
        height: '20%',
        width: '85%',
        alignItems: 'flex-start'
    },
    PlaylistText: {
        fontWeight: '500',
        color: 'white',
        fontSize: 14,
    },
})