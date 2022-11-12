import { Text, View, TextInput, FlatList, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

import SwipeComp from './SwipeComp'
import styles from './Styles'

import { PlaylistComp, AlbumsComp, ArtistComp } from './SubSearchComps'

// ----------------- SEARCH BAR COMPONENT ------------
const SearchBarComp = ({ onEndEditing, value, onChangeText }) => {
    // const [term, setTerm] = useState('');
    return (
        <View style={styles.MainContainer}>
            <View style={styles.SearchContainer}>
                <AntDesign name='arrowleft' size={30} style={styles.Icon} />
                <TextInput placeholder='What do you want to listen to?' style={styles.textInput} value={value} onChangeText={onChangeText} placeholderTextColor='#d5ded7' onEndEditing={onEndEditing} />
                <Ionicons name='md-camera-outline' size={30} style={styles.Icon} />
            </View>
        </View>
    )
}

// ------------- SEARCH RESULT COMPONENT ----------
const SearchResultComp = ({ image, trackName, Artist, ArtistTwo, ArtistThree }) => {
    return (
        <View style={styles.ResultContainer}>
            <View style={styles.ResultSubContainer}>
                <View style={styles.ImageContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.SearchText}> {trackName.length > 34 ? trackName.slice(0, 30) + ' ...' : trackName} </Text>
                    <Text style={styles.SearchTexttTwo}> {Artist} {ArtistTwo} {ArtistThree && ArtistThree.length > 10 ? ArtistThree.slice(0, 10) + '...' : ArtistThree} </Text>
                </View>
            </View>
        </View>

    )
}



const MainSearchScreenComp = () => {

    //  --------------- STATES -------------------
    const [response, setResponse] = useState('');
    const [value, setValue] = useState('')
    const [type, setType] = useState('')


    //-------------- ONPRESS FUNCTIONS ---------------
    const OnSongsPressed = () => { setType('track'); }
    const OnPlaylistsPressed = () => { setType('playlist'); }
    const OnAlbumsPressed = () => { setType('album'); }
    const OnArtistPressed = () => { setType('artist'); }
    const OnPodcastShowsPressed = () => { setType('show'); }
    const OnProfilesPressed = () => { setType('album'); }
    const OnGenreMoodsPrssed = () => { setType('album'); }


    //------------- APICALL FUNCTION ----------------
    const SearchApiCall = async () => {
        const endpointUrl = `https://api.spotify.com/v1/search?q=${value}&type=${type}&market=IN`;
        try {
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + 'BQCurMrIsAG_MJeEq4g2AHGJIkRSu3DLLssXznhodttYv0Pl4sjsoZeuReLu468BATsg0aNMKSdHJytf8z_ZETHrOSEF5We3vAFU1dWNUnEiAH2UI0RqNPbyPfFQQ-0og57Rczs2vvWAngkmQ-OXKo62uV5epyLO1m_Ne0frlgWG0FZwJ3IxcRv06dRSwXXp1_OKnQrq6lxNx3_2REv7mBYoQS2JGYdAnQ9OzlkR1FyWx-NQ7AConCPnh6Oi0MH6c5B7_Gb04LjlCA' },
                json: true
            })
            const result = await res.json();
            // console.log(result);

            // ---------------------- CONDITIONAL VARIABLES ----------------------
            const finalTrackResult = await result.tracks;
            const Album = await result.albums;
            const Artist = await result.artists;
            const Playlist = await result.playlists;
            const Podcast = await result.shows;


            // ---------------- CONDITIONALS --------------
            if (type != finalTrackResult) {
                // setResponse(result.tracks);
                console.log(result);
            }
            else if (type != Album) {
                if (Album.length > 0) {
                    console.log(result);
                    // setResponse(result.albums);
                } else (
                    console.log('second if error')
                )
            }
            else if (type != Artist) {
                if (Artist.length > 0) {
                    console.log(result);
                    // setResponse(result.artists);
                } else (
                    console.log('third if error')
                )
            }
            else if (type != Playlist) {
                if (Playlist.length > 0) {
                    console.log(result);
                    // setResponse(result.albums);
                } else (
                    console.log('forth if error')
                )
            }
            else if (type != Podcast) {
                if (Podcast.length > 0) {
                    console.log(result);
                    // setResponse(result.albums);
                } else (
                    console.log('fifth if error')
                )
            }
            else {
                setResponse('');
                console.log('not working');
            }

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        SearchApiCall(value);
    }, [value])
    return (
        <View>
            <SearchBarComp
                value={value}
                onChangeText={(e => setValue(e))}
                onEndEditing={(e) => { setValue(e) }}
            />

            <SwipeComp AlbumsPressed={OnAlbumsPressed} SongsPressed={OnSongsPressed} PlaylistsPressed={OnPlaylistsPressed} ArtistsPressed={OnArtistPressed} PodcastsShowsPressed={OnPodcastShowsPressed} />

            <FlatList
                data={response.items && response.items}
                renderItem={({ item }) => {
                    return (

                        <SearchResultComp trackName={item.name} Artist={item.artists[0].name} ArtistTwo={item.artists[1] && item.artists[1] ? item.artists[1].name : null} ArtistThree={item.artists[2] && item.artists[2] ? item.artists[2].name : null} image={item.album.images[0].url} />
                    )
                }}
            />

            {/*
            <FlatList
                data={response.items && response.items}
                renderItem={({ item }) => {
                    return(
                        <SearchResultComp trackName={item.name} Owner={item.artists[0].name} image={item.album.images[0].url} />
                    )
                }}
            />
            */}
        </View>
    )
}

export default MainSearchScreenComp
