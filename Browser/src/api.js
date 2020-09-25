export async function fetchTodos() {
  const res = await fetch('http://localhost:3000/api/todos');
  const todos = await res.json();

  return todos.slice(0, 10);
}

/**
 *
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
export async function postTodo(todo) {
  const headers = new Headers();
  headers.set('Content-type', 'application/json');

  const res = await fetch('http://localhost:3000/api/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers
  });

  return await res.json();
}

// export function postTodo(todo) {
//   return axios.post('http://localhost:3000/api/todos', todo);
// }

export async function deleteTodoById(id) {
  const res = await fetch('http://localhost:3000/api/todos/' + id, {
    method: 'DELETE',
  });

  return await res.json();
}
