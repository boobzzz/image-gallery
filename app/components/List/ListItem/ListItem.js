import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const ListItem = (props) => {
    return (
        <View>
            <Image
                source={{uri: props.source}}
                style={styles.smallImage} />
            <View style={styles.imageTextBox}>
                <Text style={styles.imageText}>
                    {props.description}
                </Text>
                <Text style={styles.imageTextAuthor}>
                    {props.firstName !== null ? props.firstName : ''}
                    {' '}
                    {props.lastName !== null ? props.lastName : ''}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    smallImage: {
        height: 267
    },
    imageTextBox: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        padding: 3,
        backgroundColor: 'rgba(52, 73, 94, 0.5)'
    },
    imageText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#ffffff'
    },
    imageTextAuthor: {
        fontSize: 16,
        color: '#99FF00'
    }
})

export default ListItem
