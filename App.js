import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import TabNavigation from './src/navigation/TabNavigation/Index'
import { Provider, useDispatch } from 'react-redux'
import { fetchToken } from './src/Redux/Reducers/TokenReducer';
import store from './src/Redux/Store';


const App = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const spotifyPress = async () => {
    try {
      const result = await authorize(authConfig);
      console.log(result);
      const AccessToken = await result.accessToken;
      console.log(AccessToken);
      setToken(AccessToken);
    } catch (error) {
      console.log(error);
    }
  }
  const GetToken = dispatch(fetchToken())
  useEffect(() => {
    GetToken
  }, [GetToken])
  return (
    <Provider style={styles.root} store={store}>
      <TabNavigation />
    </Provider>
  )
}


export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
})