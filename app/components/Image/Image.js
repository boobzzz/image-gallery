import React, { useContext } from 'react'
import { StyleSheet, View, Image } from 'react-native'

import { ImageContext } from '../../context/ImageContext'

const ImageItem = (props) => {
    const images = useContext(ImageContext)

    return (
        <View>
            <Image
                style={styles.image}
                source={{uri: images.uri}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 502
    }
})

export default ImageItem
