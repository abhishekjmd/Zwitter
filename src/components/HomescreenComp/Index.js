import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import TopBar from './TopBar'
import SwipeToggle from '../AllweatherComps/SwipeToggle'
import RecentlyPlayed from '../AllweatherComps/RecentlyPlayed'
import ShowsPodcast from './ShowsPodcast'
import SmallPlayer from '../AllweatherComps/MusicPlayerComponent/SmallPlayer'
import { useSelector } from 'react-redux'

const Index = () => {
    const { token } = useSelector((state) => {
        return state
    });
    const apiCalling = async () => {
        const artistId = '4YRxDV8wJFPHPTeXepOstw'
        const endpointUrl = "https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=4YRxDV8wJFPHPTeXepOstw"
        const res = await fetch(endpointUrl, {
            headers: { 'Authorization': 'Bearer ' + token, },
            json: true
        })
        const result = await res.json();
        console.log(result);
    }
    useEffect(() => {
        apiCalling()
    }, [])

    return (
        <View style={styles.root}>
            <TopBar />
            <ScrollView style={styles.sub} horizontal={true} showsHorizontalScrollIndicator={false}>
                <SwipeToggle text='music' />
                <SwipeToggle text='Podcast & shows' />
                <SwipeToggle text='Podcast & shows' />
            </ScrollView>
            <RecentlyPlayed />
            <ShowsPodcast />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    sub: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
})


