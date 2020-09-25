import { addTodo } from "./todo.js";
import { fetchTodos, postTodo, deleteTodoById } from "./api.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todo-form');
/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todo-list');
/** @type {HTMLInputElement} */
const todoInputEl = document.querySelector('.todo-form-value');
/** @type {HTMLInputElement} */
const todoToggleEl = document.querySelector('.todo-toggle-all');


formEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const todo = await postTodo({
    id: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER), // à remplacer par celui provenant du serveur
    title: todoInputEl.value,
    completed: false,
  });

  addTodo(todo, listEl);

  todoInputEl.value = '';
  todoInputEl.focus();
});

listEl.addEventListener('click', async (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todo-btn-rm')) {
    const todoId = target.parentElement.dataset.todoId;
    await deleteTodoById(todoId);
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
});


(async () => {
  const todos = await fetchTodos();

  for (const todo of todos) {
    addTodo(todo, listEl);
  }
})();
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

Exercice 4 :
Au submit du form
Envoyer une requete POST http://localhost:3000/api/todos avec
en JSON la todo à insérer
en réponse, vous recevez la même todo avec un id
puis appeler addTodo
MDN : fetch pour le POST
!!!!!! ajouter l'entete Content-type: application/json

Exercice 5 :
Au click du bouton moins
Envoyer une requete DELETE http://localhost:3000/api/todos/123 (où 123 est l'id de la todo)
et supprimer la todo du DOM une fois la reponse du serveur

*/
