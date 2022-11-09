import { StyleSheet, View, } from 'react-native'
import React from 'react'
import SearchBar from '../../../components/SearchScreenComp/SearchBar'
import BrowseComponent from '../../../components/SearchScreenComp/BrowseCategoryComp/BrowseComponent'

const Index = () => {
    return (
        <View style={styles.root}>
            <SearchBar />
            <BrowseComponent />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'black'
    },

})