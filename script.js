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
         <td class="todo__column todo-column-text" style="width:33.333%">
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

function editTodo(index) {
   let todoInputCode = `<input type="text" class="todo__form" placeholder="Type new text for todo" />
   <button onclick="saveNewTodoText(${index})" class="todo__btn editSaveButton">Save</button>`
   let todoText = document.querySelector('.todo__column.todo-column-text')
   let todoName = document.querySelector('.todo__name')
   let todoInput = document.createElement('div')
   todoName.style.display = 'none'
   todoInput.innerHTML = todoInputCode
   todoText.append(todoInput)
}

function saveNewTodoText(index) {
   let input = document.querySelector('.todo__form')
   todos[index] = input.value
   renderTodos()
}

function deleteTodo(i) {
   todos.splice(i, 1)
   renderTodos()
}

addButton.addEventListener('click', createTodo)
