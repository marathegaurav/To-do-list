//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners
todoButton.addEventListener("click", addTodo);

//Functions
function addTodo(event) {
    //prevent default prevents from submitting the form
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI 
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check Mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<button><i class="fas fa-check"></i></button>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML= '<button><i class="fas fa-trash"></i></button>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
}