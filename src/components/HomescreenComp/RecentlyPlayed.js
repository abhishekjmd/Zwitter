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
      // const finalResult = result.items;
      // const updateArr = new Set(finalResult.map((item) => { item.track.album.images[0] }));
      // const lastUpdate = json.stringify();
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
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <RecentPlayedComp
                image={item.track.album.images[0].url}
                TrackName={item.track.name}
              />
            </View>
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
    width: 140,
    height: 170,
    marginLeft: 5,
    // backgroundColor:'blue'
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
    height: '25%',
    width: '90%',
  },
  track: {
    fontWeight: '500',
    color: 'white',
  },
  RecentlyPlayedContainer: {
    backgroundColor: 'black',
    padding: 20
  },
  RecentlyPlayedText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
})