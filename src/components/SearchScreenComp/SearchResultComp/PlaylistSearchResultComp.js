import { StyleSheet, View, FlatList,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'

import MusicListTopComponents from '../../YourLibraryComp/MusicListComponent/MusicListTopComponents'
import MusicList from '../../YourLibraryComp/MusicListComponent/MusicList'

const PlaylistSearchResultComp = () => {
  const route = useRoute();
  const [response, setResponse] = useState('')
  const playlist_id = route.params.Id
  const CoverImage = route.params.Images
  const PlayListName = route.params.PlayListName
  const CreatorName = route.params.OwnerName
  const AccessToken = useSelector((state) => state.AccessToken.token)

  const PlaylistApi = async () => {
    try {
      const EndpointUrl = `https://api.spotify.com/v1/playlists/${playlist_id}`
      const res = await fetch(EndpointUrl, {
        'headers': {
          'Authorization': 'Bearer ' + AccessToken
        },
        json: true
      })
      const result = await res.json();
      const finalres = await result.tracks;
      console.log(finalres);
      setResponse(finalres);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    PlaylistApi()
  }, [])
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <MusicListTopComponents Images={CoverImage} PlaylistName={PlayListName} Creator={CreatorName} LikesCount={30} />
      <FlatList
        style={{ backgroundColor: 'black' }}
        data={response.items}
        renderItem={({ item }) => {
          return (
            <View>
              <MusicList
                Images={item.track.album.images[0].url}
                SongName={item.track.name && item.track.name.length > 40 ? item.track.name.slice(0, 40) + '..' : item.track.name}
                Artists={item.track.artists[0].name}
              />
            </View>
          )
        }}
      />
    </ScrollView>
  )
}

export default PlaylistSearchResultComp

const styles = StyleSheet.create({})