import { renderUsersActions } from './Users.utils'

export const USERS_TABLE_COLUMNS = [
    {
        title: 'ФИО',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Логин',
        dataIndex: 'login',
        key: 'login',
    },
    {
        title: 'Должность',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: 'Подразделение',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: 'Активных задач',
        dataIndex: 'current_order_count',
        key: 'current_order_count',
        width: 150,
    },
    {
        title: '',
        width: 50,
        render: renderUsersActions,
        align: 'right',
    }
]