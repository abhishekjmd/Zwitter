import { StyleSheet, Text, View, Image, FlatList,Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

export const MainCreateComponent = ({ PlaylistName, image, Owner }) => {
  const OnPlaylistPressed = ()=>{
    
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
          { 'Authorization': 'Bearer ' + 'BQB2DhvDwsgcRn3UQTUIZJAXZAIzBdJFugBH735m2KmRmKsj1Bnfy_f73ySaDY06LLLwdnu4SZ0j-NHTF4qxTUUWthGVq8skWCfv0m1ssty8-QlTD_N6UFcI404BOgSFGluvEu35ECgWZYRG9_o2NZQlzFEywk070m8tqXCgFSwvPsXE19oNzSnsA7-kfO5pv-3ZuNTomlZSMoUgMqlaqkcGVyoJUr0GdmiKdKRYXrSByBGKQOqLHZ4F2Do2NviZ-8KmRQsaG0Um_w' },
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