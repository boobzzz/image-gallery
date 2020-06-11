import React, { useContext } from 'react'
import { ImageContext } from '../contexts/ImageContext'

const withContext = (Component) => (props) => {
    const context = useContext(ImageContext)

    return (
        <Component {...props} images={context} />
    )
}

export default withContext
