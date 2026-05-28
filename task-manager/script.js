// TASK ARRAY

let tasks = [];

// ELEMENTS

const taskForm =
document.getElementById("taskForm");

const taskList =
document.getElementById("taskList");

const totalHoursText =
document.getElementById("totalHours");

const showPendingBtn =
document.getElementById("showPending");

const showAllBtn =
document.getElementById("showAll");

// ADD TASK

taskForm.addEventListener(

   "submit",

   (event) => {

      event.preventDefault();

      const title =
      document.getElementById(
         "taskTitle"
      ).value;

      const hours =
      Number(
         document.getElementById(
            "taskHours"
         ).value
      );

      const task = {

         id:Date.now(),

         title,

         hours,

         completed:false
      };

      tasks.push(task);

      renderTasks(tasks);

      taskForm.reset();
   }
);

// RENDER TASKS

function renderTasks(taskArray){

   taskList.innerHTML = "";

   taskArray.forEach(task => {

      const div =
      document.createElement("div");

      div.classList.add("task");

      if(task.completed){

         div.classList.add(
            "completed"
         );
      }

      div.innerHTML = `

         <div class="info">

            <h3>${task.title}</h3>

            <p>
               Time:
               ${task.hours} hrs
            </p>

         </div>

         <div class="actions">

            <button
               class="complete"
               data-id="${task.id}">

               Complete
            </button>

            <button
               class="delete"
               data-id="${task.id}">

               Delete
            </button>

         </div>
      `;

      taskList.appendChild(div);
   });

   updateTotalHours();
}

// EVENT DELEGATION

taskList.addEventListener(

   "click",

   (event) => {

      const id =
      Number(
         event.target.dataset.id
      );

      // COMPLETE

      if(
         event.target.classList.contains(
            "complete"
         )
      ){

         tasks = tasks.map(task => {

            if(task.id === id){

               task.completed =
               !task.completed;
            }

            return task;
         });

         renderTasks(tasks);
      }

      // DELETE

      if(
         event.target.classList.contains(
            "delete"
         )
      ){

         tasks =
         tasks.filter(

            task => task.id !== id
         );

         renderTasks(tasks);
      }
   }
);

// SHOW PENDING

showPendingBtn.addEventListener(

   "click",

   () => {

      const pending =
      tasks.filter(

         task => !task.completed
      );

      renderTasks(pending);
   }
);

// SHOW ALL

showAllBtn.addEventListener(

   "click",

   () => {

      renderTasks(tasks);
   }
);

// TOTAL HOURS

function updateTotalHours(){

   const total =
   tasks.reduce(

      (sum,task) =>
      sum + task.hours,

      0
   );

   totalHoursText.textContent =

   `Total Hours: ${total}`;
}