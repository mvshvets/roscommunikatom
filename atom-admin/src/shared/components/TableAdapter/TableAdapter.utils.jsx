/**
 * Вычислить класс для конкрентного `row` таблицы
 * @param record - запись таблицы
 */
export const getRowClassName = (record) => {
    if (!record.active) return 'table-adapter__row_archive'

    return ''
}
