export async function fetchTodos() {
  const res = await fetch('http://localhost:3000/api/todos');
  const todos = await res.json();

  return todos.slice(0, 10);
}
