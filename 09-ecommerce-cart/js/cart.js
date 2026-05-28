// CART DATA

let cart =

JSON.parse(
localStorage.getItem("cart")
) || [];

// GET CART

export function getCart(){

   return cart;
}

// SAVE CART

function saveCart(){

   localStorage.setItem(

      "cart",

      JSON.stringify(cart)
   );
}

// ADD TO CART

export function addToCart(product){

   cart.push(product);

   saveCart();
}

// REMOVE FROM CART

export function removeFromCart(id){

   cart = cart.filter(

      item => item.id != id
   );

   saveCart();
}