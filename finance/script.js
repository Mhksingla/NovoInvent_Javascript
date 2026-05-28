// FORM

const form =
document.getElementById("financeForm");

const result =
document.getElementById("result");

// EVENT

form.addEventListener(

   "submit",

   (event) => {

      event.preventDefault();

      // INPUT VALUES

      const principal =
      Number(
         document.getElementById(
            "principal"
         ).value
      );

      const rate =
      Number(
         document.getElementById(
            "rate"
         ).value
      );

      const years =
      Number(
         document.getElementById(
            "years"
         ).value
      );

      // COMPOUND INTEREST

      const amount =

      principal *
      (1 + rate / 100) ** years;

      const interest =
      amount - principal;

      // CATEGORY

      let category = "";

      if(amount >= 200000){

         category = "Investor";

      }else if(amount >= 100000){

         category = "Saver";

      }else{

         category = "Spender";
      }

      // SHOW RESULT

      result.style.display =
      "block";

      result.innerHTML = `

         <h2>Results</h2>

         <p>
            Final Amount:
            ₹${amount.toFixed(2)}
         </p>

         <p>
            Interest Earned:
            ₹${interest.toFixed(2)}
         </p>

         <p>
            Category:
            ${category}
         </p>
      `;
   }
);