import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import TopComponent from './TopComponents'
import MusicList from './MusicList'
import { useRoute } from '@react-navigation/native'
import SmallPlayer from '../../AllweatherComps/MusicPlayerComponent/SmallPlayer'


const Index = () => {
  const route = useRoute();
  const [data, setData] = useState('')
  const dataId = route.params.TracksId;
  const Display_Name = route.params.Owner;
  const CoverImage = route.params.Images;
  const PlayListName = route.params.PlaylistName;
  const CreatorImage = route.params.OwnerImage
  const Apicall = async () => {
    const endpointUrl = `https://api.spotify.com/v1/playlists/${dataId}/tracks`;
    try {
      const res = await fetch(endpointUrl, {
        headers:
          { 'Authorization': 'Bearer ' + 'BQCdTKy4v8KZ292q0eIJn6xaoce4YB2K71Ic2ORMa2FMB4OnUIBCOOOjnNi8XCGZrVDGzErpqZDwCMNr0e4hCBr7oSeeOl9l0dAR0v8RhiQjjcBnrbklubPARsH4zJhzgDIvDnwjNQRtRuUta5S0Zknh-SNEzIJfqvg3g9ZQIGNqZKWHWBWblRfL8BMcnyUCg3nKH710O0oOMfv_3Kldq6cwUXmZPjXt_0wKvnh2KG_Ej6grpIBh-9Ph2aGSinTOWwG8ksKES6D4Fg' },
        json: true
      })
      const result = await res.json();
      console.log(result);
      console.warn(dataId);
      setData(result);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    Apicall();
  }, [])
  return (
    <View style={styles.root}>
      <TopComponent PlaylistName={PlayListName} Images={CoverImage} Creator={Display_Name} CreatorImage={CreatorImage} />
      <SmallPlayer />
      <FlatList
        data={data.items}
        renderItem={({ item }) => {
          return (
            <View>
              <MusicList
                Images={item.track.album.images[0].url}
                SongName={item.track.name}
                Artists={item.track.artists[0].name}
              />
            </View>
          )
        }}
      />


    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black'
  },
})