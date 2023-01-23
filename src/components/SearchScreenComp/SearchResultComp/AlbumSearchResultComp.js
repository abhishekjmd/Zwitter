import { StyleSheet, Text, View, FlatList, Image, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MusicListTopComponents from '../../YourLibraryComp/MusicListComponent/MusicListTopComponents'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { ArtistComp } from '../MainSearchScreenComp/SubSearchComps'

// ---------------  ALBUM TRACK LIST COMPONENT ------
const AlbumTrackComp = ({ SongName, Artists, Images, OnMusicPressed }) => {
  return (
    <Pressable style={styles.main} onPress={OnMusicPressed}>
      <View style={styles.MainContainer}>
        <View style={styles.MainTextContainer}>
          <Text style={styles.FirstText}> {SongName && SongName.length > 45 ? SongName.slice(0, 45) + '...' : SongName} </Text>
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

const AlbumReleaseComp = ({ releaseDate, totalTracks }) => {
  const originalDate = new Date(releaseDate);
  const newDate = new Date(originalDate.getTime());
  newDate.getFullYear();
  newDate.getMonth();
  newDate.getDate();
  const [releaseDateState, setReleaseDateState] = useState('')

  useEffect(() => {
    console.log(newDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }));
    setReleaseDateState(newDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }))
  }, [])
  return (
    <View style={styles.albumReleaseMainContainer}>
      <View style={styles.albumReleasedateContainer}>
        <Text style={styles.releaseDate}> {releaseDateState} </Text>
        <Text style={styles.numTracksTextdurationText}> {`${totalTracks} song `} </Text>
      </View>
    </View>
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
  const ReleaseDate = route.params.ReleaseDate
  const TotalTracks = route.params.TotalTracks
  const ArtistListData = route.params.Artist
  const AccessToken = useSelector((state) => state.AccessToken.token)

  const AlbumApiCall = async () => {
    try {
      const endPointUrl = `https://api.spotify.com/v1/albums/${AlbumsId}/tracks`
      const res = await fetch(endPointUrl, {
        'headers': {
          'Authorization': 'Bearer ' + AccessToken
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
    <ScrollView style={styles.root}>
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
      <AlbumReleaseComp releaseDate={ReleaseDate} totalTracks={TotalTracks} />

   
    </ScrollView>
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
  },
  MainContainer: {
    flexDirection: 'row',
    margin: 10,
    width: '90%',
  },

  MainTextContainer: {
    justifyContent: 'center',
    marginLeft: 8,
  },
  FirstText: {
    color: 'white',
    fontWeight: '600',
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
  },
  albumReleaseMainContainer: {
    // backgroundColor: 'blue',
    height: 200
  },
  albumReleasedateContainer: {
    // backgroundColor: 'green',
    height: 60,
    padding: 10,
    justifyContent: 'center',
    marginLeft: 8,
    // margin: 10,



  },
  
  releaseDate: {
    fontWeight: '600',
    fontSize: 16,
    color: 'white'

  },
  numTracksTextdurationText: {
    fontWeight: '600',
    fontSize: 16,
    color: 'white'
  },

})