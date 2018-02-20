'use strict';

// var totalClicks = 0;
var displayThree = [];
var makeProduct = 0;
var busImage1 = document.getElementById('product-1');
var busImage2 = document.getElementById('product-2');
var busImage3 = document.getElementById('product-3');
var displayImg = document.getElementById('display');

function busProduct(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.clicks = 0;
  this.shown = 0;
  busProduct.allProducts.push(this);
}
busProduct.allProducts = [];
function randomProduct(){
  makeProduct = Math.floor(Math.random() * busProduct.allProducts.length);
  displayThree.push(busProduct.allProducts[makeProduct]);
}
function displayCurrent(){
  randomProduct();
  busImage1.src = displayThree[0].filepath;
  busImage1.alt = displayThree[0].name;
  busImage1.title = displayThree[0].name;
  randomProduct();
  busImage2.src = displayThree[1].filepath;
  busImage2.alt = displayThree[1].name;
  busImage2.title = displayThree[1].name;
  randomProduct();
  busImage3.src = displayThree[2].filepath;
  busImage3.alt = displayThree[2].name;
  busImage3.title = displayThree[2].name;
}

new busProduct('bag', 'img/bag.jpg');
new busProduct('banana', 'img/banana.jpg');
new busProduct('bathroom', 'img/bathroom.jpg');
new busProduct('boots', 'img/boots.jpg');
new busProduct('breakfast', 'img/breakfast.jpg');
new busProduct('bubblegum', 'img/bubblegum.jpg');

// randomProduct();
displayCurrent();
displayImg.addEventListener('click', displayCurrent);