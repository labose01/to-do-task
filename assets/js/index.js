

const addBtn = document.querySelector(".add");
const addTaskInput = document.querySelector(".addTaskInput");
const task = document.querySelector(".task");

const validFormFieldInput = () => {

    let data = addTaskInput.value;

    if(data == ""){
        alert("Please add the task name")
        return;
    }   
} 
task.addEventListener("click", function(task) {
    task.preventDefault()
})


addBtn.addEventListener("click", validFormFieldInput);

const tasksManager = new TaskManager();
console.log(tasksManager);


