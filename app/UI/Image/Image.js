import React from 'react'
import { View, Image } from 'react-native'

import withContext from '../../HOCs/withContext'
import styles from './styles'

const ImageItem = (props) => {
    return (
        <View>
            <Image style={styles.image} source={{uri: props.images.uri}} />
        </View>
    )
}

export default withContext(ImageItem)
