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
    const [response, setResponse] = useState('');
    const [err, setErr] = useState('');
    const [value, setValue] = useState('')
    const [term, setTerm] = useState('');
    const [type, setType] = useState('')
    const SearchApiCall = async () => {
        const endpointUrl = `https://api.spotify.com/v1/search?q=${value}&type=track&market=IN`;
        try {
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + 'BQACKpT30tDlqyZd1kwzwI93SYOWx6ZZ9VFI5ELMR2ujAexGwPl2BwMWJnpY7zhm-vg6NEF6Yvml1RIatmUFzmibdK3355fUM7x6am3vhylysET3E5CQqxgMuiZSuCXz5Dile7KSAQk3gWzYDnFj6kUVDTxlEH8SVFtN5cxk2EUHA0UQNxVDFl1Fv4YGIpFatC387GPu_UQrfmIF3yr9MLVgF6H0Z79mVw52pWDdrYAUmwY1ZCBSchoRahoh0pleqMrCBQnU3Q_fEQ' },
                json: true
            })
            const result = await res.json();
            const finalResult = await result.tracks.items;
            if (finalResult.length > 0) {
                setResponse(result.tracks);
                console.log(result);

            } else {
                setResponse('');

            }
        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        SearchApiCall(value);
        // console.warn();
    }, [value])
    return (
        <View>
            <SearchBarComp
                value={value}
                onChangeText={(e => setValue(e))}
                onEndEditing={(e) => { setValue(e) }}
            />

            <SwipeComp />
            <FlatList
                data={response.items}
                renderItem={({ item }) => {
                    return (
                        <SearchResultComp trackName={item.name} Artist={item.artists[0].name } ArtistTwo={item.artists[1] && item.artists[1] ? item.artists[1].name : null} ArtistThree={item.artists[2] && item.artists[2] ? item.artists[2].name : null} image={item.album.images[0].url} />
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
