import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

export const MainCreateComponent = ({ PlaylistName, image, Owner }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imgContainer}>
        <Image
          source={{ uri: image }}
          style={styles.Image}
        />
      </View>
      <View style={styles.txtContainer}>
        <Text style={styles.toptxt}> {PlaylistName} </Text>
        <Text style={styles.sndtxt}>Playlist . {Owner}</Text>
      </View>
    </View>
  )
}

const MainRenderComponent = () => {
  const [response, setResponse] = useState('')
  const spotifyPlaylists = async () => {
    const endpointUrl = "https://api.spotify.com/v1/me/playlists";

    try {
      const res = await fetch(endpointUrl, {
        headers:
          { 'Authorization': 'Bearer ' + 'BQB98slfH1Vmlvd-5KAC0mmpi6u74_UJy39Fs9eay4I3-nacnAAcF7X2qaiVFImrAbu_D3Mc_KwoethrmEYDVUjFw8arVGg2JSiMg_mFVqTuy3KeexGPhE16HLIIXiH0XW7zkIt-XJDqGa4gyrM-E-OzhK7hHA_3hFidU1DMSav9q9Aiaz4q_UU_meCb-AyyLyc7P-5RldKsu_ivckZx1USiwrg5mXDOzt60lPvSrwJvFHm1Yvd79aL2Jes9DX5NvcwJFTHfXgRVXQ' },
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