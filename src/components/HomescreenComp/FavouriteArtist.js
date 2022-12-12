import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

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
    const { token } = useSelector((state) => {
        return state
    })
    const FavouriteArtistApi = async () => {
        try {
            const endpointUrl = `https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=10&offset=5`
            const res = await fetch(endpointUrl, {
                'headers': {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            })
            const result = await res.json();
            console.log(result);
            setResponse(result);
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
        fontSize: 18,
    },
    favoriteArtistContainer: {
        backgroundColor: 'black',
        padding: 10
    },
    favouriteArtistText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
})