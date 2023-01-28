import React, { useState, useEffect } from 'react'
import { Text, View, FlatList, ScrollView, StyleSheet } from 'react-native'
import SwipeComp from './SwipeComp'
import { AlbumsComps, ArtistComp, PlaylistComp, SearchBarComp, TrackComp } from './SubSearchComps';
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { MainSearchAsyncThunk } from '../../../Redux/Reducers/SearchScreenSlice'



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


    //------------- APICALL FUNCTION ----------------

    const AccessToken = useSelector((state) => state.AccessToken.token)
    useEffect(() => {
        dispatch(MainSearchAsyncThunk({ AccessToken, value, type }))

    }, [value])

    const [response, setResponse] = useState([])
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
                    navigation.navigate('AlbumSearchResult', { Images: item.images[0].url, AlbumName: item.name, ArtistName: item.artists[0].name, AlbumId: item.id, TypeGenre: item, ReleaseDate: item.release_date, TotalTracks: item.total_tracks, Artist: item.artists })
                }}
            />
        } else if (mainMusicData.tracks == response) {
            return <TrackComp image={item.album.images[0].url} trackName={item.name} Artist={item.artists[0].name} ArtistTwo={item.artists[1] && item.artists[1].name ? item.artists[1].name : null} ArtistThree={item.artists[2] && item.artists[2].name ? item.artists[2].name : null} />
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
            <ScrollView>
                <SearchBarComp
                    value={value}
                    onChangeText={(e) => { setValue(e) }}
                    onSubmitEditing={(e) => setValue(e)}
                />
                <SwipeComp AlbumsPressed={OnAlbumsPressed} SongsPressed={OnSongsPressed} PlaylistsPressed={OnPlaylistsPressed} ArtistsPressed={OnArtistPressed} PodcastsShowsPressed={OnPodcastShowsPressed} />
                <FlatList
                    data={response.items}
                    numColumns={2}
                    renderItem={RenderItemFunction}
                />
            </ScrollView>
        </View>
    )
}

export default MainSearchScreenComp
const styles = StyleSheet.create({
    activityContainer: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // position: 'absolute',
        backgroundColor: '#000000',
        // top: 0,
        left: 0,
        right: 0,
        // bottom: 0,
        // zIndex: 2
    },
})