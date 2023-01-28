import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FavouriteArtistAsync } from '../../Redux/Reducers/HomeScreenSlice'

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
    dispatch = useDispatch();
    const AccessToken = useSelector((state) => state.AccessToken.token)

    useEffect(() => {
        dispatch(FavouriteArtistAsync(AccessToken))
    }, [dispatch])

    const favouriteArtistData = useSelector((state) => state.homeReducer.FavouriteArtist)
    return (
        <View>
            <View style={styles.favoriteArtistContainer}>
                <Text style={styles.favouriteArtistText}> Your favourite artists</Text>
            </View>
            <FlatList
                horizontal
                data={favouriteArtistData.items}
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