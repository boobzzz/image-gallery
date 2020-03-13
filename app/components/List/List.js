import React, { useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'
import * as A from '../../services/api.js'
import ListItem from './ListItem/ListItem'

const API_SOURCE = 'https://api.unsplash.com/photos'
const OPTIONS = {
    headers: {
        'Authorization': 'Client-ID c1FmI8ySab8mbCeTSMOtQGQPUHxuLwz5EoDcXLZG5FQ'
    }
}
const ImageContext = React.createContext()

const List = (props) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await A.fetchJSON(API_SOURCE, OPTIONS)
            setImages(response.body)
        }
        fetchData()
    }, [])

    return (
        images.map(listElem =>
            <ImageContext.Provider value={listElem}>
                <View>
                    <ScrollView>
                            {/* // <ListItem
                            //     key={listElem.id}
                            //     source={listElem.urls.small}
                            //     description={listElem.alt_description}
                            //     firstName={listElem.user.first_name}
                            //     lastName={listElem.user.last_name} /> */}
                            <ListItem />
                    </ScrollView>
                </View>
            </ImageContext.Provider>
        )
    )
}

export default List
