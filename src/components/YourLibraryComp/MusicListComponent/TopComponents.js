import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TopComponents = ({ PlaylistName, Images, Creator, CreatorImage }) => {
  return (
    <View style={styles.root}>
      <View style={styles.ImageContainer}>
        <Image source={{uri:Images}} style={styles.Image} />
      </View>
      <View style={styles.MainTextContainer}>
        <Text style={styles.Playlist}>{PlaylistName} </Text>
        <View style={styles.CreatorContainer}>
          <Image source={{uri:CreatorImage}} style={styles.CreatorImage} />
          <Text style={styles.Creator}> {Creator}</Text>
        </View>
        <View style={styles.TimeContainer}>
          <MaterialCommunityIcons name='web' size={20} color='grey' />
          <Text style={styles.TimeContainerText}>28 likes . 4h 5min </Text>
        </View>
        <View style={styles.shuffleContainer}>
          <View style={styles.likeShuffle}>
            <AntDesign name='heart' size={25} color='green'  />
            <MaterialCommunityIcons name='dots-vertical' size={25} color='grey' />
          </View>
          <View style={styles.shuffleIcon}>
            <Ionicons name='ios-play-circle-sharp' size={50}  color='green' />
          </View>
        </View>
      </View>

    </View>
  )
}

export default TopComponents

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 350,
  },
  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '60%',
  },
  Image: {
    width: '50%',
    height: 190,
  },
  MainTextContainer:{
    marginLeft:10
  },
  Playlist: {
    fontWeight: '600',
    color: 'white',
    fontSize: 27,
  },
  CreatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5
  },
  CreatorImage: {
    borderRadius: 20,
    height: 20,
    width: 20,
  },
  Creator: {
    color: 'white',
    fontSize: 15
  },
  TimeContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  TimeContainerText:{
    color:'grey',
    marginLeft:5,
    fontSize:16
  },
  shuffleContainer:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center'
  },
  likeShuffle:{
    justifyContent:'space-between',   
    flexDirection:'row',
    width:70,
  },
  shuffleIcon:{
    marginEnd:15
  },

})