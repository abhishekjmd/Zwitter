import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, View, FlatList, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'


// ---------------- IMPORTED COMPONENTS ----------
import MusicListTopComponents from './MusicListTopComponents'
import MusicList from './MusicList'
import SmallPlayer from '../../AllweatherComps/MusicPlayerComponent/SmallPlayer'
import { MuslicListAsync } from '../../../Redux/Reducers/LibraryScreenReducer'

const Index = () => {

  const route = useRoute();
  const [musicImg, setMusicImg] = useState('')
  const [musicName, setMusicName] = useState('')
  const [musicOwner, setMusicOwner] = useState('')
  const [shouldShow, setShouldShow] = useState(false);
  const dataId = route.params.TracksId;
  const Display_Name = route.params.Owner;
  const CoverImage = route.params.Images;
  const PlayListName = route.params.PlaylistName;
  const CreatorImage = route.params.OwnerImage

  const dispatch = useDispatch();
  const AccessToken = useSelector((state) => state.AccessToken.token)

  const dispatchFunction = useCallback(() => {
    dispatch(MuslicListAsync({ AccessToken, dataId }))
  }, [dispatch])

  useEffect(() => {
    dispatchFunction();

  }, [dispatchFunction])
  const MusicListData = useSelector((state) => state.libraryReducer.MusicList)
  const musicPresshandle = () => {
    setShouldShow(true);
  }
  return (
    <View style={styles.root}>
      <ScrollView>
        <MusicListTopComponents PlaylistName={PlayListName} Images={CoverImage} Creator={Display_Name} CreatorImage={CreatorImage} />
        <FlatList
          data={MusicListData}
          renderItem={({ item }) => {
            return (
              <View>
                <MusicList
                  Images={item.track.album.images && item.track.album.images ? item.track.album.images[0].url : null}
                  SongName={item.track.name}
                  Artists={item.track.artists[0].name}
                  OnMusicPressed={() => {
                    musicPresshandle();
                    setMusicImg(item.track.album.images && item.track.album.images[0].url ? item.track.album.images[0].url : null)
                    setMusicName(item.track.name)
                    setMusicOwner(item.track.artists[0].name)
                  }}
                />
              </View>
            )
          }}
        />
      </ScrollView>
      {shouldShow ? <SmallPlayer MusicName={musicName} MusicImg={musicImg} SingerName={musicOwner} /> : null}
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