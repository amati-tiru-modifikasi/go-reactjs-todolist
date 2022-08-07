const baseUrl = import.meta.env.VITE_API_URL;

export const loadTodos = async () => {
  const res = await fetch(baseUrl);
  return res.json;
}

export const getTodo = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`);
  return await res.json();
}

// INSERT
export const createTodo = (todo) => {
  return fetch(baseUrl, {
    method:"POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: todo.title,
      completed: todo.completed
    })
  }).then((res) => res.json())
}

// UPDATE
export const updateTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method:"PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: todo.id,
      title: todo.title,
      completed: todo.completed
    })
  }).then((res) => res.json())
}

// DELETE
export const deleteTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE"
  }).then(res => res.json())
}