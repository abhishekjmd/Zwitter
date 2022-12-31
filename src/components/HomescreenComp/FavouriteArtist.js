import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

const FavouriteArtistComp = ({ image, ArtistName }) => {
    return (
        <View style={styles.root}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.artistNameContainer}>
                <Text style={styles.artistNameText}> {ArtistName} </Text>
            </View>
        </View>
    )
}

const FavouriteArtist = () => {
    const [response, setResponse] = useState('')
    // const [isLoading, setIsLoading] = useState(true)
    // const { token } = useSelector((state) => {
    // return state
    // })
    const { token, BigHits } = useSelector((state) => { return state })

    const FavouriteArtistApi = async () => {
        try {
            const ApiKey = await AsyncStorage.getItem('tokenValue')
            const endpointUrl = `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=5`
            const res = await fetch(endpointUrl, {
                'headers': {
                    'Authorization': 'Bearer ' + ApiKey
                },
                json: true
            })
            const result = await res.json();
            console.log(result);
            console.log('APIkey', ApiKey)
            setResponse(result);
            // setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        FavouriteArtistApi();
    }, [])
    return (
        <View>
            <View style={styles.favoriteArtistContainer}>
                <Text style={styles.favouriteArtistText}> Your favourite artists</Text>
            </View>
            <FlatList
                horizontal
                data={response.items}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <FavouriteArtistComp image={item.images[0].url} ArtistName={item.name} />
                    )
                }}
            />
        </View>
    )
}

export default FavouriteArtist

const styles = StyleSheet.create({

    root: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 200,
        marginLeft: 5,
        // backgroundColor: 'blue'
    },
    imageContainer: {
        height: '70%',
        width: '80%',
        // borderRadius: 80,

    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 85
    },
    artistNameContainer: {
        justifyContent: 'center',
        height: '20%',
        width: '85%',
        alignItems: 'center',

    },
    artistNameText: {
        fontWeight: '500',
        color: 'white',
        // fontSize: 18,
    },
    favoriteArtistContainer: {
        backgroundColor: 'black',
        padding: 20
    },
    favouriteArtistText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
})