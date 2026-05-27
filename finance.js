const prompt = require("prompt-sync")();

// USER INPUT

let principal =
Number(prompt("Enter principal amount: "));

let rate =
Number(prompt("Enter annual interest rate: "));

let years =
Number(prompt("Enter number of years: "));

// COMPOUND INTEREST

let amount =
principal * (1 + rate / 100) ** years;

let interest =
amount - principal;

// OUTPUT

console.log("\nFinal Amount:",
amount.toFixed(2));

console.log("Interest Earned:",
interest.toFixed(2));

// CATEGORY

if(amount >= 200000){

   console.log("Category: Investor");

}else if(amount >= 100000){

   console.log("Category: Saver");

}else{

   console.log("Category: Spender");
}