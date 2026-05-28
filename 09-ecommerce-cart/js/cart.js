export let cart =

JSON.parse(
localStorage.getItem("cart")
) || [];

// SAVE

export function saveCart(){

   localStorage.setItem(

      "cart",

      JSON.stringify(cart)
   );
}

// ADD

export function addToCart(product){

   cart.push(product);

   saveCart();
}