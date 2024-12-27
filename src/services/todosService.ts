import { Todo } from '../types/todo';

export async function getTodos(): Promise<Todo[]> {
  const res = await fetch('/api/todos');
  return await res.json();
}

export async function addTodo(newItem: Pick<Todo, 'title'>): Promise<Todo> {
  const res = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(newItem),
    headers: { 'Content-Type': 'application/json' },
  });
  return await res.json();
}

export async function updateTodo(id: number, updatedItem: Pick<Todo, 'title'>): Promise<Todo> {
  const res = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedItem),
    headers: { 'Content-Type': 'application/json' },
  });
  return await res.json();
}

export async function deleteTodo(id: number): Promise<{ success: boolean }> {
  await fetch(`/api/todos/${id}`, {
    method: 'DELETE',
  });
  return { success: true };
}
