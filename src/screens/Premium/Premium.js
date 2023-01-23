import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Premium = () => {
  return (
    <View style={styles.root}>
      <Text>Premium</Text>
    </View>
  )
}

export default Premium

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black'
  },
})