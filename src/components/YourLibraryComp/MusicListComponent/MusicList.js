import { StyleSheet, Text, View, Image,Pressable, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const MusicList = ({ SongName, Artists, Images, OnMusicPressed, onSongPressed }) => {
  
  return (
    <Pressable style={styles.root} onPress={OnMusicPressed}>
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
    </Pressable>
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
    // justifyContent: 'center',
    marginLeft:8,
    // backgroundColor:'green',
    width:'70%',
    height:'100%'
  },
  FirstText: {
    fontWeight: '600',
    color: 'white',
    fontSize: 16,
  },
  SecondContainer: {
    flexDirection: 'row',
    marginLeft:5,
    width:'80%',
    // backgroundColor:'blue'
  },
  LyricsTextContainer: {
    backgroundColor: '#d3dbd5',
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'row',
    borderRadius: 3,
    width: '22%',
    marginRight:5,
  },
  LyricsText: {
    fontWeight:'600',
    color:'black',
    fontSize:10
  },
  LastText: {
    color: '#d3dbd5',
  },
})