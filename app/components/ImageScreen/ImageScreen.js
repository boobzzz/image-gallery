import React, { useContext } from 'react'
import { StyleSheet, View, Image } from 'react-native'

const ImageItem = (props) => {
    return (
        <View>
            <Image
                source={{uri: props.source}}
                style={styles.smallImage} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageItem
