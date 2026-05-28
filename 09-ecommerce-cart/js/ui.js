import {

   addToCart,
   removeFromCart,
   getCart

} from "./cart.js";

// PRODUCT LIST

const productList =
document.getElementById(
   "productList"
);

// CART LIST

const cartList =
document.getElementById(
   "cartList"
);

// RENDER PRODUCTS

export function renderProducts(products){

   productList.innerHTML = "";

   // EMPTY PRODUCTS

   if(products.length === 0){

      productList.innerHTML = `

         <h2>
            No Products Found
         </h2>
      `;

      return;
   }

   products.forEach(product => {

      const card =
      document.createElement("div");

      card.classList.add("card");

      card.innerHTML = `

         <img src="${product.image}">

         <h3>${product.title}</h3>

         <p>$${product.price}</p>

         <button
            class="add-btn"
            data-id="${product.id}">

            Add to Cart

         </button>
      `;

      productList.appendChild(card);
   });
}

// PRODUCT EVENT DELEGATION

productList.addEventListener(

   "click",

   (event) => {

      if(
         event.target.classList.contains(
            "add-btn"
         )
      ){

         const id =
         event.target.dataset.id;

         const product =
         window.allProductsData.find(

            item => item.id == id
         );

         addToCart(product);

         renderCart();
      }
   }
);

// RENDER CART

export function renderCart(){

   const cart = getCart();

   cartList.innerHTML = "";

   // EMPTY CART

   if(cart.length === 0){

      cartList.innerHTML = `

         <h3>
            Cart is Empty
         </h3>
      `;

      return;
   }

   cart.forEach(product => {

      const card =
      document.createElement("div");

      card.classList.add("card");

      card.innerHTML = `

         <h3>${product.title}</h3>

         <p>$${product.price}</p>

         <button
            class="remove-btn"
            data-id="${product.id}">

            Remove

         </button>
      `;

      cartList.appendChild(card);
   });
}

// REMOVE EVENT DELEGATION

cartList.addEventListener(

   "click",

   (event) => {

      if(
         event.target.classList.contains(
            "remove-btn"
         )
      ){

         removeFromCart(

            event.target.dataset.id
         );

         renderCart();
      }
   }
);