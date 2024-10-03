// // window.addEventListener('load', () => {
// //     todos = JSON.parse(localStorage.getItem('todos')) || [];
// //     let nameInput = document.getElementById('name')
// //     let newTodoForm = document.getElementById('new-todo-form')

// //     let username = localStorage.getItem('username');
// //     nameInput.value= username;

// //     nameInput.addEventListener('change', (e) => {
// //         localStorage.setItem('username', e.target.value);

// //     })
    

// // })

// // let addBtn = document.getElementById("addTodo")
// // addBtn.addEventListener('click', (e)=>{
// //     e.preventDefault()
// //     let desc = content.value
  
// //     localStorage.setItem("todo", JSON.stringify([desc]))
// //     console.log(e)

// //     todoList.innerHTML += `
// //     <div class="todo-item">
                    
// //                     <label id="check">
// //                         <input type="checkbox" name="" id="">
// //                         <span class="bubble ${}" id="span"></span>
// //                     </label>

// //                     <div class="todo-content">
// //                         <input type="text" value="${desc}" readonly>
// //                     </div>

// //                     <div class="action">
// //                         <button class="edit">Edit</button>
// //                         <button class="delete">Delete</button>
// //                     </div>
// //                 </div>
// //     `
// //     content.value = ""
// //     content.focus()

    
// // })

// let checkbox = document.getElementById('check')
// let todoItem = document.querySelector('.todo-item')
// let todoContent = document.querySelector('.todo-content')
// checkbox.addEventListener('click', (e) => {
//     todoContent.classList.add("done")
    
// })

// // input.addEventListener('change', () => {
// //             let index = todos.findIndex(todo => todo.description == desc)
// //             todos[index].done = input.checked
// //             localStorage.setItem('todos', JSON.stringify(todos))
// //         })
        
// //         let deleteBtn = newTodoItem.querySelector('.delete')
// //         deleteBtn.addEventListener('click', (e) => {
// //             e.preventDefault()
// //             localStorage.removeItem("todos")
// //             todo.innerHTML = ''
// //         })
    
    


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


// window.addEventListener('load', () => {
// 	todos = JSON.parse(localStorage.getItem('todos')) || [];
// 	const nameInput = document.querySelector('#name');
// 	const newTodoForm = document.querySelector('#new-todo-form');

// 	const username = localStorage.getItem('username') || '';

// 	nameInput.value = username;

// 	nameInput.addEventListener('change', (e) => {
// 		localStorage.setItem('username', e.target.value);
// 	})

// 	newTodoForm.addEventListener('submit', e => {
// 		e.preventDefault();

// 		const todo = {
// 			content: e.target.elements.content.value,
// 			category: e.target.elements.category.value,
// 			done: false,
// 			createdAt: new Date().getTime()
// 		}

// 		todos.push(todo);

// 		localStorage.setItem('todos', JSON.stringify(todos));

// 		// Reset the form
// 		e.target.reset();

// 		DisplayTodos()
// 	})

// 	DisplayTodos()
// })

// function DisplayTodos () {
// 	const todoList = document.querySelector('#todo-list');
// 	todoList.innerHTML = "";

// 	todos.forEach(todo => {
// 		const todoItem = document.createElement('div');
// 		todoItem.classList.add('todo-item');

// 		const label = document.createElement('label');
// 		const input = document.createElement('input');
// 		const span = document.createElement('span');
// 		const content = document.createElement('div');
// 		const actions = document.createElement('div');
// 		const edit = document.createElement('button');
// 		const deleteButton = document.createElement('button');

// 		input.type = 'checkbox';
// 		input.checked = todo.done;
// 		span.classList.add('bubble');
// 		if (todo.category == 'personal') {
// 			span.classList.add('personal');
// 		} else {
// 			span.classList.add('business');
// 		}
// 		content.classList.add('todo-content');
// 		actions.classList.add('actions');
// 		edit.classList.add('edit');
// 		deleteButton.classList.add('delete');

// 		content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
// 		edit.innerHTML = 'Edit';
// 		deleteButton.innerHTML = 'Delete';

// 		label.appendChild(input);
// 		label.appendChild(span);
// 		actions.appendChild(edit);
// 		actions.appendChild(deleteButton);
// 		todoItem.appendChild(label);
// 		todoItem.appendChild(content);
// 		todoItem.appendChild(actions);

// 		todoList.appendChild(todoItem);

// 		if (todo.done) {
// 			todoItem.classList.add('done');
// 		}
		
// 		input.addEventListener('change', (e) => {
// 			todo.done = e.target.checked;
// 			localStorage.setItem('todos', JSON.stringify(todos));

// 			if (todo.done) {
// 				todoItem.classList.add('done');
// 			} else {
// 				todoItem.classList.remove('done');
// 			}

// 			DisplayTodos()

// 		})

// 		edit.addEventListener('click', (e) => {
// 			const input = content.querySelector('input');
// 			input.removeAttribute('readonly');
// 			input.focus();
// 			input.addEventListener('blur', (e) => {
// 				input.setAttribute('readonly', true);
// 				todo.content = e.target.value;
// 				localStorage.setItem('todos', JSON.stringify(todos));
// 				DisplayTodos()

// 			})
// 		})

// 		deleteButton.addEventListener('click', (e) => {
// 			todos = todos.filter(t => t != todo);
// 			localStorage.setItem('todos', JSON.stringify(todos));
// 			DisplayTodos()
// 		})

// 	})
// }

// SOLN3
// Get the elements
// const todoList = document.getElementById('todoList');
// const addTodoForm = document.getElementById('new-todo-form');
// const addTodoButton = document.getElementById('addTodo');
// const nameInput = document.getElementById('name');


// // Initialize an empty array to store the todos
// let todos = [];

// // Function to render the todo list
// function renderTodoList() {
//   todoList.innerHTML = '';
//   todos.forEach((todo) => {
//     todoList.innerHTML += `
//       <div class="todo-item ${todo.done ? 'done' : ''}">
//         <label id="check">
//           <input type="checkbox" name="" id="" ${todo.done ? 'checked' : ''}>
//           <span class="bubble ${todo.category}" id="span"></span>
//         </label>

//         <div class="todo-content">
//           <input type="text" value="${todo.content}" readonly>
//         </div>

//         <div class="action">
//           <button class="edit">Edit</button>
//           <button class="delete">Delete</button>
//         </div>
//       </div>
//     `;
//   });
// }

// // Function to add a new todo
// function addTodo(event) {
//   event.preventDefault();
//   const contentInput = document.getElementById('content');
//   const category = document.querySelector('input[name="option"]:checked').value;
//   if (contentInput.value === "") {
//     alert("Write somthing to create a todo")
//   } else {
//     const newTodo = {
//       content: contentInput.value,
//       category,
//       done: false,
//     };
//     todos.push(newTodo);
//     contentInput.value = '';
//     renderTodoList();
//   }


 
// }

// // Function to toggle the done status of a todo
// function toggleDone(event) {
//   const todoItem = event.target.parentNode.parentNode;
//   const todoIndex = todos.findIndex((todo) => todo.content === todoItem.querySelector('input[type="text"]').value);
//   todos[todoIndex].done = !todos[todoIndex].done;
//   renderTodoList();
// }

// // Function to edit a todo
// function editTodo(event) {
//   const todoItem = event.target.parentNode.parentNode;
//   const todoInput = todoItem.querySelector('input[type="text"]');
//   todoInput.readOnly = false;
//   todoInput.focus();
// }

// // Function to delete a todo
// function deleteTodo(event) {
//   const todoItem = event.target.parentNode.parentNode;
//   const todoIndex = todos.findIndex((todo) => todo.content === todoItem.querySelector('input[type="text"]').value);
//   todos.splice(todoIndex, 1);
//   renderTodoList();
// }

// // Add event listeners
// addTodoButton.addEventListener('click', addTodo);
// todoList.addEventListener('click', (event) => {
//   if (event.target.type === 'checkbox') {
//     toggleDone(event);
//   } else if (event.target.className === 'edit') {
//     editTodo(event);
//   } else if (event.target.className === 'delete') {
//     deleteTodo(event);
//   }
// });

// // Render the initial todo list
// renderTodoList();

// window.addEventListener('load', () => {

//   // todos = JSON.parse(localStorage.getItem('todos')) || [];
// renderTodoList();

//   nameInput.addEventListener('input', (e) => {
//     localStorage.setItem('Username', e.target.value)
    
//   })
//   nameInput.value = localStorage.getItem('Username')

// })


// // Retrieve the value from local storage and populate the input element
// document.addEventListener('DOMContentLoaded', () => {
//   const storedName = localStorage.getItem('name');
//   if (storedName) {
//     nameInput.value = storedName;
//   }
// });





window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || []
    const inputName = document.querySelector('#name')
    const newTodoForm = document.querySelector('#new-todo-form')

    inputTodo = document.querySelector('#content')


    const username = localStorage.getItem('username') || ''
    inputName.value = username

    inputName.addEventListener('change', (e) => {
        localStorage.setItem('username', inputName.value)
    })

    newTodoForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const todo = {
            content: inputTodo.value,
            category: e.target.category.value,
            createdAt: new Date().getTime(),
            done: false

        }

        todos.push(todo)
        localStorage.setItem('todos', JSON.stringify(todos))

        e.target.reset()
        inputTodo.focus()

        DisplayTodos()
        
    })
    
})

function DisplayTodos () {
	const todoList = document.querySelector('#todolist');
	// todoList.innerHTML = "";

	todos.forEach(todo => {
		const todoItem = document.createElement('div');
		todoItem.classList.add('todo-item');

		const label = document.createElement('label');
		const input = document.createElement('input');
		const span = document.createElement('span');
		const content = document.createElement('div');
		const actions = document.createElement('div');
		const edit = document.createElement('button');
		const deleteButton = document.createElement('button');

		input.type = 'checkbox';
		input.checked = todo.done;
		span.classList.add('bubble');
		if (todo.category == 'personal') {
			span.classList.add('personal');
		} else {
			span.classList.add('business');
		}
		content.classList.add('todo-content');
		actions.classList.add('actions');
		edit.classList.add('edit');
		deleteButton.classList.add('delete');

		content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
		edit.innerHTML = 'Edit';
		deleteButton.innerHTML = 'Delete';

		label.appendChild(input);
		label.appendChild(span);
		actions.appendChild(edit);
		actions.appendChild(deleteButton);
		todoItem.appendChild(label);
		todoItem.appendChild(content);
		todoItem.appendChild(actions);

		todoList.appendChild(todoItem);

		if (todo.done) {
			todoItem.classList.add('done');
		}
		
		input.addEventListener('change', (e) => {
			todo.done = e.target.checked;
			localStorage.setItem('todos', JSON.stringify(todos));

			if (todo.done) {
				todoItem.classList.add('done');
			} else {
				todoItem.classList.remove('done');
			}

			DisplayTodos()

		})

		edit.addEventListener('click', (e) => {
			const input = content.querySelector('input');
			input.removeAttribute('readonly');
			input.focus();
			input.addEventListener('blur', (e) => {
				input.setAttribute('readonly', true);
				todo.content = e.target.value;
				localStorage.setItem('todos', JSON.stringify(todos));
				DisplayTodos()

			})
		})

		deleteButton.addEventListener('click', (e) => {
			todos = todos.filter(t => t != todo);
			localStorage.setItem('todos', JSON.stringify(todos));
			DisplayTodos()
		})

	})
}

