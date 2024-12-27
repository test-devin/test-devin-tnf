import React from 'react';
import { createFileRoute } from '@umijs/tnf/router';
import Todos from '../../components/Todos';

export const Route = createFileRoute('/todos')({
  component: TodosPage,
});

function TodosPage() {
  return (
    <div>
      <h2>Todos</h2>
      <Todos />
    </div>
  );
}
