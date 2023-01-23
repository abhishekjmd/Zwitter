import React, { useCallback, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity,ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { BroswerAsyncThunk } from '../../../Redux/Reducers/SearchScreenSlice'


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
    const dispatch = useDispatch();
    const AccessToken = useSelector((state) => state.AccessToken.token)
    const dispatchFunction = useCallback(() => {
        dispatch(BroswerAsyncThunk(AccessToken))
    }, [dispatch])

    useEffect(() => {
        dispatchFunction();
    }, [dispatchFunction])
    const BrowseSearchData = useSelector((state) => state.SearchReducer.BrowseSearch)
    return (
        <ScrollView>
            <FlatList
                data={BrowseSearchData}
                key={'_'}
                keyExtractor={item => "_" + item.id}
                renderItem={({ item, index }) => {
                    return (
                        <BrowseCardComp text={item.name} image={item.icons[0].url} onPress={() => console.log(item.name + " Pressed")} />
                    )
                }}
                numColumns={2}
            />
        </ScrollView>
    )
}

export default BrowseComponent

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'green',
        width: '45%',
        height: 180,
        margin: 10,
        borderRadius:10
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