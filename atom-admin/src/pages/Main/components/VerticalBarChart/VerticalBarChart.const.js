import moment from 'moment'

export const OPTIONS = {
    legend: { display: false },
    title: {
        display: true,
        text: 'Количество активных заявок',
        padding: 20,
        fontSize: 20
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
            label: "Задач в работе",
            data: [5, 6, 8, 7, 3, 4, 8],
            backgroundColor: '#a77bfa',
        },
    ]
}