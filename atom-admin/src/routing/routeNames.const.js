const PROFILE = 'profile'
const USERS = 'users'
const USERS_CREATE = 'users-create'
const USERS_EDIT = 'users-edit'
const ORDERS = 'orders'
const ORDERS_CREATE = 'orders-create'
const ORDERS_EDIT = 'orders-edit'

export const ROUTE_NAMES = {
    /** Главная страница */
    MAIN: `/`,
    /** Страница пользователя */
    PROFILE: `/${PROFILE}`,

    /** Юзеры */
    USERS: `/${USERS}`,
    /** Юзеры: создание */
    USERS_CREATE: `/${USERS}/${USERS_CREATE}`,
    /** Юзеры: редактирование */
    USERS_EDIT: `/${USERS}/${USERS_EDIT}`,

    /** Журнал указаний */
    ORDERS: `/${ORDERS}`,
    /** Журнал указаний: создание */
    ORDERS_CREATE: `/${ORDERS}/${ORDERS_CREATE}`,
    /** Журнал указаний: редактирование */
    ORDERS_EDIT: `/${ORDERS}/${ORDERS_EDIT}`,
}