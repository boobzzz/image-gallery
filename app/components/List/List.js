import React, { useContext } from 'react'
import { FlatList, View, TouchableHighlight } from 'react-native'

import { ImageContext } from '../../context/ImageContext'
import ListItem from './ListItem/ListItem'

const List = ({ navigation }) => {
    const images = useContext(ImageContext)

    return (
        <View>
            <FlatList
                data={images.img}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        onPress={() => images.pressed(navigation, item.urls.regular)}
                        underlayColor="white">
                        <ListItem
                            key={item.id}
                            source={item.urls.small}
                            description={item.alt_description}
                            firstName={item.user.first_name}
                            lastName={item.user.last_name} />
                    </TouchableHighlight>
                )}
                keyExtractor={(item) => item.id} />
        </View>
    )
}

export default List
