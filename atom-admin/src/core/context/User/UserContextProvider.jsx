import React, { useCallback, useContext, useEffect, useState } from 'react'
import { LoaderContext } from '..'
import { UserContext } from '.'

export const UserContextProvider = React.memo(({ children }) => {
    const { setLoaderState } = useContext(LoaderContext)
    const [userData, setUserData] = useState(null)

    const onSetUserData = useCallback(
        (userData) => {
            setUserData(userData)
            localStorage.setItem('userData', JSON.stringify(userData))
        },
        [setUserData]
    )

    const checkAuth = useCallback(() => {
        try {
            setLoaderState(true)
            const user = localStorage.getItem('userData')
            setUserData(user ? JSON.parse(user) : null)
        } catch (e) {
            console.log(e)
        } finally {
            setLoaderState(false)
        }
    }, [setLoaderState])

    useEffect(() => {
        if (userData) return
        checkAuth()
    }, [userData, checkAuth])

    return (
        <UserContext.Provider value={{ userData, setUserData: onSetUserData }}>
            {children}
        </UserContext.Provider>
    )
})
