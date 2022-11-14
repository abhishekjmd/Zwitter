import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, FlatList, Image, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

import SwipeComp from './SwipeComp'
import styles from './Styles'
import { AlbumsComps, ArtistComp, PlaylistComp, SearchComps } from './SubSearchComps';


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
        const endpointUrl = `https://api.spotify.com/v1/search?q=${value}&type=${type}&market=IN&limit=50`;
        try {
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + 'BQB1rdF3TxM6vGmzWHEZnSwRGOjhH1NIMDilFCgqGfmKx6VnkugYbmxDLcATR07tY5MAZPCFrC588JspCF7Bgm0qCiiwnDUGcTMGuV8Gy2NLOseMz2VBJddGBfsAfur0VlEl0PW-8zqumYOlmNXcHMB1koTvQbaGbhh7n8ZaFuG9h8UC6P-sddL6OLG2meI3qLwo4zPflQSdEuPrvLf-bBXR1f2KJP9Ae9pKBDUAyCt7aRv9g3Omtcbl5oBAuoFeEPsVTAPrIXF_yA' },
                json: true
            })
            const result = await res.json();
            console.log(result);

            const resultFinal = result.tracks.items;
            const finaLlenth = resultFinal.length;
            console.log(finaLlenth);
            //  ---------------- CONDITIONALS --------------
            if (result.tracks != undefined) {
                const trackResult = result.tracks.items;
                if (trackResult.length > 0) {
                    setResponse(result.tracks);
                    console.log('track case working');
                } else (
                    console.log('track case wont work'),
                    setResponse('')
                )

            }
            else if (result.albums != undefined) {
                const albumResult = result.albums.items;
                if (albumResult.length > 0) {
                    console.log(result)
                    setResponse(result.albums);
                } else (
                    console.log('albums case not working'),
                    setResponse('')
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
                style={{ flex: 0 }}
                data={response.items}
                keyExtractor={item => item.id}
                initialNumToRender={50}
                renderItem={({ item }) => {
                    return (

                        /*
                        <PlaylistComp image={item.images[0] && item.images[0].url ? item.images[0].url : item.images[0].url} playlistName={item.name} />
                        <ArtistComp image={item.images[0] && item.images[0].url ? item.images[0].url : null} artistName={item.name} />
                        <AlbumsComps image={item.images[0] && item.images[0].url ? item.images[0].url : null} albumName={item.name} singerOne={item.artists[0].name} singerTwo={item.artists[1] && item.artists[1] ? item.artists[1].name : null} singerThree={item.artists[2] && item.artists[2] ? item.artists[2].name : null} albumType={item.album_type} releaseYear={item.release_date} />
                        
                        */
                            <SearchComps image={item.album.images[0].url} trackName={item.name} Artist={item.artists[0].name} ArtistTwo={item.artists[1] && item.artists[1].name ? item.artists[1].name : null} ArtistThree={item.artists[2] && item.artists[2].name ? item.artists[2].name : null} />
                    )
                }}
            />


        </View>
    )
}

export default MainSearchScreenComp
