import React from 'react'
import { FlatList, View, TouchableHighlight } from 'react-native'

import withContext from '../../HOCs/withContext'
import ListItem from './ListItem/ListItem'

const List = (props) => {
    const { img, pressed } = props.images

    return (
        <View>
            <FlatList
                data={img}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        onPress={() => pressed(props.navigation, item.urls.full)}
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

export default withContext(List)
