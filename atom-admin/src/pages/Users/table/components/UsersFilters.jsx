import React, { useCallback } from 'react'
import { Form, Row, Col, Input, Select } from 'antd'
import { COL_RESPONSIVE_DEFAULT, COMMON_ITEM_OPTIONS, ROW_GUTTER } from '../../../../shared/consts'
import { FiltersActionsButtons } from '../../../../core/components'

/** Фильтры для таблицы отчетов */
export const UsersFilters = React.memo(
    ({ onSetFilters }) => {
        const [form] = Form.useForm()

        /**
         * Обработчик отправки формы фильтра
         * @param values значения фильтра
         */
        const handleFinish = useCallback(
            (values) => {
                onSetFilters(values)
            },
            [onSetFilters]
        )

        return (
            <Form form={form} onFinish={handleFinish}>
                <Row gutter={ROW_GUTTER}>
                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="name"
                            label="ФИО"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="position"
                            label="Должность"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Select />
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="department"
                            label="Подразделение"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Select />
                        </Form.Item>
                    </Col>
                </Row>

                <FiltersActionsButtons form={form} onSetFilters={onSetFilters}/>
            </Form>
        )
    }
)
