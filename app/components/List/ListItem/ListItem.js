import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'

const ListItem = (props) => {
    const { source, description, firstName, lastName } = props

    return (
        <View>
            <Image
                source={{uri: source}}
                style={styles.smallImage} />
            <View style={styles.imageTextBox}>
                <Text style={styles.imageText}>
                    {description}
                </Text>
                <Text style={styles.imageTextAuthor}>
                    {firstName !== null ? firstName : ''}
                    {' '}
                    {lastName !== null ? lastName : ''}
                </Text>
            </View>
        </View>
    )
}

export default ListItem
