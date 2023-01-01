import { StyleSheet, Text, View, Image, Pressable, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BigHitsPlaylistAsync } from '../../Redux/Reducers/HomeScreenSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
const BiggestHitsComp = ({ onPlaylistCompPressed, image, playlistName }) => {
    return (
        <Pressable style={styles.PlaylistMainContainer} onPress={onPlaylistCompPressed} >
            <View style={styles.PlaylistImageContainer}>
                <Image source={{ uri: image }} style={styles.PlaylistImage} />
            </View>
            <View style={styles.PlaylistTextContainer}>
                <Text style={styles.PlaylistText}> {playlistName && playlistName.length > 25 ? playlistName.slice(0, 25) + '...' : playlistName} </Text>
            </View>
        </Pressable>
    )
}

const BiggestHits = () => {
    const dispatch = useDispatch();
    const BigHitsData = useSelector((state) => state.homeReducer.BigHits)
    const data = async () => {
        try {
             await dispatch(BigHitsPlaylistAsync())
            console.log('BigHitsData', BigHitsData.items);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        data();
    }, [])
    return (
        <View style={{ backgroundColor: 'black' }}>
            <View style={styles.biggesthitsContainer}>
                <Text style={styles.biggesthitsText}> Today's biggest hits</Text>
            </View>

            <FlatList
                horizontal
                data={BigHitsData.items}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <BiggestHitsComp image={item.images[0].url} playlistName={item.name} />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default BiggestHits

const styles = StyleSheet.create({
    loader: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    PlaylistMainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 200,
        marginLeft: 5,
        // backgroundColor:'blue'
    },
    PlaylistImageContainer: {
        height: '75%',
        width: '90%',
    },
    PlaylistImage: {
        height: '100%',
        width: '100%',
    },
    PlaylistTextContainer: {
        justifyContent: 'center',
        height: '20%',
        width: '85%',
        // alignItems: 'center',
        // backgroundColor:'blue'
    },
    PlaylistText: {
        fontWeight: '500',
        color: 'white',
        // fontSize: 18,
    },
    biggesthitsContainer: {
        // backgroundColor:'blue',
        padding: 20
    },
    biggesthitsText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
})