import Chart from 'chart.js'
import React, { useEffect, useRef } from 'react'
import { OPTIONS, DATA } from './LineChart.const'

/** Линейная диаграммы */
export const LineChart = React.memo(
    ({ data = DATA, options = OPTIONS }) => {
        const canvasRef = useRef(null)

        useEffect(() => {
            if (canvasRef.current) {
                const ctx = canvasRef.current.getContext('2d')

                if (!ctx) return

                new Chart(ctx, {
                    type: 'line',
                    data: data,
                    options: options,
                })
            }
        }, [data, options])

        return <canvas ref={canvasRef} id="LineChart" />
    }
)