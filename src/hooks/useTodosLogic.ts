import { useState, useEffect } from 'react';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../services/todosService';

interface Todo {
  id: number;
  title: string;
}

export function useTodosLogic() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // Initial load
    getTodos().then((data) => setTodos(data));
  }, []);

  function handleAddTodo() {
    const newItem = { title: 'New Todo' };
    addTodo(newItem).then((res) => {
      setTodos((prev) => [...prev, res]);
    });
  }

  function handleUpdateTodo(id: number) {
    const updatedItem = { title: 'Updated Todo' };
    updateTodo(id, updatedItem).then((res) => {
      setTodos((prev) =>
        prev.map((item) => (item.id === id ? res : item)),
      );
    });
  }

  function handleDeleteTodo(id: number) {
    deleteTodo(id).then(() => {
      setTodos((prev) => prev.filter((item) => item.id !== id));
    });
  }

  return {
    todos,
    handleAddTodo,
    handleUpdateTodo,
    handleDeleteTodo,
  };
}
