import Chart from 'chart.js'
import React, { useEffect, useRef } from 'react'
import { OPTIONS, DATA } from './VerticalBarChart.const'

/** Вертикальная диаграммы */
export const VerticalBarChart = React.memo(
    ({ data = DATA, options = OPTIONS }) => {
        const canvasRef = useRef(null)

        useEffect(() => {
            if (canvasRef.current) {
                const ctx = canvasRef.current.getContext('2d')

                if (!ctx) return

                new Chart(ctx, {
                    type: 'bar',
                    data: data,
                    options: options,
                })
            }
        }, [data, options])

        return <canvas ref={canvasRef} id="VerticalBarChart" style={{marginBottom: 40}}/>
    }
)