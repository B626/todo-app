let todosWrapper = document.querySelector('#todoList')
let addButton = document.querySelector('.btn.btn-primary')

let todosIndex = 0;

let todos = [];

function createTodo() {
   let input = document.querySelector('.form-control')

   todos.push(input.value)
   input.value = ''
   renderTodos()
}

function renderTodos() {
   todosWrapper.innerHTML = ''
   todos.forEach((todo, index) => {
      let todoCode =
      `<td class="todo__column" style="width:33.333%">
            <p class="todo__index">${index + 1}</p>
         </td>
         <td class="todo__column" style="width:33.333%">
            <p class="todo__name">${todo}</p>
         </td>
         <td class="todo__column" style="width:33.333%">
            <div class="todo__actions">
               <button onclick="editTodo(${index})" class="todo__btn editButton">Edit</button>
               <button onclick="deleteTodo(${index})" class="todo__btn deleteButton">Delete</button>
            </div>
         </td>`
      let todoElement = document.createElement('tr')
      todoElement.innerHTML = todoCode
      todosWrapper.append(todoElement)
   })
}

function deleteTodo(i) {
   todos.splice(i, 1)
   renderTodos()
}

function editTodo(i) {
   console.log(todos[i-1])
}

addButton.addEventListener('click', createTodo)
