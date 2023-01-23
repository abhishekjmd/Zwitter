import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SwipableComponent } from '../../YourLibraryComp/MainLibraryComp/TopComponent'

const SwipeComp = ({ TopPressed, SongsPressed, AlbumsPressed, PlaylistsPressed, ArtistsPressed, PodcastsShowsPressed, ProfilesPressed, GenresMoodsPressed }) => {
    return (
        <View style={styles.root}>
            <FlatList
                data={SwipableComponent}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={() => {
                    return (
                        <View style={{ flexDirection: 'row' }}>
                            <SwipableComponent text='Top' onPress={TopPressed} />
                            <SwipableComponent text='Songs' onPress={SongsPressed} />
                            <SwipableComponent text='Albums' onPress={AlbumsPressed} />
                            <SwipableComponent text='Playlists' onPress={PlaylistsPressed} />
                            <SwipableComponent text='Artists' onPress={ArtistsPressed} />
                            <SwipableComponent text='Podcasts & Shows' type='Primary' onPress={PodcastsShowsPressed} />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default SwipeComp

const styles = StyleSheet.create({
    root:{
        height:75,
        // backgroundColor:'blue'
    },
})