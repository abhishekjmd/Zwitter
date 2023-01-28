import { StyleSheet, View, ScrollView, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import TopBar from './TopBar'
import BiggestHits from './BiggestHits'
import FavouriteArtist from './FavouriteArtist'
import RecentlyPlaylistPlayed from './RecentlyPlaylistPlayed'
import NewReleases from './NewReleases'
import RecentlyPlayed from './RecentlyPlayed'
import { BigHitsPlaylistAsync, FavouriteArtistAsync, NewReleasesPlaylistAsync, RecentlyPlayedPlaylistAsync } from '../../Redux/Reducers/HomeScreenSlice'
import { useDispatch, useSelector } from 'react-redux'
const Index = () => {
   const dispatch = useDispatch();
   
    const [refreshing, setRefreshing] = useState(false)
    const AccessToken = useSelector((state) => state.AccessToken.token)
    const onRefresh = async () => {
        setRefreshing(true);
        dispatch(BigHitsPlaylistAsync(AccessToken));
        dispatch(FavouriteArtistAsync(AccessToken));
        dispatch(NewReleasesPlaylistAsync(AccessToken));
        dispatch(RecentlyPlayedPlaylistAsync(AccessToken));
        setRefreshing(false)
    }

    return (
        <View style={styles.root}>
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
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


