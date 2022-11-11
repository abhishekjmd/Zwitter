import { Text, View, TextInput, FlatList, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

import SwipeComp from './SwipeComp'
import styles from './Styles'



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
                    { 'Authorization': 'Bearer ' + 'BQBNPWq9RNo8kVihpPMJUP4IfBZ2Cxu-MNi5xMHbaHbR5YGyId3JnugnGcK_KKSPtsKpXtUaLrzMGZPE5yDcJn8Be9ydFAk8RkaQ2SggExANch4cfhThztwxU7cInR4--3A39H3CfEo4Ufw4C2NiGTrP3As92DJYXN0G-Vdvnz1vOUPyXNSXMlD4kLP4tMZGGMqY0jtfmToY7blxBK9ECWZ52ACjK4C8hiY9T7YDn2-ddLBktw7zC0YlTPAh2s7LOarcXrL1JG1M7g' },
                json: true
            })
            const result = await res.json();
            console.log(result);
            // const finalResult = await result+{type};
            // console.log(finalResult.albums);
            // if (finalResult.length > 0) {
            // setResponse(result.);
            // console.log(`result${type}`);

            // } else {
            // setResponse('');

            // }
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
