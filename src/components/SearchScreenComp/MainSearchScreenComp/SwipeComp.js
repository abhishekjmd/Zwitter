import { StyleSheet, Text, View, FlatList,ScrollView } from 'react-native'
import React from 'react'
import { SwipableComponent } from '../../YourLibraryComp/MainLibraryComp/TopComponent'

const SwipeComp = () => {
    return (
        <View>
            <FlatList
                data={SwipableComponent}
                horizontal={true}
                renderItem={() => {
                    return (
                        <View style={{ flexDirection: 'row' }}>
                            <SwipableComponent text='Top' onPress={() => { console.warn('Playlist pressed') }} />
                            <SwipableComponent text='Songs' onPress={() => { console.warn('Artist pressed') }} />
                            <SwipableComponent text='Albums' onPress={() => { console.warn('Album pressed') }} />
                            <SwipableComponent text='Playlists' onPress={() => { console.warn('Artist pressed') }} />
                            <SwipableComponent text='Artists' onPress={() => { console.warn('Artist pressed') }} />
                            <SwipableComponent text='Podcasts & Shows' type='Primary' onPress={() => { console.warn('Podcast pressed') }} />
                            <SwipableComponent text='Profiles' onPress={() => { console.warn('Artist pressed') }} />
                            <SwipableComponent text='Genres & Moods' type='Primary' onPress={() => { console.warn('Artist pressed') }} />
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