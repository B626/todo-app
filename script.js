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
         <td class="todo__column todo-column-text todo-column-text_${index}" style="width:33.333%">
            <p class="todo__name todo__name_${index}">${todo}</p>
         </td>
         <td class="todo__column" style="width:33.333%">
            <div class="todo__actions">
               <button onclick="editTodo(${index})" class="todo__btn editButton btn btn-sm btn-primary">Edit</button>
               <button onclick="deleteTodo(${index})" class="todo__btn deleteButton btn btn-sm btn-danger ml-2">Delete</button>
            </div>
         </td>`
      let todoElement = document.createElement('tr')
      todoElement.innerHTML = todoCode
      todosWrapper.append(todoElement)
   })
}

function editTodo(index) {
   let todoInputCode = `<input type="text" class="todo__form todo-form_${index}" placeholder="Type new text for todo" />
   <button onclick="saveNewTodoText(${index})" class="todo__btn editSaveButton btn btn-sm btn-primary">Save</button>`
   let todoText = document.querySelector(`.todo__column.todo-column-text.todo-column-text_${index}`)
   let todoName = document.querySelector(`.todo__name.todo__name_${index}`)
   let todoInput = document.createElement('div')
   todoName.style.display = 'none'
   todoInput.innerHTML = todoInputCode
   todoText.append(todoInput)
}

function saveNewTodoText(index) {
   let input = document.querySelector(`.todo-form_${index}`)
   todos[index] = input.value
   renderTodos()
}

function deleteTodo(i) {
   todos.splice(i, 1)
   renderTodos()
}

addButton.addEventListener('click', createTodo)
