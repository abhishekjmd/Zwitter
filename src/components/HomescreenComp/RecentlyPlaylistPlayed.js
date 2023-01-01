import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RecentlyPlayedPlaylistAsync } from '../../Redux/Reducers/HomeScreenSlice'


const RecentlyPlayedComponent = ({ textField, imageField }) => {
    return (
        <View style={styles.root}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: imageField }} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.text}> {textField && textField.length > 25 ? textField.slice(0, 25) + '...' : textField} </Text>
                </View>
            </View>
        </View>
    )
}

const RecentlyPlaylistPlayed = () => {
    const [response, setResponse] = useState('')
    const dispatch = useDispatch();
    const RecentlyPlayedData = useSelector((state) =>
        state.homeReducer.RecentlyPlayed
    );
    const DispatchFunction = async () => {
        try {
             dispatch(RecentlyPlayedPlaylistAsync())
            const finalResult = await RecentlyPlayedData.items;
            const renderResult = await finalResult.slice(0,6);
            console.log('slice',renderResult)
            setResponse(finalResult.slice(0, 6))
            // console.log(RecentlyPlayedData);
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        DispatchFunction()
    }, [])

    return (
        <View style={styles.main}>
            <FlatList
                data={response}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <RecentlyPlayedComponent textField={item.track.album.name} imageField={item.track.album.images[0].url} />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default RecentlyPlaylistPlayed

const styles = StyleSheet.create({
    main: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    root: {
        width: 180,
        height: 60,
        marginLeft: 5,
        marginBottom: 5,
        alignItems: 'center',
    },
    container: {
        width: '99%',
        height: '100%',
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#545659',
    },
    imageContainer: {
        width: 60,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5
    },
    textContainer: {
        width: '65%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600'
    },
})