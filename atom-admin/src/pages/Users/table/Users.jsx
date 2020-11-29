import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ContentTitle, PageContent } from '../../../core/components'
import { LoaderContext } from '../../../core/context'
import { useFilter, usePagination } from '../../../shared/hooks'
import { API } from '../../../api'
import { Button } from 'antd'
import { ButtonsToolbar, TableAdapter } from '../../../shared/components'
import { UsersFilters } from './components'
import { handleSetFilters } from '../../../shared/utils'
import { USERS_TABLE_COLUMNS } from './Users.const'
import { FilterOutlined, UserAddOutlined } from '@ant-design/icons'
import { ROUTE_NAMES } from '../../../routing'
import { Link } from 'react-router-dom'

/** Страница юзеров */
export const Users = React.memo(() => {
    const { setLoaderState } = useContext(LoaderContext)
    const [usersData, setUsersData] = useState()

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

            const data = await API.getUsers()
                console.log()

            setPagination((prevPaginationProps) => ({
                ...prevPaginationProps,
                total: data.total
            }))

            setUsersData(data.page_items)
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
                to={ROUTE_NAMES.USERS_CREATE}
                className="like-button"
            >
                <Button
                    icon={<UserAddOutlined/>}
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
            <ContentTitle title="Пользователи" actionsToolbar={actionsToolbar}/>

            {visibleFilter && (
                <UsersFilters
                    onSetFilters={handleSetFilters({
                        setQueryParams,
                        setPagination
                    })}
                />
            )}

            <TableAdapter
                columns={USERS_TABLE_COLUMNS}
                dataSource={usersData}
                pagination={paginationOptions}
            />
        </PageContent>
    )
})
