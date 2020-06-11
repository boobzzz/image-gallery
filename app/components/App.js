import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ImageContext } from '../contexts/ImageContext'
import * as A from '../services/api.js'

import Spinner from '../UI/Spinner/Spinner'
import List from './List/List'
import Image from '../UI/Image/Image'

const API_SOURCE = 'https://api.unsplash.com/photos'
const OPTIONS = {
    headers: {
        'Authorization': 'Client-ID c1FmI8ySab8mbCeTSMOtQGQPUHxuLwz5EoDcXLZG5FQ'
    }
}
const Stack = createStackNavigator()

export default function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [images, setImages] = useState([])
    const [url, setUrl] = useState('')

    useEffect(() => {
        const fetchData = async (u, o) => {
            setIsLoading(true)
            const response = await A.fetchJSON(u, o)
            setIsLoading(false)
            setImages(response.body)
        }
        fetchData(API_SOURCE, OPTIONS)
    }, [])

    const onPressItem = (nav, u) => {
        nav.navigate('Image')
        setUrl(u)
    }

    return (
        <ImageContext.Provider value={{
            img: images,
            pressed: onPressItem,
            uri: url
        }}>
            {isLoading
            ? <Spinner />
            : <NavigationContainer>
                <Stack.Navigator initialRouteName="List">
                    <Stack.Screen
                        name="List"
                        component={List}
                        options={headerOptions} />
                    <Stack.Screen
                        name="Image"
                        component={Image}
                        options={{...headerOptions, title: ''}} />
                </Stack.Navigator>
            </NavigationContainer>}
        </ImageContext.Provider>
    )
}

const headerOptions = {
    title: 'unsplash gallery',
    headerStyle: {
        backgroundColor: '#34495e'
    },
    headerTintColor: '#ffffff',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#ffffff'
    },
    headerTitleAlign: 'center'
}
