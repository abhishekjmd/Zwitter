import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const RecentPlayedComp = ({ TrackName, image }) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.trackContainer}>
        <Text style={styles.track}> {TrackName} </Text>
      </View>
    </View>
  )
}

const RecentlyPlayed = () => {
  const [response, setResponse] = useState('')
  const { token } = useSelector((state) => {
    return state
  });

  const RecentlyPlayedApi = async () => {
    try {
      const endPointUrl = `https://api.spotify.com/v1/me/player/recently-played?limit=20&efore=3600000`
      const res = await fetch(endPointUrl, {
        'headers': {
          'Authorization': 'Bearer ' + token
        },
        json: true
      })
      const result = await res.json();
      setResponse(result);
      console.log(result);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    RecentlyPlayedApi();
  }, [])
  return (
    <View>
      <View style={styles.RecentlyPlayedContainer}>
        <Text style={styles.RecentlyPlayedText}> Recently Played</Text>
      </View>

      <FlatList
        horizontal
        data={response.items}
        renderItem={({ item }) => {
          return (
            <RecentPlayedComp image={item.track.album.images[0].url} TrackName={item.track.name} />
          )
        }}
      />
    </View>
  )
}

export default RecentlyPlayed

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 200,
    marginLeft: 5,
    backgroundColor:'black'
  },
  imageContainer: {
    height: '75%',
    width: '90%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  trackContainer: {
    justifyContent: 'center',
    height: '20%',
    width: '85%',
    alignItems: 'center',
  },
  track:{
    fontWeight: '500',
    color: 'white',
    fontSize: 18,
  },
  RecentlyPlayedContainer: {
    backgroundColor:'black',
    padding: 10
  },
  RecentlyPlayedText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
})