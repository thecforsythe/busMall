var ctx = document.getElementById('barGraph').getContext('2d');
var barGraph = new Chart(ctx, {
  type: 'bar',
  title: {
    text: 'Number of Clicks per Item',
  },
  data: {
    labels: ['Watering Can','Ice Cream Lock','Pizza Pouch','Pizza Scissors','Round Chair','Shoebrella','Toeless Boots','Toilet Paper Hat','Wine Glass'],
    datasets: [{
      data : [3,25,5,17,6,1,3,7,21],
      backgroundColor: '#b9f442',
      borderColor: '#10d0e5',
      borderWidth: 1,
      hoverBorderWidth: 2,
      yAxisID: 0
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
