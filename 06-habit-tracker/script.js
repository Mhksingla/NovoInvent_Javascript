// SELECT ELEMENTS

const form =
document.getElementById("habitForm");

const input =
document.getElementById("habitInput");

const list =
document.getElementById("habitList");

// FORM SUBMIT

form.addEventListener(

   "submit",

   (event) => {

      event.preventDefault();

      const habit =
      input.value.trim();

      if(habit === "") return;

      // CREATE LI

      const li =
      document.createElement("li");

      li.innerHTML = `

         <span>${habit}</span>

         <div class="actions">

            <button class="complete">
               Complete
            </button>

            <button class="delete">
               Delete
            </button>

         </div>
      `;

      list.appendChild(li);

      input.value = "";
   }
);

// EVENT DELEGATION

list.addEventListener(

   "click",

   (event) => {

      // DELETE

      if(
         event.target.classList.contains(
            "delete"
         )
      ){

         event.target
         .closest("li")
         .remove();
      }

      // COMPLETE

      if(
         event.target.classList.contains(
            "complete"
         )
      ){

         event.target
         .closest("li")
         .classList.toggle(
            "completed"
         );
      }
   }
);