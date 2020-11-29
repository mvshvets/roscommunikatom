import './UserForm.scss'

import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Button, Col, Form, Row, Input, Select } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { ROUTE_NAMES } from '../../../routing'
import { LoaderContext } from '../../../core/context'
import { USERS_MOCK } from '../../../mocks'
import { PageContent, ContentTitle } from '../../../core/components'
import { ButtonsToolbar } from '../../../shared/components'
import {
    COL_RESPONSIVE_DEFAULT,
    COMMON_ITEM_OPTIONS,
    ROW_GUTTER
} from '../../../shared/consts'

export const UserForm = React.memo(() => {
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

            console.log('Запрос за юзером')

            setInitialValuesForEdit(USERS_MOCK.page_items.find(el => el.id === Number(urlParams.id)))

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
        <PageContent className="user-form">
            <ContentTitle
                title={
                    urlParams.id
                        ? 'Редактирование пользователя'
                        : 'Создание пользователя'
                }
                className="user-form__header"
            >
                <ButtonsToolbar>
                    <Button
                        htmlType="submit"
                        type="primary"
                        form="userFrom"

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
                id="userFrom"
                form={form}
                onFinish={handleFinish}
                initialValues={initialValuesForEdit}
            >
                <Row gutter={ROW_GUTTER}>
                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="name"
                            label="ФИО"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="login"
                            label="Логин"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Input/>
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="position"
                            label="Должность"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Select/>
                        </Form.Item>
                    </Col>

                    <Col {...COL_RESPONSIVE_DEFAULT}>
                        <Form.Item
                            name="department"
                            label="Должность"
                            {...COMMON_ITEM_OPTIONS}
                        >
                            <Select/>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </PageContent>
    )
})