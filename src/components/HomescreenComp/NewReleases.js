import { StyleSheet, Text, View, Pressable, FlatList, Image } from 'react-native'
import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NewReleasesPlaylistAsync } from '../../Redux/Reducers/HomeScreenSlice'
import { useNavigation } from '@react-navigation/native'

const NewReleasesComp = ({ onPlaylistCompPressed, image, playlistName }) => {
    return (
        <Pressable style={styles.root} onPress={onPlaylistCompPressed} >
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            <View style={styles.newReleaseContainer}>
                <Text style={styles.newReleaseText}> {playlistName && playlistName.length > 25 ? playlistName.slice(0, 25) + '...' : playlistName} </Text>
            </View>
        </Pressable>

    )
}
const NewReleases = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();


    const AccessToken = useSelector((state) => state.AccessToken.token)
    const dispatchFunction = useCallback(() => {
        dispatch(NewReleasesPlaylistAsync(AccessToken))
    }, [dispatch])

    useEffect(() => {
        dispatchFunction()
    }, [dispatchFunction])

    const newReleaseData = useSelector((state) => state.homeReducer.NewReleases)
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}> Fresh Releases</Text>
            </View>
            <FlatList
                horizontal
                data={newReleaseData}
                renderItem={({ item }) => {
                    return (
                        <NewReleasesComp image={item.images[0].url} playlistName={item.name}   />
                    )
                }}
            />
        </View>
    )
}

export default NewReleases

const styles = StyleSheet.create({
    loader: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    root: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 200,
        marginLeft: 5,
        // backgroundColor:'blue'
    },
    imageContainer: {
        height: '75%',
        width: '90%',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    newReleaseContainer: {
        justifyContent: 'center',
        height: '20%',
        width: '90%',
        alignItems: 'center',
        // backgroundColor:'green'
    },
    newReleaseText: {
        fontWeight: '500',
        color: 'white',
        // fontSize: 18,
    },
    container: {
        padding: 20
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
})