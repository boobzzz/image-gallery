import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#34495e" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default Spinner
