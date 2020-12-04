/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import api from '../services/api';

import PageHeader from '../components/PageHeader';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

function Todo() {
  const [description, setDescription] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get('?sort=-createdAt').then((response) => {
      setDescription('');
      setList(response.data);
    });
  }, []);

  function handleRefresh() {
    api.get('?sort=-createdAt').then((response) => {
      setDescription('');
      setList(response.data);
    });
  }

  function handleChange(event) {
    setDescription(event.target.value);
  }

  function handleAddTask() {
    api.post('', { description }).then((response) => {
      handleRefresh();
    });
  }

  function handleRemove(todo) {
    api.delete(`${todo._id}`).then((response) => {
      handleRefresh();
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
      <TodoList list={list} handleRemove={handleRemove} />
    </div>
  );
}

export default Todo;
