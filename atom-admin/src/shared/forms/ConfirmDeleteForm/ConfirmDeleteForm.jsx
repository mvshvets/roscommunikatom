import React, { useCallback, useContext } from 'react'
import { Form } from 'antd'
import { InputControl } from 'shared/components'
import { LoaderContext } from 'core/context'

/** Универсальная форма для удаления записи */
export const ConfirmDeleteForm = React.memo(
    ({
        onRequestFinish = () => {},
        deleteFormAction = () => {},
        initialValues,
        rowSelectionType,
        recordCopy,
        ...props
    }) => {
        const { setLoaderState } = useContext(LoaderContext)

        const handleFinish = useCallback(
            async (values) => {
                try {
                    setLoaderState(true)

                    await deleteFormAction(values.id)

                    onRequestFinish()
                } catch (err) {
                    onRequestFinish(err)
                } finally {
                    setLoaderState(false)
                }
            },
            [deleteFormAction, onRequestFinish, setLoaderState]
        )

        return (
            <Form
                onFinish={handleFinish}
                {...props}
                initialValues={initialValues}
            >
                Уверены, что хотите удалить?
                <Form.Item name="id">
                    <InputControl hidden />
                </Form.Item>
            </Form>
        )
    }
)
