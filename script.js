var counters = {};
var b1 = document.getElementById('button1');
b1.addEventListener('click', function(event) {
  count++;
  console.log(count);
});

function Item(name){
  this.name = name;
}
var allItems = [
  new Item('Watering Can'),
  new Item('Ice Cream Lock'),
  new Item('Pizza Pouch'),
  new Item('Pizza Scissors'),
  new Item('Round Chair'),
  new Item('Shoebrella'),
  new Item('Toeless Boots'),
  new Item('Toilet Paper Hat'),
  new Item('Wine Glass')
];



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
