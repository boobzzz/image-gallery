import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as A from '../services/api.js'

import { ImageContext } from '../context/ImageContext'
import List from '../components/List/List'
import Image from '../components/Image/Image'

const API_SOURCE = 'https://api.unsplash.com/photos'
const OPTIONS = {
    headers: {
        'Authorization': 'Client-ID c1FmI8ySab8mbCeTSMOtQGQPUHxuLwz5EoDcXLZG5FQ'
    }
}
const Stack = createStackNavigator()

export default function App() {
    const [images, setImages] = useState([])
    const [url, setUrl] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const response = await A.fetchJSON(API_SOURCE, OPTIONS)
            setImages(response.body)
        }

        fetchData()
    }, [])

    const onPressItem = (nav, u) => {
        nav.navigate('Image')

        setUrl(u)
    }
    console.log(url)
    return (
        <ImageContext.Provider value={{
            img: images,
            pressed: onPressItem,
            uri: url
        }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="List">
                    <Stack.Screen name="List" component={List} options={headerStyles} />
                    <Stack.Screen name="Image" component={Image} options={{title: ''}} />
                </Stack.Navigator>
            </NavigationContainer>
        </ImageContext.Provider>
    )
}

const headerStyles = {
    title: 'unsplash gallery',
    headerStyle: {
        backgroundColor: '#34495E'
    },
    headerTintColor: '#34495E',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#ffffff'
    }
}
