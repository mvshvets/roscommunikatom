import React from 'react'
import { NotImplementedError } from '../../errors'

export const LoaderContext = React.createContext({
    loaderState: false,
    setLoaderState: (state) => {
        throw new NotImplementedError()
    },
})
