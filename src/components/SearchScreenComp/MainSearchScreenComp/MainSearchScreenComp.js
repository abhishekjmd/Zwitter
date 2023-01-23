import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, FlatList, Image, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SwipeComp from './SwipeComp'
import styles from './Styles'
import { AlbumsComps, ArtistComp, PlaylistComp, SearchComps } from './SubSearchComps';
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { MainSearchAsyncThunk } from '../../../Redux/Reducers/SearchScreenSlice'
import { useCallback } from 'react'

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
    const [type, setType] = useState('track')
    const [value, setValue] = useState('')
    const navigation = useNavigation();
    //-------------- ONPRESS FUNCTIONS FOR SWIPE TOGGLE ---------------
    const OnSongsPressed = () => { setType('track') }
    const OnPlaylistsPressed = () => { setType('playlist') }
    const OnAlbumsPressed = () => { setType('album') }
    const OnArtistPressed = () => { setType('artist') }
    const OnPodcastShowsPressed = () => { setType('show') }
    const OnProfilesPressed = () => { setType(album) }
    const OnGenreMoodsPrssed = () => { setType(album) }


    //------------- APICALL FUNCTION ----------------

    const AccessToken = useSelector((state) => state.AccessToken.token)

    useEffect(() => {
        dispatch(MainSearchAsyncThunk({ AccessToken, value, type }))
    }, [value])

    const [response, setResponse] = useState('')
    const mainMusicData = useSelector((state) => state.SearchReducer.MainSearch)


    // ----------- CONDITIONAL RESULT COMPONENT ----------


    useEffect(() => {
        if (mainMusicData.albums) {
            console.log("albumData", mainMusicData.albums)
            setResponse(mainMusicData.albums)
        } else if (mainMusicData.tracks) {
            console.log('trackData.tracks', mainMusicData.tracks)
            setResponse(mainMusicData.tracks)
        }
        else if (mainMusicData.playlists) {
            console.log('trackData.playlists', mainMusicData.playlists)
            setResponse(mainMusicData.playlists)
        }
        else if (mainMusicData.artists) {
            console.log('trackData.artists', mainMusicData.artists)
            setResponse(mainMusicData.artists)
        }
        else if (mainMusicData.shows) {
            console.log('trackData.shows', mainMusicData.shows)
            setResponse(mainMusicData.shows)
        }
        else (
            console.log('not working')
        )
    })
    const RenderItemFunction = ({ item }) => {
        if (mainMusicData.albums == response) {
            return <AlbumsComps image={item.images[0] && item.images[0].url ? item.images[0].url : null} albumName={item.name} singerOne={item.artists[0].name} singerTwo={item.artists[1] && item.artists[1] ? item.artists[1].name : null} singerThree={item.artists[2] && item.artists[2] ? item.artists[2].name : null} albumType={item.album_type} releaseYear={item.release_date}
                onAlbumCompPressed={() => {
                    console.warn('album comp pressed')
                    navigation.navigate('AlbumSearchResult', { Images: item.images[0].url, AlbumName: item.name, ArtistName: item.artists[0].name, AlbumId: item.id, TypeGenre: item })
                }}
            />
        } else if (mainMusicData.tracks == response) {
            return <SearchComps image={item.album.images[0].url} trackName={item.name} Artist={item.artists[0].name} ArtistTwo={item.artists[1] && item.artists[1].name ? item.artists[1].name : null} ArtistThree={item.artists[2] && item.artists[2].name ? item.artists[2].name : null} />
        }
        else if (response == mainMusicData.playlists) {
            return <PlaylistComp image={item.images[0] && item.images[0].url ? item.images[0].url : item.images[0].url} playlistName={item.name}
                onPlaylistCompPressed={() => {
                    console.warn('PlaylistSearchResult')
                    navigation.navigate('PlaylistSearchResult', { Id: item.id, Images: item.images[0].url, PlayListName: item.name, OwnerName: item.owner.display_name, })
                }} />
        }
        else if (response == mainMusicData.artists) {
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


    return (
        <View>
            <SearchBarComp
                value={value}
                onChangeText={(e) => { setValue(e) }}
                onSubmitEditing={(e) => setValue(e)}
            />
            <SwipeComp AlbumsPressed={OnAlbumsPressed} SongsPressed={OnSongsPressed} PlaylistsPressed={OnPlaylistsPressed} ArtistsPressed={OnArtistPressed} PodcastsShowsPressed={OnPodcastShowsPressed} />

            <FlatList
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
