import React from 'react'
import { NotImplementedError } from '../../errors'

export const UserContext = React.createContext({
    userData: null,
    setUserData: (userData) => {
        throw new NotImplementedError()
    },
})
