import './Routing.scss'

import React, { useContext } from 'react'
import { NotFoundPage, Main, Profile, Users, UserForm, OrderForm, Orders } from '../pages'

import { ROUTE_NAMES } from './routeNames.const'
import { Route, Switch } from 'react-router-dom'
import classNames from 'classnames'
import { LoaderContext } from '../core/context'

export const Routing = React.memo(() => {
    const { loaderState } = useContext(LoaderContext)

    return (
        <div className={classNames([
            'content',
            'scroll',
            { 'with-loader': loaderState }
        ])}>

            <Switch>
                {/* Главная страница */}
                <Route path={ROUTE_NAMES.MAIN} exact>
                    <Main/>
                </Route>

                {/* Юзеры: создание */}
                <Route path={ROUTE_NAMES.USERS_CREATE}>
                    <UserForm/>
                </Route>

                {/* Юзеры: редактирование */}
                <Route path={`${ROUTE_NAMES.USERS_EDIT}/:id`}>
                    <UserForm/>
                </Route>

                {/* Юзеры */}
                <Route path={ROUTE_NAMES.USERS}>
                    <Users/>
                </Route>

                {/* Журнал указаний: создание */}
                <Route path={ROUTE_NAMES.ORDERS_CREATE}>
                    <OrderForm/>
                </Route>

                {/* Журнал указаний: редактирование */}
                <Route path={`${ROUTE_NAMES.ORDERS_EDIT}/:id`}>
                    <OrderForm/>
                </Route>

                {/* Журнал указаний */}
                <Route path={ROUTE_NAMES.ORDERS}>
                    <Orders/>
                </Route>

                {/* Профайл */}
                <Route path={ROUTE_NAMES.PROFILE}>
                    <Profile/>
                </Route>

                {/* Ловушка неизвестных роутов */}
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
})
