import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

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

const MainRenderComponent = () => {
  const [response, setResponse] = useState('')
  const navigation = useNavigation();
  const spotifyPlaylists = async () => {
    const endpointUrl = "https://api.spotify.com/v1/me/playlists";

    try {
      const res = await fetch(endpointUrl, {
        headers:
          { 'Authorization': 'Bearer ' + 'BQCdTKy4v8KZ292q0eIJn6xaoce4YB2K71Ic2ORMa2FMB4OnUIBCOOOjnNi8XCGZrVDGzErpqZDwCMNr0e4hCBr7oSeeOl9l0dAR0v8RhiQjjcBnrbklubPARsH4zJhzgDIvDnwjNQRtRuUta5S0Zknh-SNEzIJfqvg3g9ZQIGNqZKWHWBWblRfL8BMcnyUCg3nKH710O0oOMfv_3Kldq6cwUXmZPjXt_0wKvnh2KG_Ej6grpIBh-9Ph2aGSinTOWwG8ksKES6D4Fg' },
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
                OnPlaylistPressed={() => {
                  console.warn(item.id)
                  navigation.navigate('MusicList', { TracksId: item.id, Owner: item.owner.display_name, Images: item.images[0].url, PlaylistName: item.name, OwnerImage: item.owner.uri  })
                }}
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