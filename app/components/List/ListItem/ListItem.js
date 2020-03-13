import React, { useContext } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const ListItem = (props) => {
    const image = useContext(ImageContext)

    return (
        <View>
            <Image
                source={{uri: image.source}}
                style={styles.smallImage} />
            <View style={styles.imageTextBox}>
                <Text style={styles.imageText}>
                    {image.description}
                </Text>
                <Text style={styles.imageTextAuthor}>
                    {image.firstName !== null ? image.firstName : ''}
                    {' '}
                    {image.lastName !== null ? image.lastName : ''}
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
        backgroundColor: 'rgba(52, 73, 94, 0.5)'
    },
    imageText: {
        textTransform: 'uppercase',
        color: '#ffffff'
    },
    imageTextAuthor: {
        fontWeight: '700',
        color: '#99FF00'
    }
})

export default ListItem
