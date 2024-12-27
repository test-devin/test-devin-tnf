import React from 'react';
import { useTodosLogic } from '../hooks/useTodosLogic';
import styles from './Todos.module.less';

function Todos() {
  const { todos, handleAddTodo, handleUpdateTodo, handleDeleteTodo } = useTodosLogic();

  return (
    <div className={styles.container}>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul className={styles.todoList}>
        {todos.map((item) => (
          <li key={item.id} className={styles.todoItem}>
            {item.title}{' '}
            <button onClick={() => handleUpdateTodo(item.id)}>Update</button>
            <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
