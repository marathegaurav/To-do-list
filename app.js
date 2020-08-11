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
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo"); 
    //Create LI 
    const newTodo = document.createElement('li');    
}