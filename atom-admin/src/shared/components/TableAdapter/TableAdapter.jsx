import './TableAdapter.scss'

import React, {
    useCallback, useEffect,
    useLayoutEffect,
    useRef,
    useState
} from 'react'
import { TABLE_EMPTY_MESSAGE } from '../../consts'
import { Table } from 'antd'

/** Ширина скролла таблицы */
const DEFAULT_TABLE_SCROLL_WIDTH = 1760

/**
 * Адаптер для `Table` от `antd`, принимает все теже `props`
 */
function TableAdapter ({ columns, ...props }) {
    const tableRef = useRef()

    /**
     * Получить значение отступов для дом элемента таблицы
     * @param elem - дом элемент таблицы
     */
    const getCoords = useCallback((elem) => {
        if (!elem) return

        let box = elem.getBoundingClientRect()

        return {
            top: box.top + window.pageYOffset,
            left: box.left + window.pageXOffset
        }
    }, [])

    /**
     * Вычислить значение для скролла внутри таблицы
     */
    const getScrollSize = useCallback(() => {
        const PAGINATION_HEIGHT = 100
        const TABLE_TH_HEIGHT = 55

        if (tableRef.current) {

            return (
                document.body.clientHeight -
                (Number(getCoords(tableRef.current)?.top) || 0) -
                PAGINATION_HEIGHT -
                TABLE_TH_HEIGHT
            )
        }
    }, [getCoords])

    const [tableColumns, setTableColumns] = useState()

    /**
     * Рассчитываем ширину столбцов
     * @param columns - массив с информацией о столбцах
     */
    const calculateColumnWidth = useCallback((columns) => {
        if (!columns || columns.length < 8) return

        const columnsWidth = columns.reduce((acc, el) => {
            if (el.title) return acc + Number(el.width || 0)
            return acc
        }, 0)

        if (columnsWidth < DEFAULT_TABLE_SCROLL_WIDTH)
            setTableColumns(
                columns.map((el) => ({
                    ...el,
                    width: el.width || (DEFAULT_TABLE_SCROLL_WIDTH / columns.length),
                }))
            )
    }, [])

    const [tableHeight, setTableHeight] = useState()

    useLayoutEffect(() => {
        const handleWindowResize = () => setTableHeight(getScrollSize())

        setTableHeight(getScrollSize())
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [getScrollSize])

    useEffect(() => {
        calculateColumnWidth(columns)
    }, [columns, calculateColumnWidth])

    return (
        <div
            ref={tableRef}
            className="table-adapter"
        >
            <Table
                rowKey="id"
                locale={{ emptyText: TABLE_EMPTY_MESSAGE }}
                columns={tableColumns || columns}
                {...props}
                scroll={props.enableScroll ? { y: tableHeight, x: 'auto' } : { x: 'auto' }}
            />
        </div>
    )
}

export default React.memo(TableAdapter)
