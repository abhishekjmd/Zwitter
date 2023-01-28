import { StyleSheet,  View } from 'react-native'
import React, {  useEffect } from 'react'
import TabNavigation from './src/navigation/TabNavigation/Index'
import {  useDispatch } from 'react-redux'
import { fetchToken } from './src/Redux/Reducers/TokenReducer';


const App = () => {
  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchToken())
  }, [dispatch])
  return (
    <View style={styles.root}>
      <TabNavigation />
    </View>
  )
}


export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
})