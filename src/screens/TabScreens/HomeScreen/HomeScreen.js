import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Index from '../../../components/HomescreenComp/Index'
const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <Index />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    root:{
        backgroundColor:'black'
    },
})