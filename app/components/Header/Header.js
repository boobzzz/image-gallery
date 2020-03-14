import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>unsplash gallery</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#34495E'
    },
    headerText: {
        fontWeight: '700',
        fontSize: 22,
        textTransform: 'uppercase',
        color: '#ffffff'
    }
})

export default Header
