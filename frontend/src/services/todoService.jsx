const baseUrl = import.meta.env.VITE_API_URL;

export const loadTodos = async () => {
  const res = await fetch(baseUrl);
  return res.json;
}

export const getTodo = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`);
  return await res.json();
}

