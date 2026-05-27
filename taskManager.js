// TASK ARRAY

let tasks = [

   {
      id:1,
      title:"Learn JavaScript",
      completed:false,
      hours:2
   },

   {
      id:2,
      title:"Build Dashboard",
      completed:true,
      hours:3
   }
];

// ADD TASK

const addTask = (title,hours) => {

   const newTask = {

      id:tasks.length + 1,

      title,

      completed:false,

      hours
   };

   tasks.push(newTask);

   console.log("Task Added");
};

// MARK COMPLETE

const completeTask = (id) => {

   const task =
   tasks.find(task => task.id === id);

   if(task){

      task.completed = true;

      console.log("Task Completed");

   }else{

      console.log("Task Not Found");
   }
};

// FILTER PENDING

const showPendingTasks = () => {

   const pending =
   tasks.filter(task => !task.completed);

   console.log("\nPending Tasks:");

   console.log(pending);
};

// TOTAL HOURS

const totalHours = () => {

   const total =
   tasks.reduce(

      (sum,task) =>
      sum + task.hours,

      0
   );

   console.log(
      "\nTotal Hours:",
      total
   );
};

// FUNCTION CALLS

addTask("Practice CSS",4);

completeTask(1);

showPendingTasks();

totalHours();