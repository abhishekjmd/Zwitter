import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { MainLibraryAsync } from '../../../Redux/Reducers/LibraryScreenReducer'


// ----------------- MAINCREATECOMPONENT ------------
export const MainCreateComponent = ({ PlaylistName, image, Owner, OnPlaylistPressed }) => {
  return (
    <Pressable style={styles.root} onPress={OnPlaylistPressed}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: image }}
          style={styles.Image}
        />
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.toptxt}> {PlaylistName.length > 20 ? PlaylistName.slice(0, 20) + ' ..' : PlaylistName} </Text>
        <Text style={styles.sndtxt}>Playlist . {Owner.length > 20 ? Owner.slice(0, 20) : Owner}</Text>
      </View>
    </Pressable>
  )
}


// ----------------- MAINRENDERFUNCTION ------------
const MainRenderComponent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  
  const AccessToken = useSelector((state) => state.AccessToken.token)
  
  const dispatchFunction = useCallback(() => {
    dispatch(MainLibraryAsync(AccessToken))
  }, [dispatch])
  
  useEffect(() => {
    dispatchFunction()
  }, [dispatchFunction])

  const MainLibraryData = useSelector((state) => state.libraryReducer.MainLibrary)
  return (
    <View>
      <FlatList
        data={MainLibraryData}
        renderItem={({ item, index }) => {
          return (
            <View style={{ marginTop: 5 }} key={index}>
              <MainCreateComponent
                PlaylistName={item.name}
                Owner={item.owner.display_name}
                image={item.images[0].url}
                OnPlaylistPressed={() => {
                  console.warn(item.id)
                  navigation.navigate('MusicList', { TracksId: item.id, Owner: item.owner.display_name, Images: item.images[0].url, PlaylistName: item.name, OwnerImage: item.owner.uri })
                }}
              />
            </View>
          )
        }}
      />


    </View >
  )
}

const MainComponent = () => {
  return (
    <View>
      <MainRenderComponent />
    </View>
  )

}

export default MainComponent

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'row',
    height: 90,
  },
  imgContainer: {
    height: '100%',
    justifyContent: 'center',
    left: 10
  },
  Image: {
    width: 70,
    height: 70,
  },
  txtContainer: {
    left: 25,
    width: '76%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  toptxt: {
    fontSize: 19,
    fontWeight: '500',
    color: 'white',

  },
  sndtxt: {
    fontSize: 15,
    color: '#d7d8db',
    left: 6
  },
})