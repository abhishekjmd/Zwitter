import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const BrowseCardComp = ({ text, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
            <View style={styles.main}>
                <Image source={{ uri: image }} style={styles.Image} />
                <Text style={styles.text}> {text} </Text>
            </View>
        </TouchableOpacity>
    )
}

const BrowseComponent = () => {
    const [response, setResponse] = useState('')
    const { token } = useSelector((state) => {
        return state
    });
    const BrowseApi = async () => {
        const endpointUrl = 'https://api.spotify.com/v1/browse/categories?limit=50';
        console.log('Browser AccessToken:', token)
        const res = await fetch(endpointUrl, {
            headers:
                { 'Authorization': 'Bearer '  + token },
            json: true
        })
        const result = await res.json();
        console.log(result);
        setResponse(result.categories);
    }
    useEffect(() => {
        BrowseApi()
    }, [])
    return (
        <View>
            <FlatList
                data={response.items}
                key={'_'}
                keyExtractor={item => "_" + item.id}
                renderItem={({ item, index }) => {
                    return (
                        <BrowseCardComp text={item.name} image={item.icons[0].url} onPress={() => console.log(item.name + " Pressed")} />
                    )
                }}
                numColumns={2}

            />
        </View>
    )
}

export default BrowseComponent

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'green',
        width: '45%',
        height: 180,
        margin: 10
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
        marginTop: 4,
    },

    Image: {
        borderRadius: 5,
        width: '90%',
        height: '80%',
    }
})