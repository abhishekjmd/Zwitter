import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import TopComponent from './TopComponent'
import MainComponent from './MainComponent'

const Index = () => {
  return (
    <ScrollView style={styles.root}>
      <TopComponent />
      <MainComponent />
    </ScrollView>
  )
}

export default Index

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black'
  }
})