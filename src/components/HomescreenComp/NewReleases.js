import { StyleSheet, Text, View, Pressable, FlatList,Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

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
    const [response, setResponse] = useState('')
    const { token } = useSelector((state) => {
        return state
    })
    const NewReleaseApi = async () => {
        try {
            const endPointUrl = `https://api.spotify.com/v1/browse/new-releases?country=IN&limit=20`
            const res = await fetch(endPointUrl, {
                'headers': {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            })
            const result = await res.json();
            console.log(result.albums);
            setResponse(result.albums);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        NewReleaseApi();
    }, [])
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}> Fresh Releases</Text>
            </View>
            <FlatList
                horizontal
                data={response.items}
                renderItem={({ item }) => {
                    return (
                        <NewReleasesComp image={item.images[0].url} playlistName={item.name} />
                    )
                }}
            />
        </View>
    )
}

export default NewReleases

const styles = StyleSheet.create({
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