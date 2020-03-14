import React from 'react'

export const ImageContext = React.createContext({
    images: [],
    pressed: () => {},
    uri: ''
})
