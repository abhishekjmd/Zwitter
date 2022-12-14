import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const SearchComps = ({ image, trackName, Artist, ArtistTwo, ArtistThree }) => {
    return (
        <View style={styles.ResultContainer}>
            <View style={styles.ResultSubContainer}>
                <View style={styles.ImageContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.SearchText}> {trackName} </Text>
                    <Text style={styles.SearchTexttTwo}> {Artist}, {ArtistTwo}, {ArtistThree}
                    </Text>
                </View>
            </View>
        </View>

    )
}


export const AlbumsComps = ({ image, albumName, singerThree, singerTwo, singerOne, albumType, releaseYear, onAlbumCompPressed }) => {
    return (
        <Pressable style={styles.root} onPress={onAlbumCompPressed} >
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.firstText}> {albumName && albumName.length > 20 ? albumName.slice(0, 20) + '...' : albumName} </Text>
                <Text style={styles.secondText}> {singerOne}. {singerTwo}.{singerThree} </Text>
                <Text style={styles.thirdText}> {albumType && albumType.length > 6 ? albumType.slice(0, 6) : albumType} . {releaseYear.length > 4 ? releaseYear.slice(0, 4) : releaseYear} </Text>
            </View>
        </Pressable>
    )
}

export const ArtistComp = ({ image, artistName, Icon }) => {
    return (
        <View style={styles.MainArtistContainer}>
            <View style={styles.ArtistImageContainer}>
                <Image source={{ uri: image }} style={styles.ArtistImage} />
            </View>
            <View style={styles.ArtistTextContainer}>
                <Text style={styles.ArtistText}> {artistName} </Text>
                <MaterialIcons name={Icon} size={20} color='#00acee' />
            </View>
        </View>
    )
}

export const PlaylistComp = ({ playlistName, image, onPlaylistCompPressed }) => {
    return (
        <Pressable style={styles.PlaylistMainContainer} onPress={onPlaylistCompPressed} >
            <View style={styles.PlaylistImageContainer}>
                <Image source={{ uri: image }} style={styles.PlaylistImage} />
            </View>
            <View style={styles.PlaylistTextContainer}>
                <Text style={styles.PlaylistText}> {playlistName.length > 25 ? playlistName.slice(0, 25) + '...' : playlistName} </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    ResultContainer: {
        backgroundColor: 'black',
        justifyContent: 'center',
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
        marginLeft: '2%',

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
        fontWeight: '500'
    },
    root: {
        width: '48%',
        height: 250,
        // backgroundColor: 'green',
        margin: '1.5%',
        marginBottom:10,
    },
    imageContainer: {
        width: '100%',
        height: '65%',
        alignItems:'center',
      
    },
    image: {
        width: '95%',
        height: '100%'
    },
    textContainer: {
        width: '100%',
        marginTop: '4%',
        height: '26%',
        justifyContent: 'center',
    },
    firstText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15,
    },
    secondText: {
        color: '#d7d8db',
        fontWeight: '500',
        // fontSize: 16,

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