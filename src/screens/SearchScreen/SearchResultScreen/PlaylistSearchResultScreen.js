import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PlaylistSearchResultComp from '../../../components/SearchScreenComp/SearchResultComp/PlaylistSearchResultComp'

const PlaylistSearchResultScreen = () => {
  return (
    <View style={styles.root}>
          <PlaylistSearchResultComp />  
    </View>
  )
}

export default PlaylistSearchResultScreen

const styles = StyleSheet.create({
  root:{
    flex:1
  }
})