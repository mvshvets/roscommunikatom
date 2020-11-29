import { ButtonsToolbar } from '../../../shared/components'
import React from 'react'
import { Button } from 'antd'
import { EyeOutlined } from '@ant-design/icons/lib'
import { Link } from 'react-router-dom'
import { ROUTE_NAMES } from '../../../routing'

/**
 * Рендер кнопок управления для записи таблицы указаний
 * @param tableRow одна запись таблицы
 */
export const renderOrdersActions = (tableRow) => {
    return (
        <ButtonsToolbar noMargin>
            <Link to={`${ROUTE_NAMES.ORDERS_EDIT}/${tableRow.id}`}>
                <Button
                    type="link"
                    icon={<EyeOutlined/>}
                />
            </Link>
        </ButtonsToolbar>
    )
}