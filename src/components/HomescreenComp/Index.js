import { StyleSheet,  View, ScrollView } from 'react-native'
import React from 'react'
import TopBar from './TopBar'
import SwipeToggle from '../AllweatherComps/SwipeToggle'
import RecentlyPlayed from '../AllweatherComps/RecentlyPlayed'
import ShowsPodcast from './ShowsPodcast'

const Index = () => {
    const onlikePressed=()=>{

    }
    return (
        <View style={styles.root}>
            <TopBar />
            <ScrollView style={styles.sub} horizontal={true} showsHorizontalScrollIndicator={false}>
                <SwipeToggle text='music' onPress={onlikePressed} />
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
        marginBottom:10,
    },
})