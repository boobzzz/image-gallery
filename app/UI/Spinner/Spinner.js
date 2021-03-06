import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import styles from './styles'

const Spinner = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#34495e" />
        </View>
    )
}

export default Spinner
