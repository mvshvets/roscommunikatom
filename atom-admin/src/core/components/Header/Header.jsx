import './Header.scss'

import React, { useCallback, useContext } from 'react'
import { LoaderContext, UserContext } from '../../context'
import { MainMenu } from './components'
import { Button } from 'antd'
import { PopupAdapter, AuthModal } from '../../../shared/popups'
import Logo from './logo.png'

/** Шапка сайта */
export const Header = React.memo(() => {
    const { setLoaderState } = useContext(LoaderContext)
    const { userData, setUserData } = useContext(UserContext)

    const handleRequestFinish = useCallback((popupHandler) => (values) => {
        try {
            setLoaderState(true)
            if (values.login === 'admin' && values.password === 'admin') {
                popupHandler()
                setUserData(values)
            }
        } finally {
            setLoaderState(false)
        }
    }, [setUserData, setLoaderState])

    const handleLogout = useCallback((e) => {
        e.preventDefault()
        setUserData(null)
        localStorage.removeItem('userData')
    }, [setUserData])

    return (
        <header className="header">
            <a href='http://www.rosatom.ru/'>
                <img src={Logo} alt="logo" width={'80%'}/>
            </a>
            <div className="header__menu-wrapper">
                <MainMenu/>

                {userData ? (
                    <Button onClick={handleLogout}>ВЫХОД</Button>
                ) : (
                    <PopupAdapter
                        component={AuthModal}
                        formId="authForm"
                        buttonText="ВХОД"
                        onRequestFinish={handleRequestFinish}
                        modalOptions={{ footer: null }}
                    />
                )}
            </div>
        </header>
    )
})
