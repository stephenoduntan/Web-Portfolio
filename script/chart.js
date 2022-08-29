var options = {
    series: [{
    name: 'Years',
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
    categories:  ['Information & Communication Design', 'UI/UX', 'Frontend Development']
  },
  yaxis: {
    tickAmount: 8,
    min: 0,
    max: 8,
    labels: {
      style: {
        colors: '#a6a6a6',
        fontSize: '14px'
      },
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


let navAll = document.getElementById('nav-all').addEventListener('click', function() {
  chart.updateOptions({
    series:[{
      data: [5, 3, 2]
    }],
    xaxis: {
      categories : ['Information & Communication Design', 'UI/UX', 'Frontend Development']
    }
  })

})


let navDesign = document.getElementById('nav-design').addEventListener('click', function() {
  chart.updateOptions({
    series:[{
      data: [4, 4, 2]
    }],
    xaxis: {
      categories : ['Photoshop', 'CorelDraw', 'Illustrator']
    }
  })
 //console.log('clicked')

})

let navUiux = document.getElementById('nav-uiux').addEventListener('click', function() {
  chart.updateOptions({
    series:[{
      data: [4, 3, 2, 2, 3]
    }],
    xaxis: {
      categories : ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'User Interactive Design']
    }
  })

})

let navDev = document.getElementById('nav-dev').addEventListener('click', function() {
  chart.updateOptions({
    series:[{
      data: [5, 3, 3, 4]
    }],
    xaxis: {
      categories : ['HTML/CSS', 'Javascript', 'TailwindCSS', 'Bootstrap']
    }
  })

})