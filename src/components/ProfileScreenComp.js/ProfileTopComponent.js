import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileTopComponent = () => {
    return (
        <View style={styles.root}>
            <View style={styles.mainContainer}>
                <View style={styles.firstTopContainer}>
                    <Text style={styles.firstTopText}>Free Account</Text>
                </View>
                <View>
                    <Text>Go Premium</Text>
                </View>
                <View>
                    <View>
                        <Text>A</Text>
                    </View>
                    <View>
                        <Text> Abhishek Tiwari </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileTopComponent

const styles = StyleSheet.create({})