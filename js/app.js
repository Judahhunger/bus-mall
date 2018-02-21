'use strict';

// var totalClicks = 0;
BusProduct.displayArray = [];//array to keep track of what's getting displayed.
BusProduct.allProducts = [];//array of all instances for products.
BusProduct.totalCounter = 0;
BusProduct.images = [document.getElementById('product-1'), document.getElementById('product-2'), document.getElementById('product-3')]; //array for 3 displayed images.
BusProduct.ulContainer = document.getElementById('display');
//constructor of BusMall products.
function BusProduct(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.clicks = 0;
  this.shown = 0;
  BusProduct.allProducts.push(this);
}

//making random number based on the length of allProducts array.
function makeRandomImg(){
  return Math.floor(Math.random() * BusProduct.allProducts.length);
}

function displayImg(){
  while(BusProduct.displayArray.length < 6){
    var randomIndex = makeRandomImg();
    while(!BusProduct.displayArray.includes(randomIndex)){
      BusProduct.displayArray.push(randomIndex);
    }
  }
  for(var i = 0; i < BusProduct.images.length; i++){
    var holderImg = BusProduct.displayArray.shift();
    BusProduct.images[i].src = BusProduct.allProducts[holderImg].filepath;
    BusProduct.images[i].alt = BusProduct.allProducts[holderImg].name;
    BusProduct.images[i].title = BusProduct.allProducts[holderImg].name;
    BusProduct.allProducts[holderImg].shown +=1;
  }
}

function clickHandler(event){
  if(event.target === BusProduct.ulContainer){
    return alert('Please click on a product');
  }
  if(BusProduct.totalCounter > 24){
    BusProduct.ulContainer.removeEventListener('click', clickHandler);
    BusProduct.ulContainer.style.display = 'none';
    populateChartArrays();
    drawChart();
  }
  BusProduct.totalCounter += 1;
  for(var i = 0; i < BusProduct.allProducts.length; i++){
    if(event.target.alt === BusProduct.allProducts[i].name){
      BusProduct.allProducts[i].clicks += 1;
    }
  }
  displayImg();
}

new BusProduct('bag', 'img/bag.jpg');
new BusProduct('banana', 'img/banana.jpg');
new BusProduct('bathroom', 'img/bathroom.jpg');
new BusProduct('boots', 'img/boots.jpg');
new BusProduct('breakfast', 'img/breakfast.jpg');
new BusProduct('bubblegum', 'img/bubblegum.jpg');
new BusProduct('chair', 'img/chair.jpg');
new BusProduct('cthulhu', 'img/cthulhu.jpg');
new BusProduct('dog-duck', 'img/dog-duck.jpg');
new BusProduct('dragon', 'img/dragon.jpg');
new BusProduct('pen', 'img/pen.jpg');
new BusProduct('pet-sweep', 'img/pet-sweep.jpg');
new BusProduct('scissors', 'img/scissors.jpg');
new BusProduct('shark', 'img/shark.jpg');
new BusProduct('sweep', 'img/sweep.png');
new BusProduct('tauntaun', 'img/tauntaun.jpg');
new BusProduct('unicorn', 'img/unicorn.jpg');
new BusProduct('usb', 'img/usb.gif');
new BusProduct('water-can', 'img/water-can.jpg');
new BusProduct('wine-glass', 'img/wine-glass.jpg');

// randomProduct();
displayImg();
BusProduct.ulContainer.addEventListener('click', clickHandler);

var clickArray = [];
var labelArray = [];

function populateChartArrays(){
  for(var i = 0; i < BusProduct.allProducts.length; i++){
    clickArray[i] = BusProduct.allProducts[i].clicks;
    labelArray[i] = BusProduct.allProducts[i].name;
  }
}

function drawChart(){
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labelArray,
      datasets: [{
        label: '# of Votes',
        data: clickArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}

//check Local Storage and see if data is there and if not make new array of data.
function storeLocal(){
  for(var i = 0; i < BusProduct.allProducts.length; i++)
    var allProductsArrayStr = JSON.stringify(BusProduct.allProducts);
  localStorage.setItem('busProductLS', allProductsArrayStr);
}
function retrieveLocal(){
  var localProduct = JSON.parse(localStorage.getItem('busProductLS'));
  for(var i = 0; i < BusProduct.allProducts.length; i++){
  if()
}
retrieveLocal();