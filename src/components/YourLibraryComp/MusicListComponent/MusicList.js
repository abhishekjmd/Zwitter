import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const MusicList = ({ SongName, Artists,Images }) => {

  return (
    <View style={styles.root}>
      <View style={styles.MainContainer}>
        <View style={styles.ImageContainer}>
          <Image source={{uri:Images}} style={styles.Image} />
        </View>
        <View style={styles.MainTextContainer}>
          <Text style={styles.FirstText}> {SongName} </Text>
          <View style={styles.SecondContainer}>
            <View style={styles.LyricsTextContainer}>
              <Text style={styles.LyricsText}> LYRICS </Text>
            </View>
            <View>
              <Text style={styles.LastText}> {Artists} </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default MusicList

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 75,
  },
  MainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin:10
  },
  ImageContainer: {
    width: 60,
    height: 60,
},
  Image: {
    width: '100%',
    height: '100%'
  },
  MainTextContainer: {
    justifyContent: 'center',
    marginLeft:8
  },
  FirstText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 20,
  },
  SecondContainer: {
    flexDirection: 'row',
    marginLeft:5,
    width:'100%',
  },
  LyricsTextContainer: {
    backgroundColor: '#d3dbd5',
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'row',
    borderRadius: 3,
    width: '30%',
  },
  LyricsText: {
    fontWeight:'600'
  },
  LastText: {
    color: '#d3dbd5',
    fontSize: 16
  },
})