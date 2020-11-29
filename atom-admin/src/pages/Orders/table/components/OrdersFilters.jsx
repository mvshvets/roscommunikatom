import React, { useCallback } from 'react'
import { Form, Row, Col, Input, DatePicker, Select } from 'antd'
import {
    COL_RESPONSIVE_DEFAULT,
    COMMON_ITEM_OPTIONS,
    ROW_GUTTER
} from '../../../../shared/consts'
import { FiltersActionsButtons } from '../../../../core/components'

/** Фильтры для таблицы указаний */
export const OrdersFilters = React.memo(
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
                            name="title"
                            label="Заголовок"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="executor"
                            label="Исполнитель"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Select/>
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="author"
                            label="Автор"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Select/>
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="created_date"
                            label="Дата создания"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <DatePicker style={{width: '100%'}}/>
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="order_date_plan"
                            label="Дата выполнения"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <DatePicker style={{width: '100%'}}/>
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="order_date_fact"
                            label="Дата планового выполнения"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <DatePicker style={{width: '100%'}}/>
                        </Form.Item>
                    </Col>
                </Row>

                <FiltersActionsButtons form={form} onSetFilters={onSetFilters}/>
            </Form>
        )
    }
)
