import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RecentlyPlayedPlaylistAsync } from '../../Redux/Reducers/HomeScreenSlice';

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
  
  const dispatch = useDispatch();
  const AccessToken = useSelector((state) => state.AccessToken.token)
  useEffect(() => {
    dispatch(RecentlyPlayedPlaylistAsync(AccessToken))
  }, [dispatch])

  const RecentlyPlayedData = useSelector((state) => state.homeReducer.RecentlyPlayed)

  
  return (
    <View>
      <View style={styles.RecentlyPlayedContainer}>
        <Text style={styles.RecentlyPlayedText}> Recently Played</Text>
      </View>
      <FlatList
        horizontal
        data={RecentlyPlayedData}
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