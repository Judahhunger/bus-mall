'use strict';

// var totalClicks = 0;
BusProduct.displayArray = [];//array to keep track of what's getting displayed.
BusProduct.allProducts = [];//array of all instances for products.
BusProduct.totalCounter = 0; // tracks each time something is clicked.
BusProduct.images = [document.getElementById('product-1'), document.getElementById('product-2'), document.getElementById('product-3')]; //array for 3 displayed images.
BusProduct.ulContainer = document.getElementById('display');
//constructor of BusMall products.
function BusProduct(name, filepath){
  this.name = name;
  this.filepath = filepath;//pulling the img from folder it's located in
  this.clicks = 0;// tracks each time that instance/img is clicked on.
  this.shown = 0;// tracks how many times the instance/img is shown, even if not clicked on.
  BusProduct.allProducts.push(this);//pushes all instances and properties into the array of all instances
}

//making random number based on the length of allProducts array.
function makeRandomImg(){
  return Math.floor(Math.random() * BusProduct.allProducts.length);
}
// function to display img from an array that we'll use to compare if an img in the array is there or not.
function displayImg(){
  while(BusProduct.displayArray.length < 6){//if the array has less then 6 items grab an item
    var randomIndex = makeRandomImg();//makes a number by calling function and uses one of those numbers
    while(!BusProduct.displayArray.includes(randomIndex)){//check to see if current image is currently in the array to be used and if not
      BusProduct.displayArray.push(randomIndex);// push it to array to be used.
    }
  }
  for(var i = 0; i < BusProduct.images.length; i++){//going through the array of images getting added through dom to index.html
    var holderImg = BusProduct.displayArray.shift();//taking out the first image display array and cutting from array and useing it.
    BusProduct.images[i].src = BusProduct.allProducts[holderImg].filepath;//going through and for each element in images array displaying it.
    BusProduct.images[i].alt = BusProduct.allProducts[holderImg].name;
    BusProduct.images[i].title = BusProduct.allProducts[holderImg].name;
    BusProduct.allProducts[holderImg].shown +=1;//anytime that image is shown it will increment up by 1 for that image.
  }
}
//event handler so on click will do something.
function clickHandler(event){
  displayImg();
  BusProduct.totalCounter += 1;//adds to total clicks
  if(event.target === BusProduct.ulContainer){
    BusProduct.totalCounter -= 1;
    return alert('Please click on a product');
  }
  if(BusProduct.totalCounter > 24){
    BusProduct.ulContainer.removeEventListener('click', clickHandler);
    BusProduct.ulContainer.style.display = 'none';
    populateChartArrays();
    drawChart();
    storeLocal();
  }
  for(var i = 0; i < BusProduct.allProducts.length; i++){
    if(event.target.alt === BusProduct.allProducts[i].name){
      BusProduct.allProducts[i].clicks += 1;//adds when pic is clicked on
    }
  }
}

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
  localStorage.setItem('busProductLS', JSON.stringify(BusProduct.allProducts));
}

function updateToAllProducts(){//checks Local storage and if no LS then makes the new array of instances.
  if(localStorage.busProductLS){
    var allProducts = JSON.parse(localStorage.getItem('busProductLS'));
    BusProduct.allProducts = allProducts;
  }
  else{
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

  }
}
updateToAllProducts();//function to check LS and use or make instances
displayImg();//function to make first 3 images on load.
BusProduct.ulContainer.addEventListener('click', clickHandler);