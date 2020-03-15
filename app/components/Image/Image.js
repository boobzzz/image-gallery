import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import withContext from '../../hocs/withContext'

const ImageItem = (props) => {
    return (
        <View>
            <Image style={styles.image} source={{uri: props.images.uri}} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: '100%'
    }
})

export default withContext(ImageItem)
