import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

const BrowseCardComp = ({ text, image,onPress }) => {
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
    const BrowseApi = async () => {
        const endpointUrl = 'https://api.spotify.com/v1/browse/categories?limit=50';
        const res = await fetch(endpointUrl, {
            headers:
                { 'Authorization': 'Bearer ' + 'BQDgMLz3cwMuPHpiwv2kgaK6sWjfZFfoOQs39R6ngV29XKysaNUBSLRqQqfHfLX-Tu8SyulwA6FCKyhcpSGfhJVN0f5u3Z57bU-eQxkQtvnaaRLynpaFhRge19ilOYVcAQ400CLL0hIN6w6yJi5GodStFHNrUuMggQgJxnpEqtynnXAfQRrzDkAsbTxYfucoMwGSOXeCFod5pq313Q_e75jZu80sn0_ilB_Xfu8td-Jw4h6Na4YmYri3IjzHneRUmIl8tHqmYwFf1A' },
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
                        <BrowseCardComp text={item.name} image={ item.icons[0].url} onPress={()=>console.log(item.name+" Pressed")} />
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