import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect,useState } from 'react'
import { Podcast } from '../../assets/PodcastData'
import { useDispatch, useSelector } from 'react-redux'
import { AlbumsComps } from '../SearchScreenComp/MainSearchScreenComp/SubSearchComps'

const CreateShowComp = props => {
    return (
        <View style={styles.root}>
            <View style={styles.subRoot}>
                <View style={styles.ImageContainer}>
                    <Image style={styles.Image} source={props.ImageField} />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Firsttext}> {props.Firsttext} </Text>
                    <Text style={styles.Secondtext}> {props.Secondtext} </Text>
                    <Text style={styles.Thirdtext}> {props.Thirdtext && props.Thirdtext.length > 60 ? props.Thirdtext.slice(0, 45) + '...' : props.Thirdtext} </Text>
                </View>
            </View>
        </View>
    )
}

const ShowsPodcast = () => {
    const { token } = useSelector((state) => {
        return state
    });
    const [response,setResponse] = useState('')
    const RecentShowsApi = async () => {
        const id = '"5lMNphVhMLvhFmTWiKiLA2"';
        const endpointUrl = `https://api.spotify.com/v1/browse/new-releases`;
        try {
            const res = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + token },
                json: true
            })
            const result = await res.json();
            console.log(result);
            console.log(result.albums);
            setResponse(result.albums);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        RecentShowsApi();
    }, [])
    return (
        <View style={{backgroundColor:'black',width:'100%',height:200}}>
            <View style={styles.topContainer}>
                <Text style={styles.topContainertext}> Popular New releases </Text>
            </View>   
        </View>
    )
}

export default ShowsPodcast

const styles = StyleSheet.create({
    root: {
        justifyContent: 'flex-start',
        marginLeft: 15,
    },
    subRoot: {
        width: '100%',
        // backgroundColor:'blue',
        // marginLeft:10,
    },
    topContainer: {
        width: '100%',
        padding: 10
    },
    topContainertext: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
    ImageContainer: {
        width: '100%',
        height: 150,
        // backgroundColor:'blue'
    },
    Image: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 10,
        height: '100%',
    },
    TextContainer: {
        marginTop: 10,
    },
    Firsttext: {
        color: 'green',
        marginTop: 6,
        fontWeight: '600'
    },
    Secondtext: {
        color: 'white',
        marginTop: 6,
        fontWeight: '800'
    },
    Thirdtext: {
        color: 'gray',
        marginTop: 6,
    },
})