import { StyleSheet, View, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import TopComponent from './TopComponents'
import MusicList from './MusicList'
import { useNavigation, useRoute } from '@react-navigation/native'
import SmallPlayer from '../../AllweatherComps/MusicPlayerComponent/SmallPlayer'
import Video from 'react-native-video'

const Index = () => {
  const route = useRoute();
  const [musicImg, setMusicImg] = useState('')
  const [musicUrl,setMusicUrl] = useState('')
  const [albumData, setAlbumData] = useState('')
  const [shouldShow, setShouldShow] = useState(false);
  const dataId = route.params.TracksId;
  const Display_Name = route.params.Owner;
  const CoverImage = route.params.Images;
  const PlayListName = route.params.PlaylistName;
  const CreatorImage = route.params.OwnerImage
  const [pause, setPause] = useState(false)
  const OnPlay = () => {
    setPause(false)
  }
  const OnPause = () => {
    setPause(true)
  }
  const Apicall = async () => {
    const endpointUrl = `https://api.spotify.com/v1/playlists/${dataId}/tracks`;
    try {
      const res = await fetch(endpointUrl, {
        headers:
          { 'Authorization': 'Bearer ' + 'BQA-wz0lUJSvgyYxz3h18To6fdkUlG2hR45IortJAjNTZcg62BL2jc2Sojdg0SR6OZOzhlHkaIPedQhEi28UioeeJVm6dBs7eDPluSb_YZatebMMVHAqZ4Ad-MD47yv75k1lGvSpR0rApEmOYPj_ull0pwuw3g_1UCKxzjZHoEw7P62PElqHxWV_GY-FHJibc9ftXtUF8vpKMCfz0ymcJqpD0zsCWGTMl39Ow3zU9zOBfQBk_QP2EMVwsI6yagGgpsPzff-6dPI8HA' },
        json: true
      })
      const result = await res.json();
      console.log(result);
      setAlbumData(result);
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
      <FlatList
        data={albumData.items}
        renderItem={({ item }) => {
          return (
            <View>
              <MusicList
                Images={item.track.album.images[0].url}
                SongName={item.track.name}
                Artists={item.track.artists[0].name}
                OnMusicPressed={() => {
                  console.log(item.track.preview_url);
                  setShouldShow(true)
                  setMusicImg(item.track.album.images[0].url);
                  setMusicUrl(item.track.preview_url) 
                }}
              />
            </View>
          )
        }}
      />
      {
        shouldShow ?
          (
            <SmallPlayer {...{ pause, OnPlay, OnPause }} MusicImg={musicImg}
            />
          )
          : null
      }
      <Video source={{uri:musicUrl}} audioOnly paused={pause}/>
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