import { StyleSheet, Text, View, Image, Pressable, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

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
    const [response, setResponse] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const { token } = useSelector((state) => {
        return state
    })
    
    const RecentShowsApi = async () => {
        const endPointUrl = `https://api.spotify.com/v1/browse/featured-playlists?country=IN&locale=en_IN`;
        try {
            const res = await fetch(endPointUrl, {
                'headers': {
                    'Authorization': 'Bearer ' + token
                },
                json: true
            })
            const result = await res.json();
            console.log(result.playlists);
            setResponse(result.playlists)
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        RecentShowsApi();
    }, [])
    return (
        <View style={{ backgroundColor: 'black' }}>
            {isLoading
                ?
                <View style={styles.loader}>
                    <ActivityIndicator size='large' color='green' />
                </View>
                :
                (
                    <View>
                        <View style={styles.biggesthitsContainer}>
                            <Text style={styles.biggesthitsText}> Today's biggest hits</Text>
                        </View>

                        <FlatList
                            horizontal
                            data={response.items}
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
        marginLeft: 5
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
        alignItems: 'center',
        // backgroundColor:'blue'
    },
    PlaylistText: {
        fontWeight: '500',
        color: 'white',
        fontSize: 18,
    },
    biggesthitsContainer: {
        // backgroundColor:'blue',
        padding: 10
    },
    biggesthitsText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
})