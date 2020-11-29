import { useCallback, useState } from 'react'

/**
 * Хук для фильтрации
 */
export const useFilter = () => {
    /**
     * Видимость формы фильтрации
     */
    const [visibleFilter, setVisibleFilter] = useState(false)

    /**
     * Переключение видимости формы фильтрации
     */
    const triggerFilterVisibility = useCallback(() => {
        setVisibleFilter(!visibleFilter)
    }, [visibleFilter])

    return [visibleFilter, triggerFilterVisibility]
}
