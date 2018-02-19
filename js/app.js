'use strict';

var totalClicks = 0;
busProduct.allProducts = [];

function busProduct(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.clicks = 0;
  this.shown = 0;
  busProduct.allProducts.push(this);
}


new busProduct('bag', '../img/bag.jpg');
new busProduct('banana', '../img/banana.jpg');
new busProduct('bathroom', '../img/bathroom.jpg');

var busImage1 = document.getElementById('product-1');
var busImage2 = document.getElementById('product-2');
var busImage3 = document.getElementById('product-3');

function randomProduct(){
  var makeProduct = Math.floor(Math.random() * busProduct.allProducts.length);

  busImage1.scr = busProduct.allProducts[makeProduct].filepath;

}
randomProduct();
