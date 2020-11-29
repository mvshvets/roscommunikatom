import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from '../consts'
import { useCallback, useState } from 'react'
/**
 * Хук для пагинации, принимает все те же параметры, что и `Pagination` от `antd`,
 * а также функцию `setQueryParams` для изменения состояния запроса
 */
export const usePagination = ({
    queryOptions = {
        per_page: DEFAULT_PAGE_SIZE,
        page: DEFAULT_PAGE_NUMBER,
        body: {},
    },
    ...restOptions
}) => {
    /**
     * Стейт пагинации
     */
    const [pagination, setPagination] = useState({
        defaultCurrent: queryOptions.page,
        defaultPageSize: queryOptions.per_page  ,
        showSizeChanger: true,
        ...restOptions,
    })

    /**
     * Стейт с параметрами запроса
     */
    const [queryParams, setQueryParams] = useState(queryOptions)

    /**
     * Обработчик перехода по страницам
     */
    const handleCurrentPageChange = useCallback((page) => {
        setQueryParams((prevQueryParams) => ({
            ...prevQueryParams,
            page,
        }))
        setPagination((prevOptions) => ({
            ...prevOptions,
            current: page,
        }))
    }, [])

    /**
     * Обработчик смена количества записей для отображения
     */
    const handlePageSizeChange = useCallback(
        (current, per_page) => {
            setQueryParams((prevQueryParams) => ({
                ...prevQueryParams,
                page: DEFAULT_PAGE_NUMBER,
                per_page,
            }))
            setPagination((prevOptions) => ({
                ...prevOptions,
                current: DEFAULT_PAGE_NUMBER,
            }))
        },
        []
    )

    const paginationOptions = {
        ...pagination,
        onChange: handleCurrentPageChange,
        onShowSizeChange: handlePageSizeChange,
    }

    return [paginationOptions, setPagination, queryParams, setQueryParams]
}
