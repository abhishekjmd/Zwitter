import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import TopBar from './TopBar'
import RecentlyPlayed from './RecentlyPlayed'
import { useSelector } from 'react-redux'
import BiggestHits from './BiggestHits'
import FavouriteArtist from './FavouriteArtist'
import NewReleases from './NewReleases'
import RecentlyPlaylistPlayed from './RecentlyPlaylistPlayed'
const Index = () => {
    return (
        <ScrollView style={styles.root}>
            <TopBar />
            <BiggestHits />
            <FavouriteArtist />
            {/*
            <RecentlyPlaylistPlayed />
           // <RecentlyPlayed />
        */}
        </ScrollView>
    )
}

export default Index

const styles = StyleSheet.create({
    root: {
        // flex: 1,
        backgroundColor: 'black'
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


