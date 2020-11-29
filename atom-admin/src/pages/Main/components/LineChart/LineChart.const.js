import moment from 'moment'

export const OPTIONS = {
    title: {
        display: true,
        text: 'Качество заявок',
        padding: 20,
        fontSize: 20
    },
    legend: {
        position: 'bottom',
        labels: {
            boxWidth: 60,
            fontSize: 14
        }
    },
    scales: {
        yAxes: [{
            display: true,
            ticks : {
                beginAtZero: true
            }
        }]
    }
}

export const DATA = {
    labels: [
        moment().subtract(6, "day").format("DD/MM"),
        moment().subtract(5, "day").format("DD/MM"),
        moment().subtract(4, "day").format("DD/MM"),
        moment().subtract(3, "day").format("DD/MM"),
        moment().subtract(2, "day").format("DD/MM"),
        moment().subtract(1, "day").format("DD/MM"),
        moment().format("DD/MM")],
    datasets: [
        {
            label: "Выполненные в срок",
            data: [3, 5, 7, 2, 2, 5, 4],
            fill: false,
            borderColor: '#5bee52',
        },
        {
            label: "Просроченные",
            data: [2, 1, 3, 0, 0, 1, 0],
            fill: false,
            borderColor: '#fc5a5a',
        }
    ]
}