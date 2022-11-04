import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopComponent from './TopComponent'
import MainComponent from './MainComponent'

const Index = () => {
  return (
    <View style={styles.root}>
      <TopComponent />
      <MainComponent />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black'
  }
})