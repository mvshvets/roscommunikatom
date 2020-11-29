import React, { useCallback } from 'react'
import { Button } from 'antd'
import { ButtonsToolbar } from '../../../shared/components'
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'

/** Кнопки действий для фильтров на странице с таблицей */
export const FiltersActionsButtons = React.memo(({
    form,
    onSetFilters,
    buttonsToolbarOptions,
    initialValuesForFilters}) => {

    /**
     * Обработчик очистки формы фильтра
     */
    const handleClear = useCallback(() => {
        onSetFilters(initialValuesForFilters)
        form.resetFields()
    }, [form, initialValuesForFilters, onSetFilters])

    return (
        <ButtonsToolbar {...buttonsToolbarOptions}>
            <Button htmlType="submit" type="primary">
                <SearchOutlined/>
                Искать
            </Button>
            <Button onClick={handleClear}>
                <CloseOutlined/>
                Очистить
            </Button>
        </ButtonsToolbar>
    )
})