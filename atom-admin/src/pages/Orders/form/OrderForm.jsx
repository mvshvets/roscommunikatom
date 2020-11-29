import './OrderForm.scss'

import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Button, Col, Form, Row, Input, Select, DatePicker } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { ROUTE_NAMES } from '../../../routing'
import { LoaderContext } from '../../../core/context'
import { ORDERS_MOCK } from '../../../mocks'
import { PageContent, ContentTitle } from '../../../core/components'
import { ButtonsToolbar } from '../../../shared/components'
import moment from 'moment'
import {
    COL_RESPONSIVE_DEFAULT,
    COMMON_ITEM_OPTIONS,
    ROW_GUTTER
} from '../../../shared/consts'
import { REACTION_TYPES } from './OrderForm.const'
import { normalizeDictionaryToControl } from '../../../shared/utils'

/** Форма создания указания */
export const OrderForm = React.memo(() => {
    const { setLoaderState } = useContext(LoaderContext)
    const [form] = Form.useForm()
    const urlParams = useParams()

    /** Начальные значения для формы в режиме редактирования */
    const [initialValuesForEdit, setInitialValuesForEdit] = useState()

    /**
     * Отправка формы на сервер
     * @param values значения формы
     */
    const handleFinish = useCallback(
        async (values) => {
            try {
                setLoaderState(true)

                console.log(values)

                if (!initialValuesForEdit) {
                    form.resetFields()
                }
            } catch (err) {
                console.log(err)
            } finally {
                setLoaderState(false)
            }
        },
        [form, initialValuesForEdit, setLoaderState]
    )

    /**
     * Запрос справочника
     */
    const fetchUser = useCallback(async () => {
        try {
            setLoaderState(true)

            const data = ORDERS_MOCK.page_items.find(el => el.id === Number(urlParams.id))

            setInitialValuesForEdit({
                ...data,
                author: data.author.name,
                executor: data.executor.name,
                priority: data.priority.name,
                reaction: data.reaction.name,
                order_date_plan: moment()
            })

        } catch (err) {
            console.error(err)
        } finally {
            setLoaderState(false)
        }
    }, [urlParams.id, setLoaderState])

    useEffect(() => {
        if (urlParams.id) fetchUser()
    }, [urlParams.id, fetchUser])

    useEffect(() => {
        if (initialValuesForEdit) form.resetFields()
    }, [initialValuesForEdit, form])

    return (
        <PageContent className="order-form">
            <ContentTitle
                title={
                    urlParams.id
                        ? 'Редактирование указания'
                        : 'Создание указания'
                }
                className="order-form__header"
            >
                <ButtonsToolbar>
                    <Button
                        htmlType="submit"
                        type="primary"
                        form="orderFrom"

                    >
                        {urlParams.id ? 'Изменить' : 'Создать'}
                    </Button>
                    <Link
                        to={ROUTE_NAMES.USERS}
                        className="like-button"
                    >
                        <Button>Отмена</Button>
                    </Link>
                </ButtonsToolbar>
            </ContentTitle>

            <Form
                id="orderFrom"
                form={form}
                onFinish={handleFinish}
                initialValues={initialValuesForEdit}
            >
                <Row gutter={ROW_GUTTER}>
                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="title"
                            label="Название"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Input/>
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
                            name="order_date_plan"
                            label="Плановая дата"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <DatePicker format={["DD.MM.YYYY"]} style={{width: '100%'}}/>
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="priority"
                            label="Важность/приоритет"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Select/>
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="comment"
                            label="Комментарий"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Input.TextArea/>
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="reaction"
                            label="Реакция"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Select options={normalizeDictionaryToControl(REACTION_TYPES)}/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </PageContent>
    )
})