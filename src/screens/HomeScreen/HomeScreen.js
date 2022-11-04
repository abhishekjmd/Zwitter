import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomescreenComp from '../../components/HomescreenComp/Index'
const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <HomescreenComp />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    root:{
        backgroundColor:'black'
    },
})