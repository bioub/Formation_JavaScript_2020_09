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

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todo-completed';
  checkboxEl.checked = todo.completed;
  divEl.appendChild(checkboxEl);

  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.className = 'todo-title';
  inputEl.value = todo.title;
  divEl.appendChild(inputEl);

  const btnEl = document.createElement('button');
  btnEl.innerText = '-';
  btnEl.className = 'todo-btn-rm';
  divEl.appendChild(btnEl);

  // btnEl.addEventListener('click', () => {
  //   divEl.remove();
  // });

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
