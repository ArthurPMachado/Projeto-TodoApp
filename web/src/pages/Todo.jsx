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

  function handleRefresh(descriptionParam) {
    const search = descriptionParam ? `&description_regex=/${descriptionParam}` : '';

    api.get(`?sort=-createdAt${search}`).then((response) => {
      setList(response.data);
    });
  }

  function handleSearch() {
    handleRefresh(description);
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
      handleRefresh(description);
    });
  }

  function handleMarkAsDone(todo) {
    api.put(`${todo._id}`, { ...todo, done: true }).then((response) => {
      handleRefresh(description);
    });
  }

  function handleMarkAsPending(todo) {
    api.put(`${todo._id}`, { ...todo, done: false }).then((response) => {
      handleRefresh(description);
    });
  }

  return (
    <div>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm
        handleAddTask={handleAddTask}
        description={description}
        handleChange={handleChange}
        handleSearch={handleSearch}
      />
      <TodoList
        list={list}
        handleRemove={handleRemove}
        handleMarkAsDone={handleMarkAsDone}
        handleMarkAsPending={handleMarkAsPending}
      />
    </div>
  );
}

export default Todo;
