import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SwipableComponent } from '../../YourLibraryComp/MainLibraryComp/TopComponent'

const SwipeComp = ({ TopPressed, SongsPressed, AlbumsPressed, PlaylistsPressed, ArtistsPressed, PodcastsShowsPressed, ProfilesPressed, GenresMoodsPressed }) => {
    return (
        <View>
            <FlatList
                data={SwipableComponent}
                horizontal={true}
                renderItem={() => {
                    return (
                        <View style={{ flexDirection: 'row' }}>
                            <SwipableComponent text='Top' onPress={TopPressed} />
                            <SwipableComponent text='Songs' onPress={SongsPressed} />
                            <SwipableComponent text='Albums' onPress={AlbumsPressed} />
                            <SwipableComponent text='Playlists' onPress={PlaylistsPressed} />
                            <SwipableComponent text='Artists' onPress={ArtistsPressed} />
                            <SwipableComponent text='Podcasts & Shows' type='Primary' onPress={PodcastsShowsPressed} />
                            <SwipableComponent text='Profiles' onPress={ProfilesPressed} />
                            <SwipableComponent text='Genres & Moods' type='Primary' onPress={GenresMoodsPressed} />
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default SwipeComp

const styles = StyleSheet.create({

})