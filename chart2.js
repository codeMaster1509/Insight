var ctx = document.getElementById('doughnut');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['CPI<=7', '7<CPI<=8', '8<CPI<=9', '9<CPI'],
      
      datasets: [{
        label: '% age of students',
        data: [20.7 , 22.2 , 34.8 , 22.2],
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 169, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
      }]
    },
    options: {
      
    }
  });