// window.addEventListener('load', () => {
//     todos = JSON.parse(localStorage.getItem('todos')) || [];
//     let nameInput = document.getElementById('name')
//     let newTodoForm = document.getElementById('new-todo-form')

//     let username = localStorage.getItem('username');
//     nameInput.value= username;

//     nameInput.addEventListener('change', (e) => {
//         localStorage.setItem('username', e.target.value);

//     })
    

// })

// let addBtn = document.getElementById("addTodo")
// addBtn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     let desc = content.value
  
//     localStorage.setItem("todo", JSON.stringify([desc]))
//     console.log(e)

//     todoList.innerHTML += `
//     <div class="todo-item">
                    
//                     <label id="check">
//                         <input type="checkbox" name="" id="">
//                         <span class="bubble ${}" id="span"></span>
//                     </label>

//                     <div class="todo-content">
//                         <input type="text" value="${desc}" readonly>
//                     </div>

//                     <div class="action">
//                         <button class="edit">Edit</button>
//                         <button class="delete">Delete</button>
//                     </div>
//                 </div>
//     `
//     content.value = ""
//     content.focus()

    
// })

// let checkbox = document.getElementById('check')
// let todoItem = document.querySelector('.todo-item')
// let todoContent = document.querySelector('.todo-content')
// checkbox.addEventListener('click', (e) => {
//     todoContent.classList.add("done")
    
// })

// input.addEventListener('change', () => {
//             let index = todos.findIndex(todo => todo.description == desc)
//             todos[index].done = input.checked
//             localStorage.setItem('todos', JSON.stringify(todos))
//         })
        
//         let deleteBtn = newTodoItem.querySelector('.delete')
//         deleteBtn.addEventListener('click', (e) => {
//             e.preventDefault()
//             localStorage.removeItem("todos")
//             todo.innerHTML = ''
//         })
    
    


// window.addEventListener('load', () => {
//     todos = JSON.parse(localStorage.getItem('todos')) || [];
//     let nameInput = document.getElementById('name')
//     let newTodoForm = document.getElementById('new-todo-form')

//     let username = localStorage.getItem('username');
//     nameInput.value= username;

//     nameInput.addEventListener('change', (e) => {
//         localStorage.setItem('username', e.target.value);
//     })
    
    
// })
// let addBtn = document.querySelector("#addTodo")
// addBtn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     let desc = document.getElementById('content').value
//     let todoList = document.getElementById('todo-list')
    
//     todos.push({description: desc, done: false, category: 'personal'})
//     localStorage.setItem('todos', JSON.stringify(todos))
    
//     let newTodoItem = document.createElement('div')
//     newTodoItem.classList.add('todo-item')
    
//     todoList.innerHTML = `
//     <label>
//         <input type="checkbox" name="" id="check">
//         <span class="bubbles" id="span"></span>
//     </label>

//     <div class="todo-content">
//         <input type="text" value="${desc}" readonly>
//     </div>

//     <div class="action">
//         <button class="edit">Edit</button>
//         <button class="delete">Delete</button>
//     </div>
//     `
    
//     let input = newTodoItem.querySelector('#check')
//     let span = newTodoItem.querySelector('#span')


    
//     input.addEventListener('change', () => {
//         let index = todos.findIndex(todo => todo.description == desc)
//         todos[index].done = input.checked
//         localStorage.setItem('todos', JSON.stringify(todos))
//     })
    
//     let deleteBtn = newTodoItem.querySelector('.delete')
//     deleteBtn.addEventListener('click', (e) => {
//         e.preventDefault()
//         localStorage.removeItem("todos")
//         todo.innerHTML = ''
//     })

// })


// Get the elements
const todoList = document.getElementById('todoList');
const addTodoForm = document.getElementById('new-todo-form');
const addTodoButton = document.getElementById('addTodo');
const nameInput = document.getElementById('name');

// Initialize an empty array to store the todos
let todos = [];

// Function to render the todo list
function renderTodoList() {
  todoList.innerHTML = '';
  todos.forEach((todo) => {
    todoList.innerHTML += `
      <div class="todo-item ${todo.done ? 'done' : ''}">
        <label id="check">
          <input type="checkbox" name="" id="" ${todo.done ? 'checked' : ''}>
          <span class="bubble ${todo.category}" id="span"></span>
        </label>

        <div class="todo-content">
          <input type="text" value="${todo.content}" readonly>
        </div>

        <div class="action">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      </div>
    `;
  });
}

// Function to add a new todo
function addTodo(event) {
  event.preventDefault();
  const contentInput = document.getElementById('content');
  const category = document.querySelector('input[name="option"]:checked').value;
  const newTodo = {
    content: contentInput.value,
    category,
    done: false,
  };
  todos.push(newTodo);
  contentInput.value = '';
  renderTodoList();
}

// Function to toggle the done status of a todo
function toggleDone(event) {
  const todoItem = event.target.parentNode.parentNode;
  const todoIndex = todos.findIndex((todo) => todo.content === todoItem.querySelector('input[type="text"]').value);
  todos[todoIndex].done = !todos[todoIndex].done;
  renderTodoList();
}

// Function to edit a todo
function editTodo(event) {
  const todoItem = event.target.parentNode.parentNode;
  const todoInput = todoItem.querySelector('input[type="text"]');
  todoInput.readOnly = false;
  todoInput.focus();
}

// Function to delete a todo
function deleteTodo(event) {
  const todoItem = event.target.parentNode.parentNode;
  const todoIndex = todos.findIndex((todo) => todo.content === todoItem.querySelector('input[type="text"]').value);
  todos.splice(todoIndex, 1);
  renderTodoList();
}

// Add event listeners
addTodoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    toggleDone(event);
  } else if (event.target.className === 'edit') {
    editTodo(event);
  } else if (event.target.className === 'delete') {
    deleteTodo(event);
  }
});

// Render the initial todo list
renderTodoList();