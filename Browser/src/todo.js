/**
 *
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @param {HTMLElement} containerEl
 */
export function addTodo(todo, containerEl) {
  const divEl = document.createElement('div');
  // divEl.className = 'todo-item';
  divEl.classList.add('todo-item');
  divEl.dataset.todoId = todo.id;

  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.className = 'todo-title';
  inputEl.value = todo.title;

  divEl.appendChild(inputEl);

  if (containerEl.childElementCount) {
    containerEl.insertBefore(divEl, containerEl.firstElementChild);
  } else {
    containerEl.appendChild(divEl);
  }
}
/*
<div class="todo-item" data-todo-id="1">
  <input type="checkbox" class="todo-completed" />
  <input type="text" class="todo-title" value="Acheter du pain" />
  <button>-</button>
</div>
*/
