var ctx = document.getElementById('barchart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Btech', 'Btech with minor', 'Btech with honors', 'Dual Degree', 'B.S', 'B.design'],
      datasets: [{
        label: 'No. of students',
        data: [140, 25, 20, 15, 20, 35],
        borderWidth: 1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
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
      scales: {
        x: {
          stacked: true
        },
        y: {
          beginAtZero: true
        }
      }
      
    }
  });