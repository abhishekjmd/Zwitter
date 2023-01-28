import { StyleSheet, Text, View, Image, Pressable, FlatList, RefreshControl } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BigHitsPlaylistAsync } from '../../Redux/Reducers/HomeScreenSlice'
import { PlaylistComp } from '../SearchScreenComp/MainSearchScreenComp/SubSearchComps'
import { useNavigation } from '@react-navigation/native'
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
    const navigation = useNavigation();
    const AccessToken = useSelector((state) => state.AccessToken.token)
    const dataDispatchFunction = useCallback(() => {
        dispatch(BigHitsPlaylistAsync(AccessToken))
    }, [dispatch])

    useEffect(() => {
        dataDispatchFunction()
    }, [])
    const BigHitsData = useSelector((state) => state.homeReducer.BigHits)

    return (
        <View style={{ backgroundColor: 'black' }}>
            <View style={styles.biggesthitsContainer}>
                <Text style={styles.biggesthitsText}> Today's biggest hits</Text>
            </View>
            <FlatList
                horizontal
                data={BigHitsData}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <BiggestHitsComp image={item.images[0].url} playlistName={item.name}
                                onPlaylistCompPressed={() => {
                                    navigation.navigate('PlaylistSearchResult', { Id: item.id, Images: item.images[0].url, PlayListName: item.name, OwnerName: item.owner.display_name, })
                                }}
                            />
                        </View>
                    )
                }}
            />
        
        </View>
    )
}

export default BiggestHits

const styles = StyleSheet.create({
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