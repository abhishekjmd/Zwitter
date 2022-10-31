import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopComponent from '../../../components/TabScreenComp/YourLibraryComp/TopComponent'
import Index from '../../../components/TabScreenComp/YourLibraryComp/Index'
import YourLibraryComp from '../../../components/TabScreenComp/YourLibraryComp/Index'
const YourLibrary = () => {
  return (
    <View style={{flex:1}}>
      <YourLibraryComp />
    </View>
  )
}

export default YourLibrary

const styles = StyleSheet.create({})