//import axios from 'axios'
//import { ORDERS, USER } from './api.consts'
import { ORDERS_MOCK, USERS_MOCK } from '../mocks'

// const instance = axios.create({
//     baseURL: 'http://95.31.10.133:8090',
//     withCredentials: true
// })

export const API = {
    /** Запросить информацию по указаниям */
    getOrders: () =>  ORDERS_MOCK, //instance.post(ORDERS),

    /** Запросить информацию по юзерам */
    getUsers: () => USERS_MOCK, //instance.post(USER),
}