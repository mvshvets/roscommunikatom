import React, { useCallback } from 'react'
import { Button, Form, Row, Input, Checkbox } from 'antd'
import './AuthModal.scss'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

/** Модальное окно с формой авторизации */
export const AuthModal = React.memo((props) => {
       const { onRequestFinish } = props

    const handleFinish = useCallback(
        (values) => {
            onRequestFinish(values)
        },
        [onRequestFinish])

        return (
            <div className="auth-modal">
                <h3 className="auth-modal__title">ВХОД В АККАУНТ</h3>

                <Form
                    id="auth"
                    initialValues={{ login: 'admin', password: 'admin' }}
                    size="large"
                    onFinish={handleFinish}
                >
                    <Form.Item
                        name="login">
                        <Input placeholder="Логин" prefix={<UserOutlined />}/>
                    </Form.Item>
                    <Form.Item name="password">
                        <Input.Password placeholder="Пароль" prefix={<LockOutlined/>}/>
                    </Form.Item>
                    <Row style={{justifyContent: 'space-between'}}>
                        <Form.Item name="rememberMe"
                        valuePropName="checked">
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>
                        <Button type="link">Забыл пароль</Button>
                    </Row>

                    <Button type="primary" htmlType="submit" className="submit-btn">ВОЙТИ</Button>
                </Form>
            </div>
        )
    }
)
