import './LoaderContextProvider.scss'

import React, { useMemo, useState } from 'react'
import { Spin } from 'antd'

import { LoaderContext } from './LoaderContext'

export const LoaderContextProvider = React.memo(({ children }) => {
    const [loaderState, setLoaderState] = useState(false)
    const spin = useMemo(
        () => loaderState && <Spin className="glb-loader" size="large" />,
        [loaderState]
    )

    return (
        <LoaderContext.Provider value={{ loaderState, setLoaderState }}>
            {spin}
            {children}
        </LoaderContext.Provider>
    )
})
