import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'


// ---------------- IMPORTED COMPONENTS ----------
import MusicListTopComponents from './MusicListTopComponents'
import MusicList from './MusicList'
import SmallPlayer from '../../AllweatherComps/MusicPlayerComponent/SmallPlayer'
import { MuslicListAsync } from '../../../Redux/Reducers/LibraryScreenReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Index = () => {

  const route = useRoute();
  const [musicImg, setMusicImg] = useState('')
  const [musicUrl, setMusicUrl] = useState('')
  const [musicName, setMusicName] = useState('')
  const [musicOwner, setMusicOwner] = useState('')
  const [shouldShow, setShouldShow] = useState(false);
  const dataId = route.params.TracksId;
  const Display_Name = route.params.Owner;
  const CoverImage = route.params.Images;
  const PlayListName = route.params.PlaylistName;
  const CreatorImage = route.params.OwnerImage
 
  const dispatch = useDispatch();
  const MusicListData = useSelector((state) => state.libraryReducer.MusicList)
  const dispatchFunction = async () => {
    try {
      await dispatch(MuslicListAsync());
      console.log('dataId', dataId)
      await AsyncStorage.setItem('dataId', dataId)
      console.log('MusicListData', MusicListData)
    } catch (error) {
      console.log(error);
    }
  }
 


  useEffect(() => {
    dispatchFunction();

  }, [])
  return (
    <View style={styles.root}>
      <MusicListTopComponents PlaylistName={PlayListName} Images={CoverImage} Creator={Display_Name} CreatorImage={CreatorImage} />

      <FlatList
        data={MusicListData.items}
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