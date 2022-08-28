//const Chart = require('chart.js');


//const workChart = document.getElementById("work-chart");

var options = {
    series: [{
    name: 'Series 1',
    data: [5, 3, 2],
  }],
    chart: {
    height: 480,
    type: 'radar',
  },
  dataLabels: {
    enabled: true
  },
  plotOptions: {
    radar: {
      size: 200,
      polygons: {
        strokeColors: '#707070',
        fill: {
          colors: ['none', 'none']  
        }
      }
    }
  },
  title: {
    text: ' '
  },
  colors: ['#FF4560'],
  markers: {
    size: 4,
    colors: ['#575757'],
    strokeColor: '#FF4560',
    strokeWidth: 2,
  },
  tooltip: {
    y: {
      formatter: function(val) {
        return val
      },
    }
  },
  xaxis: {
    categories: ['Graphics Design', 'UI/UX Design', 'Web Development']
  },
  yaxis: {
    tickAmount: 7,
    labels: {
      formatter: function(val, i) {
        if (i % 2 === 0) {
          return val
        } else {
          return ''
        }
      }
    }
  }
  };

var chart = new ApexCharts(document.querySelector("#work-chart"), options);
chart.render();

// let radar = new Chart(workChart, {
//     type: 'radar',
//     data: {
//         labels: [
//             'Graphics Design',
//             'User Interface/User Experience Design',
//             'Web Development'
//         ],
//         datasets: [{
//             label: 'My First Dataset',
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: 'rgb(255, 99, 132)',
//             borderWidth: 2,
//             data: [5, 2, 3]
//       }]
//     }
// });






