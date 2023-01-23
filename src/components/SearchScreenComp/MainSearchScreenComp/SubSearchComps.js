import React from 'react'
import { StyleSheet, Text, View, Image, Pressable,TextInput } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

export const SearchBarComp = ({ onSubmitEditing, value, onChangeText }) => {
    return (
        <View style={styles.searchBarMainContainer}>
            <View style={styles.searchBarSearchContainer}>
                <AntDesign name='arrowleft' size={30} style={styles.searchBarIcon} />
                <TextInput placeholder='What do you want to listen to?' style={styles.searchBartextInput} value={value} onChangeText={onChangeText} placeholderTextColor='#d5ded7' onSubmitEditing={onSubmitEditing} />
                <Ionicons name='md-camera-outline' size={30} style={styles.searchBarIcon} />
            </View>
        </View>
    )
}


export const TrackComp = ({ image, trackName, Artist, ArtistTwo, ArtistThree }) => {
    return (
        <View style={styles.trackContainer}>
            <View style={styles.trackSubContainer}>
                <View style={styles.trackImageContainer}>
                    <Image source={{ uri: image }} style={styles.trackImage} />
                </View>
                <View style={styles.trackTextContainer}>
                    <Text style={styles.trackText}> {trackName} </Text>
                    <Text style={styles.trackTexttTwo}> {Artist}, {ArtistTwo}, {ArtistThree}
                    </Text>
                </View>
            </View>
        </View>

    )
}


export const AlbumsComps = ({ image, albumName, singerThree, singerTwo, singerOne, albumType, releaseYear, onAlbumCompPressed }) => {
    return (
        <Pressable style={styles.albumContainer} onPress={onAlbumCompPressed} >
            <View style={styles.albumImageContainer}>
                <Image source={{ uri: image }} style={styles.albumImage} />
            </View>
            <View style={styles.albumTextContainer}>
                <Text style={styles.albumFirstText}> {albumName && albumName.length > 20 ? albumName.slice(0, 20) + '...' : albumName} </Text>
                <Text style={styles.albumSecondText}> {singerOne}. {singerTwo}.{singerThree} </Text>
                <Text style={styles.albumThirdText}> {albumType && albumType.length > 6 ? albumType.slice(0, 6) : albumType} . {releaseYear.length > 4 ? releaseYear.slice(0, 4) : releaseYear} </Text>
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
    trackContainer: {
        backgroundColor: 'black',
        justifyContent: 'center',
        width: '100%',
        height: 80,
    },
    trackSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 70,
    },
    trackImageContainer: {
        borderRadius: 10,
        height: '80%',
        width: '15%',
        marginLeft: '2%',

    },
    trackImage: {
        borderRadius: 5,
        height: '100%',
        width: '100%',

    },
    trackTextContainer: {
        marginLeft: '2%',
        height: '80%',
        width: '74%',
        // backgroundColor:'red'
    },
    trackText: {
        fontWeight: '500',
        color: 'white',
        fontSize: 18,
    },
    trackTexttTwo: {
        color: '#cacfcc',
        fontWeight: '500'
    },
    albumContainer: {
        width: '48%',
        height: 250,
        // backgroundColor: 'green',
        margin: '1.5%',
        marginBottom:10,
    },
    albumImageContainer: {
        width: '100%',
        height: '65%',
        alignItems:'center',
      
    },
    albumImage: {
        width: '95%',
        height: '100%'
    },
    albumTextContainer: {
        width: '100%',
        marginTop: '4%',
        height: '26%',
        justifyContent: 'center',
    },
    albumFirstText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15,
    },
    albumSecondText: {
        color: '#d7d8db',
        fontWeight: '500',
        // fontSize: 16,

    },
    albumThirdText: {
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
    searchBarMainContainer: {
        backgroundColor: 'yellow',
        width: '100%',
        height: 60,
    },
    searchBarSearchContainer: {
        justifyContent: 'space-around',
        backgroundColor: '#757575',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    searchBartextInput: {
        fontSize: 20
    },
    searchBarIcon: {
        color: 'white'
    },
})