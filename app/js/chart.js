let firstChart = document.getElementById('firstChart').getContext('2d');
let secondChart = document.getElementById('secondChart').getContext('2d');

let myChart = new Chart(firstChart, {
    type: 'line',
    data: {
        labels: ['', '', '', '', ''],
        datasets: [{
            data: [1, 2.1, 1.5, 2, 2.4],
            backgroundColor: [
                'rgba(77, 129, 255, 0.2)',
            ],
            borderColor: [
                'rgba(16, 81, 240, 1)',
            ],
            borderWidth: 2,
            pointRadius: 0,
        },{
            data: [1, 1.4, 2, 1.7, 1.9],
            backgroundColor: [
                'rgba(165, 191, 255 0.2)',
            ],
            borderColor: [
                'rgba(165, 191, 255, 1)',
            ],
            borderWidth: 2,
            pointRadius: 0,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    tickMarkLength: 0,
                    display: false
                },
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    tickMarkLength: 0,
                    display: false
                },
                ticks: {
                    min: 0.7,
                    max: 2.5,
                    step: 0.1,
                    display: false
                }
            }]
        },
        legend: {
            display: false
        }
    }
});

let myChartSecond = new Chart(secondChart, {
    type: 'line',
    data: {
        labels: ['', '', '', '', ''],
        datasets: [{
            data: [1, 2.1, 1.5, 2, 2.4],
            backgroundColor: [
                'rgba(77, 129, 255, 0.2)',
            ],
            borderColor: [
                'rgba(16, 81, 240, 1)',
            ],
            borderWidth: 2,
            pointRadius: 0,
        },{
            data: [1, 1.4, 2, 1.7, 1.9],
            backgroundColor: [
                'rgba(165, 191, 255 0.2)',
            ],
            borderColor: [
                'rgba(165, 191, 255, 1)',
            ],
            borderWidth: 2,
            pointRadius: 0,
        }]
    },
    options: {
        scales: {
            xAxes: [{
                gridLines: {
                    tickMarkLength: 0,
                    display: false
                },
                ticks: {
                    display: false
                }
            }],
            yAxes: [{
                gridLines: {
                    tickMarkLength: 0,
                    display: false
                },
                ticks: {
                    min: 0.7,
                    max: 2.5,
                    step: 0.1,
                    display: false
                }
            }]
        },
        legend: {
            display: false
        }
    }
});