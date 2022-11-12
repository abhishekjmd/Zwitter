import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
export const AlbumsComp = () => {
    return (
        <View style={styles.root}>
            <View style={styles.imageContainer}>
                <Image source={require('../../../../Album.jpeg')} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.firstText}>Jhaanjar (from Honeymoon)</Text>
                <Text style={styles.secondText}> B Praak, Jaani </Text>
            </View>
        </View>
    )
}

export const ArtistComp = () => {
    return (
        <View style={styles.MainAlbumContainer}>
            <View style={styles.AlbumImageContainer}>
                <Image source={require('../../../../Artist.jpeg')} style={styles.AlbumImage} />
            </View>
            <View style={styles.AlbumTextContainer}>
                <Text style={styles.AlbumText}>Abhash Jha </Text>
                <MaterialIcons name='verified' size={20} color='#00acee' />
            </View>
        </View>
    )
}

export const PlaylistComp = () => {
    return (
        <View style={styles.PlaylistMainContainer}>
            <View style={styles.PlaylistImageContainer}>
                <Image source={require('../../../../Playlist.jpeg')} style={styles.PlaylistImage} />
            </View>
            <View style={styles.PlaylistTextContainer}>
            <Text style={styles.PlaylistText}>Jalle</Text>
            </View>
        </View>
    )
}



const SubSearchComps = () => {
    return (
        <View style={{flexDirection:'row'}}>
            <PlaylistComp />
            <PlaylistComp />

        </View>
    )
}

export default SubSearchComps

const styles = StyleSheet.create({
    root: {
        width: '45%',
        height: 250,
        backgroundColor: 'green',
        marginLeft: '2%'
    },
    imageContainer: {
        width: '100%',
        height: '70%'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    textContainer: {
        width: '100%',
        marginTop: '4%'
    },
    firstText: {
        color: 'white',
        fontWeight: '500'
    },
    secondText: {
        color: '#d7d8db'
    },
    MainAlbumContainer: {
        width: '100%',
        height: 80,
        backgroundColor: 'green',
        flexDirection: 'row',
        // justifyContent:'center',
        alignItems: 'center'
    },
    AlbumImageContainer: {
        width: '15%',
        height: '70%',
        // backgroundColor: 'red',
        marginLeft: '2%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    AlbumImage: {
        width: '90%',
        height: '90%',
        borderRadius: 20,
    },
    AlbumTextContainer: {
        width: '65%',
        height: '70%',
        // backgroundColor:'yellow',
        marginLeft: '2%',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
    },
    AlbumText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500'
    },
    PlaylistMainContainer:{
        width: '45%',
        height: 200,
        backgroundColor: 'green',
        marginLeft: '2%',
        justifyContent:'center',
        // alignItems:'center'      
    },
    PlaylistImageContainer:{
        width: '100%',   
         height: '75%'
    },
    PlaylistImage:{
        width:'100%',
        height:'100%'
    },
    PlaylistTextContainer:{
        width:'100%',
        // backgroundColor:'yellow',
        marginTop:'3%',
        height:'15%',
    },
    PlaylistText:{
     color:'white',
     fontSize:18,
     fontWeight:'500'
    },
})