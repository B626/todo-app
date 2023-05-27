let todosWrapper = document.querySelector('#todoList')
let addButton = document.querySelector('.btn.btn-primary')

let todosIndex = 0;

let todos = [];

function deleteTodo(i) {
   todosWrapper.removeChild(todos[i - 1])
   delete todos[i - 1]
   console.log(todos)
}

function editTodo(i) {
   console.log(todos[i-1])
}


function createTodo() {
   let input = document.querySelector('.form-control')
   todosIndex++
   let todoCode =
      `<div class="todo" style="display:flex; width:100%">
      <div class="todo__column" style="width:33.333%">
            <p class="todo__index">${todosIndex}</p>
         </div>
         <div class="todo__column" style="width:33.333%">
            <p class="todo__name">${input.value}</p>
         </div>
         <div class="todo__column" style="width:33.333%">
            <div class="todo__actions">
               <button onclick="editTodo(${todosIndex})" class="todo__btn editButton">Edit</button>
               <button onclick="deleteTodo(${todosIndex})" class="todo__btn deleteButton">Delete</button>
            </div>
         </div>
      </div>`
   let todo = document.createElement('div')
   todo.innerHTML = todoCode
   todosWrapper.append(todo)
   todos.push(todo)
}

addButton.addEventListener('click', createTodo)
