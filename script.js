let todosWrapper = document.querySelector('#todoList')
let addButton = document.querySelector('.btn.btn-primary')

let todosIndex = 0;

let todos = [];

let createTodo = () => {
   let input = document.querySelector('.form-control')
   if (!input.value) {
      return alert('You did not type a todo')
   } else {
      todosIndex++
      let todoCode =
         `<div class="todo" style="display:flex; width:100%">
         <div class="todo__column" style="width:33.333%">
               <p class="todo__index">${todosIndex}</p>
            </div>
            <div class="todo__column" style="width:33.333%">
               <p class="todo__name">2</p>
            </div>
            <div class="todo__column" style="width:33.333%">
               <p class="todo__actions">3</p>
            </div>
         </div>`
      let todo = document.createElement('div')
      todo.innerHTML = todoCode
      todosWrapper.append(todo)
      todos.push(todo)
      console.log(todos)
   }
}

addButton.addEventListener('click', createTodo)

