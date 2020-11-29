import { formatDate } from '../../../shared/utils'
import { renderOrdersActions } from './Orders.utils'
import React from 'react'

export const ORDERS_TABLE_COLUMNS = [
    {
        title: 'Название',
        dataIndex: 'title',
        key: 'title',
        width: 200,
        fixed: 'left',
    },
    {
        title: 'Автор',
        dataIndex: 'author',
        key: 'author',
        render: (author) => author.name
    },
    {
        title: 'Исполнитель',
        dataIndex: 'executor',
        key: 'executor',
        render: (executor) => executor.name
    },
    {
        title: 'Дата создания',
        dataIndex: 'create_date',
        key: 'create_date',
        render: formatDate
    },
    {
        title: 'Дата планируемого решения',
        dataIndex: 'order_date_plan',
        key: 'order_date_plan',
        render: formatDate
    },
    {
        title: 'Фактическая дата решения',
        dataIndex: 'order_date_fact',
        key: 'order_date_fact',
        render: (date, record) => date && <div style={{color: record.order_date_plan < date && 'red'}}>{formatDate(date)}</div>
    },
    {
        title: 'Приоритет',
        dataIndex: 'priority',
        key: 'priority',
        render: (priority) => priority.name
    },
    {
        title: 'Вид поручения',
        dataIndex: 'order_kind',
        key: 'order_kind',
    },
    {
        title: 'Реакция',
        dataIndex: 'reaction',
        key: 'reaction',
        render: (reaction) => reaction.name
    },
    {
        title: 'Комментарий',
        dataIndex: 'comment',
        key: 'comment',
    },
    {
        title: 'Файлы',
        dataIndex: 'files',
        key: 'files',
    },
    {
        title: '',
        width: 70,
        render: renderOrdersActions,
        align: 'right',
        fixed: 'right',
    }
]