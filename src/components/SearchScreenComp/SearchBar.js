import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons'
import { useNavigation } from '@react-navigation/native'

const SearchBar = () => {
    const navigation = useNavigation();
    const OnSearchBarPressed = () => {
        navigation.navigate('MainSearch');
    }
    return (
        <TouchableOpacity style={styles.root} activeOpacity={0.95} onPress={OnSearchBarPressed}>
            <View style={styles.searchContainer}>
                <Octicons name='search' size={25} style={styles.icon} />
                <Text style={styles.text}> What do you want to listen to? </Text>
            </View>
        </TouchableOpacity>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '8%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchContainer: {
        flexDirection: 'row',
        width: '95%',
        backgroundColor: 'white',
        height: '80%',
        borderRadius: 5,
        alignItems: 'center'
    },
    icon: {
        marginLeft: '4%',
        color: 'black'
    },
    text: {
        fontSize: 20,
        marginLeft: '3%',
        color: '#636261',
        fontWeight: '500'
    },
})