import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const MusicListTopComponents = ({ PlaylistName, Images, Creator, CreatorImage, Duration, LikesCount }) => {
  return (
    <View style={styles.root}>
      <View style={styles.ImageContainer}>
        <Image source={{ uri: Images }} style={styles.Image} />
      </View>
      <View style={styles.MainTextContainer}>
        <Text style={styles.Playlist}>{PlaylistName}</Text>
        <View style={styles.CreatorContainer}>
          <Text style={styles.Creator}>{Creator}</Text>
        </View>
        <View style={styles.shuffleContainer}>
          <View style={styles.likeShuffle}>
            <AntDesign name='heart' size={25} color='green' />
            <MaterialCommunityIcons name='dots-vertical' size={25} color='grey' />
          </View>
          <View style={styles.shuffleIcon}>
            <Ionicons name='ios-play-circle-sharp' size={50} color='green' />
          </View>
        </View>
      </View>

    </View>
  )
}

export default MusicListTopComponents

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 380,
   
  },
  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '55%',
  },
  Image: {
    width: '50%',
    height: 190,
  },
  MainTextContainer: {
    marginLeft: 10,
  },
  Playlist: {
    fontWeight: '600',
    color: 'white',
    fontSize: 24,
  },
  CreatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5
  },
  Creator: {
    color: 'white',
    fontSize: 15
  },
  TimeContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  TimeContainerText: {
    color: 'grey',
    marginLeft: 5,
    fontSize: 16
  },
  shuffleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  likeShuffle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 70,
  },
  shuffleIcon: {
    marginEnd: 15
  },

})