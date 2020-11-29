import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from '../consts'

/**
 * Обработчик установки фильтра
 * @param values выбранные параметры для фильтрации
 */
export function handleSetFilters({
    setQueryParams,
    setPagination
}) {
    return function (values) {
        setQueryParams({
            per_page: DEFAULT_PAGE_SIZE,
            page: DEFAULT_PAGE_NUMBER,
            body: values,
        })
        setPagination((prevOptions) => ({
            ...prevOptions,
            current: DEFAULT_PAGE_NUMBER,
        }))
    }
}
