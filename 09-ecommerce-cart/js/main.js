import { fetchProducts }
from "./api.js";

import {
   renderProducts,
   renderCart
}
from "./ui.js";

// SEARCH INPUT

const searchInput =
document.getElementById(
   "searchInput"
);

// PRODUCTS

let allProducts = [];

// DEBOUNCE

function debounce(func,delay){

   let timer;

   return (...args) => {

      clearTimeout(timer);

      timer = setTimeout(() => {

         func(...args);

      },delay);
   };
}

// INIT

async function init(){

   allProducts =
   await fetchProducts();

   renderProducts(allProducts);

   renderCart();
}

init();

// SEARCH

searchInput.addEventListener(

   "input",

   debounce((event) => {

      const value =
      event.target.value.toLowerCase();

      const filtered =
      allProducts.filter(product =>

         product.title
         .toLowerCase()
         .includes(value)
      );

      renderProducts(filtered);

   },500)
);