import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

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
          { 'Authorization': 'Bearer ' + 'BQBSYlH4EBapSaCrN05u1OAs75tJguz2uYO15u27r5OMofJqpEQ_S-TGZZ58sUHGAl6LRNEAbX190dLkk07sn5RAo12guiZMyTAVuJ2xBGqCghbegHO_wW3hPyuCr_DOkGxqXTm7F6RHqz6BShVDbqnObvHJheqYH_0n1ijgj5u6pHqNc9iulMkArlKMiwGhKkBLdaUe_bIjdk8Vbu7afe1X_0_2CNcfyyBJ-vxwQBqHH6UjZnvgsUsQcAz7aeOwLjNJUf0syoqvpg' },
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