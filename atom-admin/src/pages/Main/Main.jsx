import React, { useCallback, useEffect } from 'react'
import { PageContent } from '../../core/components'
import { VerticalBarChart, LineChart } from './components'
import { Row, Col } from 'antd'
import { COL_RESPONSIVE_FULL, COL_RESPONSIVE_HALF, ROW_GUTTER } from '../../shared/consts'

export const Main = React.memo(() => {

    const fetchData = useCallback(async () => {
        try {

        } catch (e) {
            console.log(e)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return (
        <PageContent>
            <h2>Таблицы статистики по заявкам</h2>

            <Row gutter={ROW_GUTTER}>
                <Col xs={COL_RESPONSIVE_FULL} xxl={COL_RESPONSIVE_HALF}>
                    <VerticalBarChart/>
                </Col>

                <Col xs={COL_RESPONSIVE_FULL} xxl={COL_RESPONSIVE_HALF}>
                    <LineChart/>
                </Col>
            </Row>
        </PageContent>
    )
})

