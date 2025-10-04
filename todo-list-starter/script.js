let todoTasks = ["Walk", "Work"];
let todoTasksStatus = [false,true];

const todoList = document.getElementById("todo-list");
for (const [index, task] of todoTasks.entries()) {
    const newTodoTaskTextElement = document.createElement("p");
    newTodoTaskTextElement.innerText = task;

    if(todoTasksStatus[index] == true) {
    newTodoTaskTextElement.classList.add("complete");
    }
    const newTodoTaskElement = document.createElement("li");
    newTodoTaskElement.appendChild(newTodoTaskTextElement);

    newTodoTaskElement.appendChild(completeButtonElement);
    todoList.appendChild(newTodoTaskElement);
}


const addTask = () => {
    const newTask = document.getElementById("new-task-text");
    if (newTask.value) {
        todoTasks.push(newTask.value);
        todoTasksStatus.push(false);
        newTask.value = "";
        updateTodoList();
    }
};

const updateTodoList = () => {

};

const createNewTodoItemElement = (task, index) => {
const newTodoTaskTextElement = document.createElement("p");
newTodoTaskTextElement.innerText = task;

if (todoTasksStatus[index] == true) {
newTodoTaskTextElement.classList.add("complete");
}  

const newTodoTaskElement = document.createElement("li");
newTodoTaskElement.appendChild(newTodoTaskTextElement);

const completeButtonElement = document.createElement("input");
completeButtonElement.type = "button";
completeButtonElement.value = "Completed";
completeButtonElement.onclick = function () {
toggleComplete(index);
};
newTodoTaskElement.appendChild(completeButtonElement);
return newTodoTaskElement;
};

const toggleComplete = (index) => {
if (todoTasksStatus[index] == false) {
    todoTasksStatus[index] = true;
} else {
    todoTasksStatus[index] = false;
} 
console.log(todoTasksStatus);
};


