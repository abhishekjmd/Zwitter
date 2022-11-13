import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainSearchScreenComp from '../../../components/SearchScreenComp/MainSearchScreenComp/MainSearchScreenComp'
const MainSearchScreen = () => {
  return (
    <View style={styles.root}>
      <MainSearchScreenComp />
    </View>
  )
}

export default MainSearchScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'black'
  }
})