import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import TopBar from './TopBar'
import BiggestHits from './BiggestHits'
import FavouriteArtist from './FavouriteArtist'
import RecentlyPlaylistPlayed from './RecentlyPlaylistPlayed'
import NewReleases from './NewReleases'
import RecentlyPlayed from './RecentlyPlayed'
const Index = () => {

    return (
        <View style={styles.root}>
            <ScrollView>
                <TopBar />
                <RecentlyPlaylistPlayed />
                <BiggestHits />
                <FavouriteArtist />
                <NewReleases />
                <RecentlyPlayed />
            </ScrollView>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'black',
        position: 'relative'

    },
    sub: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'black'
    },
})


