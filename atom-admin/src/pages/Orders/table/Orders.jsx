import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ContentTitle, PageContent } from '../../../core/components'
import { LoaderContext } from '../../../core/context'
import { useFilter, usePagination } from '../../../shared/hooks'
import { API } from '../../../api'
import { Button } from 'antd'
import { ButtonsToolbar, TableAdapter } from '../../../shared/components'
import { OrdersFilters } from './components'
import { handleSetFilters } from '../../../shared/utils'
import { ORDERS_TABLE_COLUMNS } from './Orders.const'
import { FilterOutlined, FileAddOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { ROUTE_NAMES } from '../../../routing'

/** Страница журнала указаний */
export const Orders = React.memo(() => {
    const { setLoaderState } = useContext(LoaderContext)
    const [ordersData, setOrdersData] = useState()

    /**
     * Хук для фильтров
     */
    const [visibleFilter, triggerFilterVisibility] = useFilter()

    /**
     * Хук для пагинации
     */
    const [
        paginationOptions,
        setPagination, ,
        setQueryParams
    ] = usePagination({})

    /**
     * Запрос справочника
     */
    const dictionaryFetch = useCallback(async () => {
        try {
            setLoaderState(true)

            const data = await API.getOrders()

            setPagination((prevPaginationProps) => ({
                ...prevPaginationProps,
                total: data.total
            }))

            setOrdersData(data.page_items)
        } catch (err) {
            console.error(err)
        } finally {
            setLoaderState(false)
        }
    }, [setLoaderState, setPagination])

    /**
     * Кнопки управления таблицей
     */
    const actionsToolbar = useMemo(() => (
        <ButtonsToolbar>
            <Button
                onClick={triggerFilterVisibility}
                icon={<FilterOutlined/>}
            >
                Фильтры
            </Button>

            <Link
                to={ROUTE_NAMES.ORDERS_CREATE}
                className="like-button"
            >
                <Button
                    icon={<FileAddOutlined />}
                >
                    Создать
                </Button>
            </Link>
        </ButtonsToolbar>
    ), [triggerFilterVisibility])

    useEffect(() => {
        dictionaryFetch()
    }, [dictionaryFetch])

    return (
        <PageContent>
            <ContentTitle title="Журнал указаний" actionsToolbar={actionsToolbar}/>

            {visibleFilter && (
                <OrdersFilters
                    onSetFilters={handleSetFilters({
                        setQueryParams,
                        setPagination
                    })}
                />
            )}

            <TableAdapter
                columns={ORDERS_TABLE_COLUMNS}
                dataSource={ordersData}
                pagination={paginationOptions}
            />
        </PageContent>
    )
})
