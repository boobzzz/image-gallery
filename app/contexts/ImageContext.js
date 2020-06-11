import { createContext } from 'react'

export const ImageContext = createContext({
    images: [],
    pressed: () => {},
    uri: ''
})
