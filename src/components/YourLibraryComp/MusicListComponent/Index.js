import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'


// ---------------- IMPORTED COMPONENTS ----------
import MusicListTopComponents from './MusicListTopComponents'
import MusicList from './MusicList'
import SmallPlayer from '../../AllweatherComps/MusicPlayerComponent/SmallPlayer'
// import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
// import { setupPlayer } from '../../../../trackPlayerService'


const Index = () => {

  const route = useRoute();
  const [durations, setDuration] = useState('')
  const [musicImg, setMusicImg] = useState('')
  const [musicUrl, setMusicUrl] = useState('')
  const [musicName, setMusicName] = useState('')
  const [musicOwner, setMusicOwner] = useState('')
  const [albumData, setAlbumData] = useState('')
  const [shouldShow, setShouldShow] = useState(false);
  const dataId = route.params.TracksId;
  const Display_Name = route.params.Owner;
  const CoverImage = route.params.Images;
  const PlayListName = route.params.PlaylistName;
  const CreatorImage = route.params.OwnerImage
  // const [pause, setPause] = useState(false)
  const { token } = useSelector((state) => { return state })
  // const playbackState = usePlaybackState();

  const Apicall = async () => {
    const endpointUrl = `https://api.spotify.com/v1/playlists/${dataId}/tracks`;
    try {
      const res = await fetch(endpointUrl, {
        headers:
          { 'Authorization': 'Bearer ' + token },
        json: true
      })
      const result = await res.json();
      console.log(result);
      setAlbumData(result);
    } catch (error) {
      console.log(error)
    }
  }

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    // const track = { url: musicUrl }
    // await TrackPlayer.add(music)
  }

  const togglePlay = async (playbackState) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    // console.log(currentTrack);
    if (currentTrack !== null) {
      if (playbackState == State.Playing) {
        await TrackPlayer.pause();
        console.log('playing')
      } else {
        await TrackPlayer.play();
        console.log('not playing')
      }
    }
  }

  useEffect(() => {
    setupPlayer();
    Apicall();
  }, [])
  return (
    <View style={styles.root}>
      <MusicListTopComponents PlaylistName={PlayListName} Images={CoverImage} Creator={Display_Name} CreatorImage={CreatorImage} />
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
                  setMusicImg(item.track.album.images[0].url)
                  setMusicUrl(item.track.preview_url && item.track.preview_url ? item.track.preview_url : null);
                  setDuration(item.track.duration_ms)
                  setMusicName(item.track.name)
                  setMusicOwner(item.track.artists[0].name)
                }}
                onSongPressed={() => togglePlay(playbackState)}
              />
            </View>
          )
        }}
      />
      {
        shouldShow ?
          (
            <>
              <SmallPlayer
                // {...{ pause, OnPlay }}
                MusicImg={musicImg}
                MusicName={musicName}
                SingerName={musicOwner}
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
  SmallPlayerContainer: {
    // marginTop:220,
    alignItems: 'center',
    backgroundColor: 'blue'
  },
})