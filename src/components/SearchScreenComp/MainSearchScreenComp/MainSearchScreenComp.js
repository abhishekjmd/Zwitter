import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, FlatList, Image, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SwipeComp from './SwipeComp'
import styles from './Styles'
import { AlbumsComps, ArtistComp, PlaylistComp, SearchComps } from './SubSearchComps';
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';

// ----------------- SEARCH BAR COMPONENT ------------
const SearchBarComp = ({ onSubmitEditing, value, onChangeText }) => {
    // const [term, setTerm] = useState('');
    return (
        <View style={styles.MainContainer}>
            <View style={styles.SearchContainer}>
                <AntDesign name='arrowleft' size={30} style={styles.Icon} />
                <TextInput placeholder='What do you want to listen to?' style={styles.textInput} value={value} onChangeText={onChangeText} placeholderTextColor='#d5ded7' onSubmitEditing={onSubmitEditing} />
                <Ionicons name='md-camera-outline' size={30} style={styles.Icon} />
            </View>
        </View>
    )
}


const MainSearchScreenComp = ({ album }) => {

    //  --------------- STATES -------------------
    const [response, setResponse] = useState('');
    const [value, setValue] = useState('')
    const [type, setType] = useState('')
    const [result, setResult] = useState('');
    const navigation = useNavigation();
    //-------------- ONPRESS FUNCTIONS FOR SWIPE TOGGLE ---------------
    const OnSongsPressed = (e) => {
        setType('track');
    }
    const OnPlaylistsPressed = (e) => {
        setType('playlist');
    }
    const OnAlbumsPressed = () => { setType('album'); }
    const OnArtistPressed = () => { setType('artist'); }
    const OnPodcastShowsPressed = () => { setType('show'); }
    const OnProfilesPressed = () => { setType(album); }
    const OnGenreMoodsPrssed = () => { setType(album); }


    //------------- APICALL FUNCTION ----------------
    const { token } = useSelector((state) => {
        return state
    });
    const SearchApiCall = async () => {
        const endpointUrl = `https://api.spotify.com/v1/search?q=${value}&type=${type}&market=IN&limit=50`;
        try {
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + token },
                json: true
            })
            const apiResult = await res.json();
            console.log(apiResult);
            setResult(apiResult);

            //  ---------------- CONDITIONALS --------------
            if (apiResult.tracks != undefined) {
                const trackResult = apiResult.tracks.items;
                if (trackResult.length > 0) {
                    setResponse(apiResult.tracks);
                    console.log('track case working');
                } else (
                    console.log('track case wont work'),
                    setResponse('')
                )
            }
            else if (apiResult.albums != undefined) {
                const albumResult = apiResult.albums.items;
                if (albumResult.length > 0) {
                    console.log(apiResult)
                    setResponse(apiResult.albums);
                } else (
                    console.log('albums case not working'),
                    setResponse('')
                )
            }
            else if (apiResult.playlists != undefined) {
                const playlistResult = apiResult.playlists.items;
                if (playlistResult.length > 0) {
                    console.log('playlists apiResult works ');
                    setResponse(apiResult.playlists);
                }
                else {
                    console.log('playlists  apiResult wont work'),
                        setResponse('')
                }
            }
            else if (apiResult.artists != undefined) {
                const artistResult = apiResult.artists.items;
                if (artistResult.length > 0) {
                    console.log('artist apiResult works ')
                    setResponse(apiResult.artists);
                }
                else {
                    console.log('artist apiResult wont work')
                    setResponse('')
                }
            }
            else if (apiResult.shows != undefined) {
                const showsPodcastResult = apiResult.shows.items;
                if (showsPodcastResult.length > 0) {
                    console.log('shows apiResult works ')
                    setResponse(apiResult.shows);
                }
                else {
                    console.log('shows apiResult wont work')
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

    // ----------- COMPONENTS ONPRESS FUNCTIONS -------------- 

    // ----------- CONDITIONAL RESULT COMPONENT ----------
    const RenderItemFunction = ({ item }) => {
        if (response == result.albums) {
            return <AlbumsComps image={item.images[0] && item.images[0].url ? item.images[0].url : null} albumName={item.name} singerOne={item.artists[0].name} singerTwo={item.artists[1] && item.artists[1] ? item.artists[1].name : null} singerThree={item.artists[2] && item.artists[2] ? item.artists[2].name : null} albumType={item.album_type} releaseYear={item.release_date}
                onAlbumCompPressed={() => {
                    console.warn('album comp pressed')
                    navigation.navigate('AlbumSearchResult', { Images: item.images[0].url, AlbumName: item.name, ArtistName: item.artists[0].name, AlbumId: item.id, TypeGenre: item })

                }} />
        } else if (response == result.tracks) {
            return <SearchComps image={item.album.images[0].url} trackName={item.name} Artist={item.artists[0].name} ArtistTwo={item.artists[1] && item.artists[1].name ? item.artists[1].name : null} ArtistThree={item.artists[2] && item.artists[2].name ? item.artists[2].name : null} />
        }
        else if (response == result.playlists) {
            return <PlaylistComp image={item.images[0] && item.images[0].url ? item.images[0].url : item.images[0].url} playlistName={item.name}
                onPlaylistCompPressed={() => {
                    console.warn('PlaylistSearchResult')
                    navigation.navigate('PlaylistSearchResult', { Id: item.id, Images: item.images[0].url, PlayListName: item.name, OwnerName: item.owner.display_name, })
                }} />
        }
        else if (response == result.artists) {
            return <ArtistComp image={item.images[0] && item.images[0].url ? item.images[0].url : null} artistName={item.name} Icon={item.popularity > 55 ? 'verified' : null} />

        }
        else {
            return (
                <View style={{ width: '100%' }}>
                    <Text style={{ color: 'white' }}> Case not working </Text>
                </View>
            )
        }
    }

    useEffect(() => {
        SearchApiCall(value);
    }, [value])
    return (
        <View>
            <SearchBarComp
                value={value}
                onChangeText={(e) => { setValue(e) }}
                onSubmitEditing={(e) => setValue(e)}
            />
            <SwipeComp AlbumsPressed={OnAlbumsPressed} SongsPressed={OnSongsPressed} PlaylistsPressed={OnPlaylistsPressed} ArtistsPressed={OnArtistPressed} PodcastsShowsPressed={OnPodcastShowsPressed} />

            <FlatList
                style={{ flex: 0 }}
                data={response.items}
                numColumns={2}
                key={'_'}
                keyExtractor={item => "_" + item.id}
                renderItem={RenderItemFunction}
            />

        </View>
    )
}

export default MainSearchScreenComp
