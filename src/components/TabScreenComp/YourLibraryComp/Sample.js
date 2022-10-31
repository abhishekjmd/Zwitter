import { StyleSheet, Text, View, FlatList, SectionList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Data } from './Data'

const Timeepass = ({ text }) => {
    <View>
        <Text>{text}</Text>
    </View>
}

const Sample = () => {
    const [response, setResponse] = useState('')
    const [data, setData] = useState('')
    const dummyApi = async () => {
        try {
            const api = await fetch('https://dummyjson.com/products')
            const apiData = await api.json();
            console.log(apiData);
            setData(apiData);
        } catch (error) {
            console.log(error);

        }
    }
    const spotifyPlaylists = async () => {
        const endpointUrl = "https://api.spotify.com/v1/me/playlists";

        try {
            const responser = await fetch(endpointUrl, {
                headers:
                    { 'Authorization': 'Bearer ' + 'BQBqOAHr0eNAnOygdTIspdvGfSakFAR8X7WMXJMxO3QMIAyOqtbE2YYkctI5yYQIxDk7CdiZxwl1g6-gXqslINpX8N5OSgtTxiV5x0NKOt5iPsO5GCzWz1EhzrAQQTUa3T9oEQ5M-yZC121oEdiQ70ZwyZnnAtSU2_XJkgFtgJ89j9mudPnoVeaFfzdttpAvNKu2Ohld5SlwdX5yg5UdbQKsMHan-00W-w4zVGGPjoCKhtq9cE5HWD_2AEJvdqxjVT6IdgtRpCIcRQ' },
                json: true
            })
            const result = await responser.json();
            console.log(result);
            setResponse(result);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        spotifyPlaylists();
        // dummyApi();
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <Text>Hello</Text>
            

            <FlatList
                data={response.items}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text> {item.href} </Text>
                            <Text> {item.id} </Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Sample

const styles = StyleSheet.create({

})