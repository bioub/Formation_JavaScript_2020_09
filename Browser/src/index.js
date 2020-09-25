import { addTodo } from "./todo.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todo-form');
/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todo-list');
/** @type {HTMLInputElement} */
const todoInputEl = document.querySelector('.todo-form-value');
/** @type {HTMLInputElement} */
const todoToggleEl = document.querySelector('.todo-toggle-all');


formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  addTodo({
    id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER), // à remplacer par celui provenant du serveur
    title: todoInputEl.value,
    completed: false,
  }, listEl);

  todoInputEl.value = '';
  todoInputEl.focus();
});

listEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todo-btn-rm')) {
    target.parentElement.parentElement.removeChild(target.parentElement);
  }
});

todoToggleEl.addEventListener('click', (event) => {
  // const checkboxes = listEl.querySelectorAll('input[type=checkbox]');
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxes = listEl.querySelectorAll('.todo-completed');

  // convertir un iterable en tableau ES6
  // const checkboxesArr = Array.from(checkboxes);

  for (const checkbox of checkboxes) {
    checkbox.checked = event.target.checked;
  }
})
/*
Exercice 1 :
Reprendre le code de addTodo pour ajouter les balises manquantes
<input type="checkbox" class="todo-completed" />
<button>-</button>

Exercice 2 :
Soit dans index.js soit dans addTodo (plus simple)
Ecouter le click du bouton moins et supprimer la ligne <div class="todo-item">
Vous pouvez utiliser ElementRef.remove() (mais pas IE11)
ou ElementRef.removeChild(ElementRefEnfant)

Exercice 3 :
Au click de <input type="checkbox" class="todo-toggle-all" />
Cocher ou décocher toutes les todos
document.querySelectorAll
InputCheckboxRef.checked = true ou false
*/
