import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'

const BrowseCardComp = ({ text, image }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.main}>
                <Image source={{ uri: image }} style={styles.Image} />
                <Text style={styles.text}> {text} </Text>
            </View>
        </View>
    )
}

const BrowseComponent = () => {
    const [response, setResponse] = useState('')
    const BrowseApi = async () => {
        const endpointUrl = 'https://api.spotify.com/v1/browse/categories?limit=50';
        const res = await fetch(endpointUrl, {
            headers:
                { 'Authorization': 'Bearer ' + 'BQDSzxp-Evr64jd35emJznNNYenFs2hzeu1urDkS7Ukoi7e1c0TBHsUKX8LIP9_HC_sFtUUDZcSbxB-YqAAd3SkkJ_JGPfgh8akZLVQFSZhtNu3C0-lLC_ullEg-NOw8iXrPQ4Lag4XsdX1vjSQAih4E0c1I-cbURZdt8XuIlXppaWOB5EGG44LfpWN2j6MrJjs25U0dQqyLIIl_Xy5KsQub_E2o8Ye4b32mpNMUSkefN9aZXLNQ_lHJTN760gI6Jk0wrK9yvAoxSg' },
            json: true
        })
        const result = await res.json();
        setResponse(result.categories);
        console.log(result);
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
                        <BrowseCardComp text={item.name} image={ item.icons[0].url} />
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