import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Video from 'react-native-video'

// ---------------- IMPORTED COMPONENTS ----------
import TopComponent from './TopComponents'
import MusicList from './MusicList'
import SmallPlayer from '../../AllweatherComps/MusicPlayerComponent/SmallPlayer'

const Index = () => {

  const route = useRoute();
  const [durations, setDuration] = useState(0)
  const [musicImg, setMusicImg] = useState('')
  const [musicUrl, setMusicUrl] = useState('')
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
          { 'Authorization': 'Bearer ' + 'BQBSYlH4EBapSaCrN05u1OAs75tJguz2uYO15u27r5OMofJqpEQ_S-TGZZ58sUHGAl6LRNEAbX190dLkk07sn5RAo12guiZMyTAVuJ2xBGqCghbegHO_wW3hPyuCr_DOkGxqXTm7F6RHqz6BShVDbqnObvHJheqYH_0n1ijgj5u6pHqNc9iulMkArlKMiwGhKkBLdaUe_bIjdk8Vbu7afe1X_0_2CNcfyyBJ-vxwQBqHH6UjZnvgsUsQcAz7aeOwLjNJUf0syoqvpg' },
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
                  setShouldShow(true)
                  setMusicImg(item.track.album.images[0].url);
                  setMusicUrl(item.track.preview_url)
                  setDuration(item.track.duration_ms)
                  // console.log(setDuration);
                }}
              />
            </View>
          )
        }}
      />
      {
        shouldShow ?
          (
            <>
              <SmallPlayer {...{ pause, OnPlay, OnPause }} MusicImg={musicImg} />
              <Video
                source={{ uri: musicUrl }}
                poster={musicImg}
                audioOnly
                paused={pause}
                onProgress={{

                }}

              />
            </>
          )
          : null
      }

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