import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DetailsScreen = () => {
    const navigation = useNavigation();
    const spotifyPress = async () => {
        try {
            const result = await authorize(authConfig);
            console.warn(result.accessToken);
            dispatch({
                type: Types.Auth,
                payload: {
                    token: result.accessToken,
                },
            });
        } catch (error) {
            console.log(e);
        }
        return (
            <View style={styles.root}>
                <Text>DetailsScreen</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Home')
                }}>
                    <Text> Home Screen </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={spotifyPress}  >
                    <Text>Spotify</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root:{
        flex:1
    }
})
export default DetailsScreen;