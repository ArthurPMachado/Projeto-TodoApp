import React, { useState } from 'react';
import api from '../services/api';

import PageHeader from '../components/PageHeader';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function Todo() {
  const [description, setDescription] = useState('');
  const [list, setList] = useState([]);

  function handleChange(event) {
    setDescription(event.target.value);
  }

  function handleAddTask() {
    api.post('', { description }).then((response) => {
      console.log('Funcionou');
    });
  }

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm
        handleAddTask={handleAddTask}
        description={description}
        handleChange={handleChange}
      />
      <TodoList />
    </div>
  );
}

export default Todo;
