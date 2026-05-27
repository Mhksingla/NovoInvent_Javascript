// ELEMENTS

const form =
document.getElementById("weatherForm");

const cityInput =
document.getElementById("cityInput");

const weatherCard =
document.getElementById("weatherCard");

const loading =
document.getElementById("loading");

const error =
document.getElementById("error");

// API FUNCTION

async function getWeather(city){

   try{

      // SHOW LOADING

      loading.style.display = "block";

      weatherCard.style.display = "none";

      error.textContent = "";

      // FETCH DATA

      const response =
      await fetch(

`https://wttr.in/${city}?format=j1`

      );

      // CHECK ERROR

      if(!response.ok){

         throw new Error(
            "City not found"
         );
      }

      // JSON DATA

      const data =
      await response.json();

      // WEATHER INFO

      const current =
      data.current_condition[0];

      // DISPLAY CARD

      weatherCard.innerHTML = `

         <h2>${city}</h2>

         <p>
            Temperature:
            ${current.temp_C}°C
         </p>

         <p>
            Weather:
            ${current.weatherDesc[0].value}
         </p>

         <p>
            Humidity:
            ${current.humidity}%
         </p>
      `;

      weatherCard.style.display =
      "block";

   }catch(err){

      error.textContent =
      err.message;

   }finally{

      // HIDE LOADING

      loading.style.display = "none";
   }
}

// FORM

form.addEventListener(

   "submit",

   (event) => {

      event.preventDefault();

      const city =
      cityInput.value.trim();

      if(city){

         getWeather(city);
      }
   }
);