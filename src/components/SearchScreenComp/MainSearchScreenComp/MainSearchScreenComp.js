import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, FlatList, Image, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

import SwipeComp from './SwipeComp'
import styles from './Styles'
import { AlbumsComp, ArtistComp, PlaylistComp } from './SubSearchComps';


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



const MainSearchScreenComp = ({ album }) => {

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
    const OnProfilesPressed = () => { setType(album); }
    const OnGenreMoodsPrssed = () => { setType(album); }


    //------------- APICALL FUNCTION ----------------
    const SearchApiCall = async () => {
        const endpointUrl = `https://api.spotify.com/v1/search?q=${value}&type=${type}&market=IN`;
        try {
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + 'BQCyE0qWEx3dz5sDtW8XHnQZhUYruX9UCL-WPVoubnyO8Fy6DJ6b6IQHaS5llpCtASM3CUZmUcH_2ZRAX1gKjuyEAbqVpNT8B1QorpA_ka-HGoidcNW4K7qfgcNGiSpyGVmzG5iqcVWZREnEByFPdDwM04gVeZVBlJwERwm28z2JtZPCxj7tUGhGdu-_lUyc28fmqfzY1YWN631XlOqIE1tfPwG5WGv_ShljfKfKUt6BL3Dqm_jq2dCYp1LynC8ToKDg891s73_2Ew' },
                json: true
            })
            const result = await res.json();
            console.log(result);


            //  ---------------- CONDITIONALS --------------
            if (result.tracks != undefined) {
                const trackResult = result.tracks.items;
                if (trackResult.length > 0) {
                    console.log('track case working');
                } else (
                    console.log('track case wont work')
                )

            }
            else if (result.albums != undefined) {
                const albumResult = result.albums.items;
                if (albumResult.length > 0) {
                    console.log(result)
                } else (
                    console.log('albums case not working')
                )
            }
            else if (result.playlists != undefined) {
                const playlistResult = result.playlists.items;
                if (playlistResult.length > 0) {

                    console.log('playlists result works ');
                    setResponse(result.playlists);

                }
                else {
                    console.log('playlists  result wont work'),
                        setResponse('')
                }
            }
            else if (result.artists != undefined) {
                const artistResult = result.artists.items;
                if (artistResult.length > 0) {
                    console.log('artist result works ')
                    setResponse(result.artists);
                }
                else {
                    console.log('artist result wont work')
                    setResponse('')
                }
            }
            else if (result.shows != undefined) {
                const showsPodcastResult = result.shows.items;
                if (showsPodcastResult.length > 0) {
                    console.log('shows result works ')
                }
                else {
                    console.log('shows result wont work')
                }
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
                data={response.items}
                key={'_'}
                keyExtractor={item => "_" + item.id}
                renderItem={({ item, index }) => {
                    return (
                        <>

                            {
                                /*
                                <PlaylistComp image={item.images[0] && item.images[0].url ? item.images[0].url : item.images[0].url} playlistName={item.name} />
                                
                                */
                                <ArtistComp image={item.images[0] && item.images[0].url ? item.images[0].url : null} artistName={item.name} />
                            }
                        </>

                    )
                }}
                numColumns={2}
            />
        </View>
    )
}

export default MainSearchScreenComp
