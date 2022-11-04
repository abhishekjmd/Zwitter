import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

export const MainCreateComponent = ({ PlaylistName, image, Owner }) => {
  const navigation = useNavigation();
  const OnPlaylistPressed = () => {
    navigation.navigate('MusicList')
  }
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

const MainRenderComponent = () => {
  const [response, setResponse] = useState('')
  const spotifyPlaylists = async () => {
    const endpointUrl = "https://api.spotify.com/v1/me/playlists";

    try {
      const res = await fetch(endpointUrl, {
        headers:
          { 'Authorization': 'Bearer ' + 'BQA1DJR_pXefTl_Ti1T1yDx-0j4Csr-lxzjd3lPMeKBVPfbOoSfJzTDiG95RPLuQiJjRSGHePWEV0tFwL83CuKRFzBr8Lw5mOV2aYobHBxQifpy3NnLHTB-_-B5EpZlcSadZn7-bUlq1IyWBbpU0DoOFVt2q_c5agZ8d5Io1arR_BoKx2sbQ5g5uvWW8qbB_E6cFyWfCoBUt18yenKTkQelL9-EClvZ-K7OQpaQmv8naM7i3gUxvUicS_Dpq6oVmmr73SxSyQGpeIw' },
        json: true
      })
      const result = await res.json();
      console.log(result);
      setResponse(result);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    spotifyPlaylists();
  }, [])
  return (
    <View>
      <FlatList
        data={response.items}
        renderItem={({ item, index }) => {
          return (
            <View style={{ marginTop: 5 }} key={index}>
              <MainCreateComponent
                PlaylistName={item.name}
                Owner={item.owner.display_name}
                image={item.images[0].url}
              />
            </View>
          )
        }}
      />
    </View>
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
    fontSize: 22,
    fontWeight: '500',
    color: 'white',

  },
  sndtxt: {
    fontSize: 15,
    color: '#d7d8db',
    left: 6
  },
})