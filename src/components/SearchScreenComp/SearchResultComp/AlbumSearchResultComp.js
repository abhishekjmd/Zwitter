import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import MusicListTopComponents from '../../YourLibraryComp/MusicListComponent/MusicListTopComponents'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'

// ---------------  ALBUM TRACK LIST COMPONENT ------
const AlbumTrackComp = ({ SongName, Artists, Images, OnMusicPressed }) => {
  return (
    <Pressable style={styles.main} onPress={OnMusicPressed}>
      <View style={styles.MainContainer}>
        <View style={styles.MainTextContainer}>
          <Text style={styles.FirstText}> {SongName && SongName.length > 45 ? SongName.slice(0,45)+ '...' : SongName} </Text>
          <View style={styles.SecondContainer}>
            <View>
              <Text style={styles.LastText}> {Artists} </Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  )
}


const AlbumSearchResultComp = () => {
  const [response, setResponse] = useState('')
  const route = useRoute();
  const coverImage = route.params.Images;
  const CoverName = route.params.AlbumName;
  const ArtistName = route.params.ArtistName;
  const AlbumsId = route.params.AlbumId
  const Type = route.params.TypeGenre
  const { token } = useSelector((state) => {
    return state
  })
  const AlbumApiCall = async () => {
    try {
      const endPointUrl = `https://api.spotify.com/v1/albums/${AlbumsId}/tracks`
      const res = await fetch(endPointUrl, {
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      })
      const result = await res.json();
      setResponse(result);
      console.log(result);
      console.log(Type);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    AlbumApiCall()
  }, [])
  return (
    <View style={styles.root}>
      <MusicListTopComponents Images={coverImage} PlaylistName={CoverName && CoverName.length > 60 ? CoverName.slice(0, 60) + '...' : CoverName} Creator={ArtistName} WillWork />
      <FlatList
        data={response.items}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatView}>
              <AlbumTrackComp
                SongName={item.name && item.name}
                Artists={item.artists[0].name}
              />
            </View>
          )
        }}
      />

    </View>
  )
}

export default AlbumSearchResultComp

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%'
  },
  main: {
    width: '100%',
    height: 75,
    // backgroundColor: 'blue',
  },
  MainContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    margin: 10,
    width: '90%',
  },

  MainTextContainer: {
    justifyContent: 'center',
    marginLeft: 8,
  },
  FirstText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 16,
  },
  SecondContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  LyricsTextContainer: {
    backgroundColor: '#d3dbd5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 3,
    width: '30%',
  },
  LyricsText: {
    fontWeight: '600'
  },
  LastText: {
    color: '#d3dbd5',
    fontSize: 16
  }
})