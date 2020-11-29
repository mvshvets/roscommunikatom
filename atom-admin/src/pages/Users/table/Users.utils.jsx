import { ButtonsToolbar } from '../../../shared/components'
import React from 'react'
import { Button } from 'antd'
import { EditOutlined } from '@ant-design/icons/lib'
import { Link } from 'react-router-dom'
import { ROUTE_NAMES } from '../../../routing'

/**
 * Рендер кнопок управления для записи таблицы пользователей
 * @param tableRow одна запись таблицы
 */
export const renderUsersActions = (tableRow) => {
    return (
        <ButtonsToolbar noMargin>
            <Link to={`${ROUTE_NAMES.USERS_EDIT}/${tableRow.id}`}>
                <Button
                    type="link"
                    icon={<EditOutlined/>}
                />
            </Link>
        </ButtonsToolbar>
    )
}