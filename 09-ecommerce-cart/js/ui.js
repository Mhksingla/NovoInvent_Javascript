import { addToCart, cart }
from "./cart.js";

// PRODUCTS

export function renderProducts(products){

   const productList =
   document.getElementById(
      "productList"
   );

   productList.innerHTML = "";

   products.forEach(product => {

      const div =
      document.createElement("div");

      div.classList.add("card");

      div.innerHTML = `

         <img src="${product.image}">

         <h3>${product.title}</h3>

         <p>$${product.price}</p>

         <button
            data-id="${product.id}">

            Add to Cart

         </button>
      `;

      productList.appendChild(div);
   });

   // BUTTON EVENTS

   productList
   .querySelectorAll("button")
   .forEach(button => {

      button.addEventListener(

         "click",

         () => {

            const product =
            products.find(

               p =>
               p.id ==
               button.dataset.id
            );

            addToCart(product);

            renderCart();
         }
      );
   });
}

// CART

export function renderCart(){

   const cartList =
   document.getElementById(
      "cartList"
   );

   cartList.innerHTML = "";

   cart.forEach(product => {

      const div =
      document.createElement("div");

      div.classList.add("card");

      div.innerHTML = `

         <h3>${product.title}</h3>

         <p>$${product.price}</p>
      `;

      cartList.appendChild(div);
   });
}