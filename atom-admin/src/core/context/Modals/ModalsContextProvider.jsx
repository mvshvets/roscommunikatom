import React, { useState } from 'react'

import { ModalsContext } from './ModalsContext'

export const ModalsContextProvider = React.memo(({ children }) => {
    const [popupAdapterOptions, setPopupAdapterOptions] = useState({})

    return (
        <ModalsContext.Provider
            value={{ popupAdapterOptions, setPopupAdapterOptions }}
        >
            {children}
        </ModalsContext.Provider>
    )
})
